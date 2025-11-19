export const bots = {
  sarah: {
    workflowId: "wf_68e67bb48fd08190ad23a67a8177a7c10ea9f6ef5dea0886",
    title: "Sarah Delgado – Sunshine City Mentor",
    subtitle: "Your friendly mentor helping you practice Business English in Miami.",
    placeholder: "Ask Sarah about your career or English...",
    avatarUrl: "https://www.characteracademy.us/assets/npcs/c1/q1e1.png",
  },
  lily: {
    workflowId: "wf_691daa4930208190942982cdbe29849f01c02d31b1898d33",
    title: "Lily Martinez – Social Media Guide",
    subtitle: "Ask Lily about social media content, trends, and influencer life.",
    placeholder: "Ask Lily about posts, trends, or ideas...",
    avatarUrl: "https://www.characteracademy.us/assets/npcs/c1/q1e2.png",
  },
  manny: {
    workflowId: "wf_691daaaa7118819084a8b3b4ab9ddbd609f0b4b63f350307",
    title: "Manny Menu – Food Truck Menu",
    subtitle: "Talk to Manny about street food, flavor, and taste of Miami.",
    placeholder: "Ask Manny about flavors...",
    avatarUrl: "https://www.characteracademy.us/assets/npcs/c1/q1e3.png",
  },
  // ...add more bots here over time
} as const;

export type BotKey = keyof typeof bots;
