import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../UI/Button';

const ProjectItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);

    img {
      height: 100%;
    }
  }

  .projectItem__info {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;

    .projectItem__title {
      font-size: 2.3rem;
    }
    .projectItem__desc {
      margin-bottom: auto;
      font-size: 1.6rem;
      font-family: 'RobotoMono Regular';
      margin-top: 1rem;
    }

    .projectItem__technologies {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      gap: 1rem;
    }

    .projectItem__buttons {
      display: flex;
      justify-content: center;
      align-items: center;

      padding-bottom: 1rem;
      gap: 1rem;

      .button {
        .button-text {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }

  @media only screen and (max-width: 950px) {
    .projectItem__info {
      .projectItem__buttons {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0rem;
        .button {
          .button__textContainer {
            font-size: 1.6rem;
          }
        }
      }
    }
  }
`;

const ProjectItem = ({ img, name, desc, technologies, live, code }) => {
  return (
    <ProjectItemStyle>
      <div className="projectItem__img">
        <img src={img} alt="" />
      </div>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{name}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        <div className="projectItem__buttons">
          <Button to={live} external text="Live Preview" />
          <Button to={code} external text="Source Code" />
        </div>
      </div>
    </ProjectItemStyle>
  );
};

export default ProjectItem;
