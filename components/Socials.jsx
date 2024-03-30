import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
} from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

export const socialData = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/ailove_vgf/",
    Icon: AiFillInstagram,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61557586390371",
    Icon: FaFacebook,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
