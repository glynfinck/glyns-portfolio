import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import projects from '../../assets/data/projects';
import styled from 'styled-components';
import { SectionTitle, ProjectItem, Button } from '../../components';

SwiperCore.use([Navigation]);

const ProjectsSectionStyle = styled.div`
  padding: 10rem 0;

  .projects__seeAllButton {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 3rem;
  }

  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }

  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

const ProjectsSection = () => {
  return (
    <ProjectsSectionStyle>
      <div className="container">
        <SectionTitle subtitle="some of my recent projects" title="Projects" />
        <div className="projects__seeAllButton">
          <Button to="/projects" text="See All Projects" outline type="link" />
        </div>
        <div className="projects__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView:
                  projects.slice(0, 5).length > 1
                    ? 2
                    : projects.slice(0, 5).length,
              },
              1200: {
                slidesPerView:
                  projects.slice(0, 5).length > 2
                    ? 3
                    : projects.slice(0, 5).length,
              },
            }}
          >
            {projects.slice(0, 5).map((project) => {
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    img={project.img}
                    name={project.name}
                    desc={project.desc}
                    technologies={project.technologies}
                    live={project.live}
                    code={project.code}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectsSectionStyle>
  );
};

export default ProjectsSection;
