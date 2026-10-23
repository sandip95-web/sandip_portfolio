import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@sandip95-web",
    icon: Icons.gitHub,
    link: "https://github.com/sandip95-web",
  },
  {
    name: "LinkedIn",
    username: "Sandeep Maharjan",
    icon: Icons.linkedin,
    link: "https://linkedin.com/in/sandip-maharjan",
  },
  {
    name: "Portfolio",
    username: "sandeepmaharjan95.com.np",
    icon: Icons.link,
    link: "https://sandeepmaharjan95.com.np/",
  },
  {
    name: "Gmail",
    username: "sandipmaharjan95@gmail.com",
    icon: Icons.gmail,
    link: "mailto:sandipmaharjan95@gmail.com",
  },
];
