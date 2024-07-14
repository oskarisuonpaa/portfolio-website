import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get(
        'https://github-repo-fetcher.onrender.com/repos/oskarisuonpaa/starred'
      )
      .then((response) => {
        setProjects(
          response.data.map((project: any) => {
            let name = project.name.split('-').join(' ');
            name = name.charAt(0).toUpperCase() + name.slice(1);
            return {
              name,
              description: project.description,
              url: project.url,
              stargazers_count: project.stargazers_count,
              forks_count: project.forks_count,
              languages: project.languages,
              updated_at: project.updated_at,
              license: project.license,
              topics: project.topics,
            };
          })
        );
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  const ProjectsComponent = () => {
    return (
      <div>
        {isError ? (
          <div>
            Something went wrong while fetching projects from GitHub. Use this
            instead to view my projects:{' '}
            <Link to={'https://github.com/oskarisuonpaa'}>
              Link to my GitHub
            </Link>
            .
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((projectData, index) => (
              <React.Fragment key={index}>
                <div className="project-card-container">
                  <ProjectCard {...projectData} />
                </div>
                {index % 2 === 0 && index + 1 < projects.length && (
                  <div className="vertical-separator"></div>
                )}
                {index % 2 === 1 && (
                  <div className="horizontal-separator"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="separator"></div>
      <ProjectsComponent />
    </section>
  );
};

export default Projects;
