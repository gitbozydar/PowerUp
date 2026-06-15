import { IconType } from "react-icons";
import { FaFacebook, FaInstagram } from "react-icons/fa";

type NavLink = {
  name: string;
  path: string;
};

type SocialLink = {
  icon: IconType;
  path: string;
};

export const links: NavLink[] = [
  { name: "Energia i Gaz", path: "/energy" },
  { name: "Audyt", path: "/audit" },
  { name: "OZE", path: "/renewable" },
  { name: "Concierge", path: "/concierge" },
];

export const socials: SocialLink[] = [
  {
    icon: FaFacebook,
    path: "https://facebook.com",
  },
  {
    icon: FaInstagram,
    path: "https://www.instagram.com/powerupenergyconsulting",
  },
];
