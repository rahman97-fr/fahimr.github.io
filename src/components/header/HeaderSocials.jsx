import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { BiLogoMessenger } from 'react-icons/bi';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      {/* Icon for GitHub */}
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
      {/* Icon for LinkedIn */}
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin />
      </a>
      {/* Icon for Messenger */}
      <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
        <BiLogoMessenger />
      </a>
    </div>
  );
};

export default HeaderSocials;
