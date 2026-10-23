import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sandeep Maharjan | Aspiring Software QA Engineer & Backend Developer",
    short_name: "Sandeep Maharjan",
    description:
      "Sandeep Maharjan - Aspiring Software QA Engineer & Backend Developer with 2+ years of experience in Node.js, Express, TypeScript, and MongoDB.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "qa",
      "software testing",
      "backend developer",
      "nodejs",
      "web development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
