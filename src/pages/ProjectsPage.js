import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SectionTitle, ProjectItem } from '../components';
import { MdSearch } from 'react-icons/md';
import projectsData from '../assets/data/projects';

const ProjectsPageStyle = styled.div`
  padding: 10rem 0;

  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }

  .projects__searchbar {
    position: relative;
    width: 300px;
    margin-top: 5rem;

    input {
      width: 100%;
      font-size: 2rem;
      padding: 0.8rem;
      color: var(--black);
      border-radius: 6px;
      outline: none;
      border: none;
    }
    .searchIcon {
      position: absolute;
      width: 2rem;
      right: 1rem;
      path {
        color: var(--deep-dark);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .projects__searchbar {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
`;

const ProjectsPage = () => {
  const [searchText, setSearchText] = useState('');
  const [projects, setProjects] = useState(projectsData);

  const handleSearchTextChange = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };

  useEffect(() => {
    const filteredProjects = projectsData
      ? projectsData.filter((project) => {
          return (
            project.name.toLowerCase().search(searchText.toLowerCase()) !== -1
          );
        })
      : [];
    setProjects(filteredProjects);
  }, [searchText]);

  return (
    <ProjectsPageStyle>
      <div className="container">
        <SectionTitle subtitle="full list of projects" title="Projects" />
        <div className="projects__searchbar">
          <form>
            <input
              type="text"
              placeholder="Project Name"
              value={searchText}
              onChange={handleSearchTextChange}
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects__allItems">
          {projects.map((project, index) => {
            return (
              <ProjectItem
                key={index}
                img={project.img}
                name={project.name}
                desc={project.desc}
                live={project.live}
                code={project.code}
              />
            );
          })}
        </div>
      </div>
    </ProjectsPageStyle>
  );
};

export default ProjectsPage;
