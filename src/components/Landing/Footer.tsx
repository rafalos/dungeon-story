import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="text-[#fff8f0] text-2xl h-16 w-full p-4">
      <div className="flex justify-around">
        <FaGithub />
        <FaFacebook />
        <FaXTwitter />
        <MdOutlineEmail />
      </div>
    </footer>
  );
};

export default Footer;
