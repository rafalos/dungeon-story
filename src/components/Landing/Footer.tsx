import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='text-[#fff8f0] text-2xl flex h-16 justify-around items-center w-full gap-4 p-4'>
      <FaGithub />
      <FaFacebook />
      <FaXTwitter />
      <MdOutlineEmail />
    </footer>
  );
};

export default Footer;
