import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="flex h-16 w-full flex-col items-center justify-center gap-12 p-8 text-2xl text-customWhite/60 md:p-24 my-12">
      <div className="flex justify-around gap-8 text-4xl">
        <FaGithub />
        <FaFacebook />
        <FaXTwitter />
        <MdOutlineEmail />
      </div>
      <div>Copyright 2023</div>
    </footer>
  );
};

export default Footer;
