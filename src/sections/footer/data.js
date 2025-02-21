import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillGithub,
} from "react-icons/ai";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#services", title: "Services" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  { id: 1, link: "https://www.linkedin.com/in/akhtar-hussain-987668241", icon: <AiFillLinkedin /> },
  { id: 2, link: "https://wa.me/923047674336?text=Hello%20I%20need%20help!", icon: <AiOutlineWhatsApp /> },
  { id: 3, link: "https://www.instagram.com/akhtar_saharan/?igsh=czl6eml1OXQ3NzNj#", icon: <AiOutlineInstagram /> },
  { id: 4, link: "https://github.com/akhtarhossain", icon: <AiFillGithub /> },
];
