import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className='flex justify-center gap-6 rounded-b-xl bg-black p-2'>
        <FontAwesomeIcon icon={faGithubSquare} className="footer--icon" size="2x" />
        <FontAwesomeIcon icon={faLinkedin} className="footer--icon" size="2x" />
      
    </div>
  )
}

export default Footer