"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

/** Must stay listed in `images.qualities` in next.config.ts. */
const PROJECT_IMAGE_QUALITY = 90;

const MIN_ZOOM = 1;
const HOVER_ZOOM = 2;
const PANE_GAP = 20;
const PANE_MAX = 580;
/** Mouse / two-finger scroll. */
const WHEEL_ZOOM_SPEED = 0.0016;
/**
 * Trackpad pinch arrives as ctrl+wheel with much smaller deltas than a
 * mouse wheel. ~12× the scroll coefficient so a pinch matches scroll zoom.
 */
const PINCH_WHEEL_SPEED = 0.02;

interface InspectableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "auto" | "low";
  focal?: "top" | "center" | "bottom";
  caption?: string;
}

function MagnifyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="10.5"
        cy="10.5"
        r="6"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M15.2 15.2 20 20"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M10.5 8v5M8 10.5h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function canHoverMagnify() {
  return (
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    window.matchMedia("(min-width: 768px)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function prefetch(src: string) {
  const img = new window.Image();
  img.src = src;
}

function clampZoom(value: number, max: number) {
  return Math.min(max, Math.max(MIN_ZOOM, value));
}

function zoomFromWheel(current: number, event: WheelEvent, max: number) {
  const pinch = event.ctrlKey || event.metaKey;
  const speed = pinch ? PINCH_WHEEL_SPEED : WHEEL_ZOOM_SPEED;
  return clampZoom(current * Math.exp(-event.deltaY * speed), max);
}

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

type SafariGestureEvent = Event & {
  scale: number;
  clientX: number;
  clientY: number;
};

interface ZoomGestureHandlers {
  getZoom: () => number;
  setZoom: (zoom: number, origin: { x: number; y: number }) => void;
  maxForWidth: (displayWidth: number) => number;
  shouldHandle?: () => boolean;
}

function originFromClient(
  node: HTMLElement,
  clientX: number,
  clientY: number,
) {
  const rect = node.getBoundingClientRect();
  return {
    x: clamp01((clientX - rect.left) / Math.max(rect.width, 1)),
    y: clamp01((clientY - rect.top) / Math.max(rect.height, 1)),
  };
}

/** Scroll-wheel, trackpad pinch (ctrl+wheel), Safari gestures, and two-finger touch. */
function attachZoomGestures(node: HTMLElement, handlers: ZoomGestureHandlers) {
  const pointers = new Map<number, { x: number; y: number }>();
  let pinchStartDist = 0;
  let pinchStartZoom = MIN_ZOOM;
  let gestureStartZoom = MIN_ZOOM;
  let safariGestureActive = false;

  const applyScale = (next: number, clientX: number, clientY: number) => {
    const rect = node.getBoundingClientRect();
    handlers.setZoom(
      clampZoom(next, handlers.maxForWidth(rect.width)),
      originFromClient(node, clientX, clientY),
    );
  };

  const onWheel = (event: WheelEvent) => {
    if (handlers.shouldHandle && !handlers.shouldHandle()) return;
    if (safariGestureActive) return;
    event.preventDefault();
    event.stopPropagation();
    applyScale(
      zoomFromWheel(handlers.getZoom(), event, Number.POSITIVE_INFINITY),
      event.clientX,
      event.clientY,
    );
  };

  const onGestureStart = (event: Event) => {
    if (handlers.shouldHandle && !handlers.shouldHandle()) return;
    event.preventDefault();
    safariGestureActive = true;
    const gesture = event as SafariGestureEvent;
    gestureStartZoom = handlers.getZoom();
    applyScale(gestureStartZoom, gesture.clientX, gesture.clientY);
  };

  const onGestureChange = (event: Event) => {
    if (handlers.shouldHandle && !handlers.shouldHandle()) return;
    event.preventDefault();
    const gesture = event as SafariGestureEvent;
    applyScale(
      gestureStartZoom * gesture.scale,
      gesture.clientX,
      gesture.clientY,
    );
  };

  const onGestureEnd = (event: Event) => {
    event.preventDefault();
    safariGestureActive = false;
  };

  const pointerDistance = () => {
    const points = [...pointers.values()];
    if (points.length < 2) return 0;
    return Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
  };

  const pointerMid = () => {
    const points = [...pointers.values()];
    return {
      x: (points[0].x + points[1].x) / 2,
      y: (points[0].y + points[1].y) / 2,
    };
  };

  const onPointerDown = (event: PointerEvent) => {
    if (event.pointerType === "mouse") return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.size === 2) {
      pinchStartDist = pointerDistance();
      pinchStartZoom = handlers.getZoom();
    }
  };

  const onPointerMove = (event: PointerEvent) => {
    if (!pointers.has(event.pointerId)) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.size !== 2 || pinchStartDist < 8) return;
    if (handlers.shouldHandle && !handlers.shouldHandle()) return;
    event.preventDefault();
    const mid = pointerMid();
    applyScale(
      pinchStartZoom * (pointerDistance() / pinchStartDist),
      mid.x,
      mid.y,
    );
  };

  const onPointerUp = (event: PointerEvent) => {
    pointers.delete(event.pointerId);
    if (pointers.size < 2) pinchStartDist = 0;
  };

  node.addEventListener("wheel", onWheel, { passive: false });
  node.addEventListener("gesturestart", onGestureStart, { passive: false });
  node.addEventListener("gesturechange", onGestureChange, { passive: false });
  node.addEventListener("gestureend", onGestureEnd, { passive: false });
  node.addEventListener("pointerdown", onPointerDown);
  node.addEventListener("pointermove", onPointerMove, { passive: false });
  node.addEventListener("pointerup", onPointerUp);
  node.addEventListener("pointercancel", onPointerUp);

  return () => {
    node.removeEventListener("wheel", onWheel);
    node.removeEventListener("gesturestart", onGestureStart);
    node.removeEventListener("gesturechange", onGestureChange);
    node.removeEventListener("gestureend", onGestureEnd);
    node.removeEventListener("pointerdown", onPointerDown);
    node.removeEventListener("pointermove", onPointerMove);
    node.removeEventListener("pointerup", onPointerUp);
    node.removeEventListener("pointercancel", onPointerUp);
  };
}

function formatZoom(zoom: number) {
  return `${Math.round(zoom * 100)}%`;
}

export function InspectableImage({
  src,
  alt,
  width,
  height,
  sizes,
  loading = "lazy",
  fetchPriority = "auto",
  focal,
  caption,
}: InspectableImageProps) {
  const titleId = useId();
  const frameRef = useRef<HTMLButtonElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const paneRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const hoverZoomLabelRef = useRef<HTMLSpanElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogFrameRef = useRef<HTMLDivElement>(null);
  const dialogStageRef = useRef<HTMLDivElement>(null);
  const dialogZoomLabelRef = useRef<HTMLSpanElement>(null);
  const pointRef = useRef({ x: 0.5, y: 0.5 });
  const hoverZoomRef = useRef(HOVER_ZOOM);
  const dialogZoomRef = useRef(MIN_ZOOM);
  const dialogPointRef = useRef({ x: 0.5, y: 0.5 });
  const hoveringRef = useRef(false);
  const dialogOpenRef = useRef(false);

  const [hovering, setHovering] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const maxZoomFor = useCallback(
    (displayWidth: number) => {
      if (displayWidth < 8) return HOVER_ZOOM;
      return Math.max(HOVER_ZOOM, width / displayWidth);
    },
    [width],
  );

  const setHoverZoomLabel = (zoom: number) => {
    if (hoverZoomLabelRef.current) {
      hoverZoomLabelRef.current.textContent = formatZoom(zoom);
    }
  };

  const setDialogZoomLabel = (zoom: number) => {
    if (dialogZoomLabelRef.current) {
      dialogZoomLabelRef.current.textContent = formatZoom(zoom);
    }
  };

  const hideHoverUi = useCallback(() => {
    hoveringRef.current = false;
    setHovering(false);
    hoverZoomRef.current = HOVER_ZOOM;
    if (lensRef.current) lensRef.current.style.opacity = "0";
    if (innerRef.current) innerRef.current.style.opacity = "0";
    if (paneRef.current) {
      paneRef.current.style.opacity = "0";
      paneRef.current.style.visibility = "hidden";
    }
  }, []);

  const layoutMagnifier = useCallback(() => {
    const frame = frameRef.current;
    const lens = lensRef.current;
    const pane = paneRef.current;
    const inner = innerRef.current;
    if (!frame) return;

    const rect = frame.getBoundingClientRect();
    const imgW = rect.width;
    const imgH = rect.height;
    if (imgW < 8 || imgH < 8) return;

    const zoom = clampZoom(hoverZoomRef.current, maxZoomFor(imgW));
    hoverZoomRef.current = zoom;
    setHoverZoomLabel(zoom);

    const showZoom = zoom > 1.02;
    const localX = pointRef.current.x * imgW;
    const localY = pointRef.current.y * imgH;

    const lensW = imgW / zoom;
    const lensH = imgH / zoom;
    const lensX = Math.min(Math.max(0, localX - lensW / 2), imgW - lensW);
    const lensY = Math.min(Math.max(0, localY - lensH / 2), imgH - lensH);

    const paneW = Math.min(PANE_MAX, Math.max(imgW, 340));
    const paneH = paneW * (imgH / imgW);
    const spaceRight = window.innerWidth - rect.right - PANE_GAP;
    const spaceLeft = rect.left - PANE_GAP;
    const useRight =
      spaceRight >= paneW || (spaceRight >= spaceLeft && spaceRight > 160);
    const fits =
      showZoom &&
      ((useRight && spaceRight >= paneW * 0.9) ||
        (!useRight && spaceLeft >= paneW * 0.9));

    if (lens) {
      lens.style.width = `${lensW}px`;
      lens.style.height = `${lensH}px`;
      lens.style.transform = `translate(${lensX}px, ${lensY}px)`;
      lens.style.opacity = fits ? "1" : "0";
    }

    if (inner) {
      inner.style.backgroundImage = `url(${src})`;
      inner.style.backgroundSize = `${zoom * 100}%`;
      inner.style.backgroundPosition = `${pointRef.current.x * 100}% ${pointRef.current.y * 100}%`;
      inner.style.opacity = showZoom && !fits ? "1" : "0";
    }

    if (pane) {
      pane.style.opacity = fits ? "1" : "0";
      pane.style.visibility = fits ? "visible" : "hidden";
    }

    if (!pane || !fits) return;

    const paneZoom = paneW / lensW;
    const paneLeft = useRight
      ? rect.right + PANE_GAP
      : rect.left - PANE_GAP - paneW;
    const paneTop = Math.min(
      Math.max(12, rect.top),
      window.innerHeight - paneH - 12,
    );

    pane.style.width = `${paneW}px`;
    pane.style.height = `${paneH}px`;
    pane.style.left = `${Math.min(Math.max(12, paneLeft), window.innerWidth - paneW - 12)}px`;
    pane.style.top = `${paneTop}px`;
    pane.style.backgroundImage = `url(${src})`;
    pane.style.backgroundSize = `${imgW * paneZoom}px ${imgH * paneZoom}px`;
    pane.style.backgroundPosition = `-${lensX * paneZoom}px -${lensY * paneZoom}px`;
  }, [maxZoomFor, src]);

  const applyDialogZoom = useCallback(() => {
    const frame = dialogFrameRef.current;
    const stage = dialogStageRef.current;
    if (!frame || !stage) return;

    const rect = frame.getBoundingClientRect();
    const zoom = clampZoom(dialogZoomRef.current, maxZoomFor(rect.width));
    dialogZoomRef.current = zoom;
    setDialogZoomLabel(zoom);

    stage.style.transformOrigin = `${dialogPointRef.current.x * 100}% ${dialogPointRef.current.y * 100}%`;
    stage.style.transform = `scale(${zoom})`;
    frame.style.cursor = zoom > 1.02 ? "crosshair" : "default";
  }, [maxZoomFor]);

  const onPointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType !== "mouse" || dialogOpenRef.current) return;
    if (!canHoverMagnify()) return;

    const rect = event.currentTarget.getBoundingClientRect();
    pointRef.current = {
      x: Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1),
      y: Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1),
    };
    layoutMagnifier();
  };

  const onPointerEnter = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType !== "mouse" || dialogOpenRef.current) return;
    if (!canHoverMagnify()) return;
    prefetch(src);
    hoverZoomRef.current = HOVER_ZOOM;
    hoveringRef.current = true;
    setHovering(true);
  };

  useEffect(() => {
    if (!hovering) return;
    layoutMagnifier();
    const sync = () => layoutMagnifier();
    window.addEventListener("scroll", sync, true);
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync, true);
      window.removeEventListener("resize", sync);
    };
  }, [hovering, layoutMagnifier]);

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;

    return attachZoomGestures(node, {
      shouldHandle: () => !dialogOpenRef.current && canHoverMagnify(),
      getZoom: () => hoverZoomRef.current,
      maxForWidth: maxZoomFor,
      setZoom: (zoom, origin) => {
        hoverZoomRef.current = zoom;
        pointRef.current = origin;
        if (!hoveringRef.current) {
          prefetch(src);
          hoveringRef.current = true;
          setHovering(true);
          return;
        }
        layoutMagnifier();
      },
    });
  }, [layoutMagnifier, maxZoomFor, src]);

  useEffect(() => {
    if (!dialogOpen) return;
    const node = dialogRef.current;
    if (!node || node.open) return;
    node.showModal();
  }, [dialogOpen]);

  useEffect(() => {
    if (!dialogOpen) return;
    const frame = dialogFrameRef.current;
    if (!frame) return;

    return attachZoomGestures(frame, {
      getZoom: () => dialogZoomRef.current,
      maxForWidth: maxZoomFor,
      setZoom: (zoom, origin) => {
        dialogZoomRef.current = zoom;
        dialogPointRef.current = origin;
        applyDialogZoom();
      },
    });
  }, [applyDialogZoom, dialogOpen, maxZoomFor]);

  const openDialog = () => {
    hideHoverUi();
    prefetch(src);
    dialogZoomRef.current = MIN_ZOOM;
    dialogPointRef.current = { x: 0.5, y: 0.5 };
    dialogOpenRef.current = true;
    setDialogOpen(true);
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const nudgeDialogZoom = (direction: 1 | -1) => {
    const frame = dialogFrameRef.current;
    const max = maxZoomFor(frame?.getBoundingClientRect().width ?? 800);
    dialogZoomRef.current = clampZoom(
      dialogZoomRef.current * (direction > 0 ? 1.25 : 0.8),
      max,
    );
    applyDialogZoom();
  };

  const onDialogPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const frame = dialogFrameRef.current;
    if (!frame || event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = frame.getBoundingClientRect();
    dialogPointRef.current = {
      x: Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1),
      y: Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1),
    };
    applyDialogZoom();
  };

  const objectPosition = focal ?? "center";

  return (
    <>
      <button
        ref={frameRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={dialogOpen}
        aria-label={`Inspect screenshot: ${alt}`}
        onClick={openDialog}
        onPointerEnter={onPointerEnter}
        onPointerMove={onPointerMove}
        onPointerLeave={hideHoverUi}
        className="group relative block w-full cursor-zoom-in touch-none overflow-hidden rounded-lg text-left"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          quality={PROJECT_IMAGE_QUALITY}
          loading={loading}
          fetchPriority={fetchPriority}
          draggable={false}
          className="h-auto w-full rounded-lg object-contain"
          style={{ objectPosition }}
        />

        <div
          ref={innerRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-lg bg-no-repeat opacity-0"
        />

        <div
          ref={lensRef}
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 rounded-md bg-white/15 opacity-0 ring-1 ring-white/80"
        />

        <span className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-stage/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-on-stage opacity-100 shadow-sm backdrop-blur-sm transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
          <MagnifyIcon className="h-3 w-3" />
          <span className="hidden [@media(hover:hover)_and_(pointer:fine)]:inline">
            <span ref={hoverZoomLabelRef}>{formatZoom(HOVER_ZOOM)}</span>
            <span> · Scroll or pinch to zoom</span>
          </span>
          <span className="[@media(hover:hover)_and_(pointer:fine)]:hidden">
            Tap to expand
          </span>
        </span>
      </button>

      {hovering &&
        createPortal(
          <div
            ref={paneRef}
            aria-hidden="true"
            className="pointer-events-none fixed z-[70] overflow-hidden rounded-2xl bg-stage bg-no-repeat shadow-2xl ring-1 ring-white/15"
            style={{ opacity: 0, visibility: "hidden" }}
          />,
          document.body,
        )}

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="inspect-dialog"
        onClose={() => {
          dialogZoomRef.current = MIN_ZOOM;
          dialogOpenRef.current = false;
          setDialogOpen(false);
        }}
      >
        {dialogOpen && (
          <div
            className="flex min-h-[100dvh] w-full flex-col items-center justify-center px-4 py-8 sm:px-8"
            onClick={(event) => {
              if (event.target === event.currentTarget) closeDialog();
            }}
          >
            <p id={titleId} className="sr-only">
              {alt}
            </p>

            <div
              className="relative w-full max-w-[1600px]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="text-sm text-on-stage-muted">
                  {caption ?? alt}
                </p>
                <div className="flex shrink-0 items-center gap-2">
                  <div className="flex items-center overflow-hidden rounded-full border border-white/15">
                    <button
                      type="button"
                      aria-label="Zoom out"
                      onClick={() => nudgeDialogZoom(-1)}
                      className="px-2.5 py-1 font-mono text-sm text-on-stage hover:bg-white/10"
                    >
                      −
                    </button>
                    <span
                      ref={dialogZoomLabelRef}
                      className="min-w-[3.25rem] border-x border-white/15 px-2 py-1 text-center font-mono text-[11px] text-on-stage-muted"
                    >
                      {formatZoom(MIN_ZOOM)}
                    </span>
                    <button
                      type="button"
                      aria-label="Zoom in"
                      onClick={() => nudgeDialogZoom(1)}
                      className="px-2.5 py-1 font-mono text-sm text-on-stage hover:bg-white/10"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={closeDialog}
                    className="rounded-full border border-white/15 bg-stage/80 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-on-stage hover:border-white/35"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div
                ref={dialogFrameRef}
                className="touch-none overflow-hidden rounded-xl bg-stage ring-1 ring-white/10"
                onPointerMove={onDialogPointerMove}
              >
                <div ref={dialogStageRef} className="origin-center">
                  <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    unoptimized
                    className="mx-auto object-contain"
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "82vh",
                    }}
                  />
                </div>
              </div>

              <p className="mt-3 hidden text-center font-mono text-[10px] uppercase tracking-[0.14em] text-on-stage-muted [@media(hover:hover)_and_(pointer:fine)]:block">
                Scroll or pinch to zoom · Move to pan · Esc to close
              </p>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
