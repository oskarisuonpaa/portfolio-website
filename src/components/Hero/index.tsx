import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <section className="intro">
        <h1>~$ whoami</h1>
        <div className="separator"></div>
        <p>
          I'm a software engineering student at the Lappeenranta-Lahti
          University of Technology (LUT) and an information and communication
          technologies student at the LAB University of Applied Sciences.
        </p>
      </section>
      <section className="details">
        <h2>About Me</h2>
        <div className="separator"></div>
        <p>
          I'm passionate about all types of technology and always looking for
          new challenges. My primary interests are in:
        </p>
        <ul>
          <li>Game development</li>
          <li>Artificial Intelligence</li>
          <li>Web development (with a preference for backend)</li>
        </ul>
        <p>
          I have experience in a wide variety of programming languages and
          technologies. I'm always looking for new opportunities to learn and
          grow as a developer.
        </p>
        <p>
          After completing my bachelor's degree, I plan to continue my studies
          in the field of systems and services development in the master's
          degree program at LUT.
        </p>
      </section>
      <section className="cta">
        <h2>Explore More</h2>
        <div className="separator"></div>
        <p>
          Check out my <Link to="/projects">projects</Link>, read my{' '}
          <Link to="/blog">blog</Link>, or{' '}
          <Link to="/contact">get in touch</Link> with me.
        </p>
      </section>
    </div>
  );
};

export default Hero;
