import { Icons } from "@/components/icons";

export const DATA = {
  name: "Fraser Griffiths",
  initials: "FG",
  url: "http://localhost:3000",
  location: "United Kingdom, England, Worcestershire",
  locationLink: "https://www.google.com/maps/place/worcestershire",
description:
  "Software engineer from Worcestershire with a passion for building impactful, production-ready apps. Skilled in modern web and backend technologies, and a big fan of dogs.",

summary:
  "Full-stack engineer focused on React, Next.js, and scalable systems. Problem solver, tech enthusiast, and dog lover.",

  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Docker",
    "Java",
    "Rust",
  ],
  contact: {
    email: "hi.lydon@gmail.com",
    tel: "+44 7840 933636",
    discord: ".lydon.",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/LydonDev",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hi.lydon@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Sylant LLC",
      href: "https://sylant.net",
      badges: [],
      location: "In Person",
      title: "Chief Operating Officer",
      logoUrl: "/Sylant.png",
      start: "March 19, 2025",
      end: "September 19, 2025",
      description:
        "Oversaw key areas including marketing, funding, customer engagement, and overall client experience. Contributed to strategic growth initiatives and operational efficiency improvements.",
    },
        {
      company: "Pyrax",
      href: "https://pyrax.sh",
      badges: [],
      location: "In Person",
      title: "Chief Executive Officer",
      logoUrl: "/Pyrax.png",
      start: "September 13, 2025",
      end: "Current",
      description:
          "Pyrax is an enterprise solution for business and individuals looking for custom build preformative software of any kind."
    },
  ],
} as const;
