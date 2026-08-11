export interface EarlierProject {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export const earlierProjects: EarlierProject[] = [
  {
    title: "Gemini Image Studio",
    description:
      "Authenticated AI image workspace with batch prompting, reference uploads, model-aware controls, cost estimates, and Google Drive export.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Gemini API",
      "AWS S3",
      "Google Drive API",
    ],
    liveUrl: "https://gemini-image-studio-ai.vercel.app/",
    githubUrl: "https://github.com/DeveloperRidoy/gemini-image-studio",
  },
  {
    title: "PixFi",
    description:
      "Hackathon-built on-chain fundraising canvas with wallet-based pixel placement, campaign escrow, refunds, and NFT rewards.",
    technologies: ["Next.js", "TypeScript", "Polkadot.js", "Ink!", "Konva.js"],
    liveUrl: "https://pixfi.vercel.app/",
    githubUrl: "https://github.com/DeveloperRidoy/pixfi",
  },
  {
    title: "FlashForge",
    description:
      "Spaced-repetition flashcard app with SM-2 scheduling, deck management, review sessions, and progress analytics.",
    technologies: ["Next.js", "TypeScript", "Zustand", "Recharts", "Radix UI"],
    liveUrl: "https://flashforge-1.vercel.app/",
    githubUrl: "https://github.com/DeveloperRidoy/flashforge",
  },
  {
    title: "CodeX",
    description:
      "Browser-based HTML, CSS, and JavaScript editor with resizable panels, live preview, custom head settings, and single-file export.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://codex-1.vercel.app/",
    githubUrl: "https://github.com/DeveloperRidoy/codex",
  },
  {
    title: "Dev Connector",
    description:
      "Full-stack developer community with JWT authentication, developer profiles, posts, and social interactions.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://dev-connector-ui3h.onrender.com/",
    githubUrl: "https://github.com/DeveloperRidoy/dev-connector",
  },
  {
    title: "Quizy",
    description:
      "Configurable trivia app with category, difficulty, and question-type filters, immediate answer feedback, and score tracking.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Open Trivia DB"],
    liveUrl: "https://quizy-1.vercel.app/",
    githubUrl: "https://github.com/DeveloperRidoy/quizy",
  },
  {
    title: "Socket Chat",
    description:
      "Room-based real-time chat app with instant message broadcasting and room switching.",
    technologies: ["Node.js", "Express", "Socket.IO", "Tailwind CSS"],
    liveUrl: "https://socket-chat-mivu.onrender.com/",
    githubUrl: "https://github.com/DeveloperRidoy/socket-chat",
  },
  {
    title: "Waves Music",
    description:
      "Responsive music player with a track library, playback controls, volume control, looping, and SoundCloud-hosted audio.",
    technologies: ["Next.js", "React", "Sass", "SoundCloud"],
    liveUrl: "https://waves-2.web.app/",
    githubUrl: "https://github.com/DeveloperRidoy/waves-music-app",
  },
];
