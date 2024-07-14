import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <section className='landing'>
      <h1>
        Hi! I'm <span>Oskari</span>.
      </h1>
      <div className="separator"></div>
      <h3>
        A SWE student at <span>LUT</span> and ICT student at <span>LAB</span>,
        and a hobbyist developer.
      </h3>
      <div className="socials">
        <Link to={'https://github.com/oskarisuonpaa'}>
          <FontAwesomeIcon
            icon={faGithub}
            size={'2x'}
          />
        </Link>
        <Link to={'https://linkedin.com/in/oskarisuonpää'}>
          <FontAwesomeIcon
            icon={faLinkedin}
            size={'2x'}
          />
        </Link>
      </div>
    </section>
  );
};

export default Landing;
