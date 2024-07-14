import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface ProjectData {
  name: string;
  description: string;
  url: string;
  stargazers_count: number;
  forks_count: number;
  languages: string[];
  updated_at: string;
  license: string;
  topics: string[];
}

const ProjectCard: React.FC<ProjectData> = (projectData) => {
  const { name, description, url, stargazers_count, forks_count, languages } =
    projectData;

  console.log(projectData);

  return (
    <div className="project-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="numbers">
        <p>
          <FontAwesomeIcon icon={faStar} /> {stargazers_count}
        </p>
        <p>
          <FontAwesomeIcon icon={faCodeFork} /> {forks_count}
        </p>
      </div>
      <div className="languages">
        {languages.slice(0, 4).map((language, index) => (
          <p key={index}>{language}</p>
        ))}
      </div>
      <Link to={url}>
        View on <FontAwesomeIcon icon={faGithub} />
      </Link>
    </div>
  );
};

export default ProjectCard;
