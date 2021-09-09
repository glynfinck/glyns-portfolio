import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import OverlayButton from '../UI/OverlayButton';
import Button from '../UI/Button';
import Technology from './Technology';

const ProjectItemStyle = styled.div`
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

    /* .overlay {
      height: 394px;
      width: calc(100% - 6px);
      border-radius: 8px;
      overflow: hidden;
      border: 3px solid transparent;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;

      .button {
        background-color: transparent;
        color: transparent;
      }

      &:hover {
        background-color: rgba(5, 5, 5, 0.25);
        backdrop-filter: blur(5px);
        transition: 0.3s ease;

        .button {
          background-color: var(--deep-dark);
          color: var(--white);
          transition: 0.3s ease;
        }
      }
    } */
  }

  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.3rem;
  }
  .projectItem__desc {
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
    padding-bottom: 1rem;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    .button {
      .button-text {
        font-size: 1.5rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }

  @media only screen and (max-width: 950px) {
    .projectItem__buttons {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0rem;
    }
  }
`;

const ProjectItem = ({ img, name, desc, technologies, live, code }) => {
  return (
    <ProjectItemStyle>
      <div className="projectItem__img">
        {/* <div className="overlay">
          <OverlayButton href={live}>Live Preview</OverlayButton>
          <OverlayButton href={code}>Source Code</OverlayButton>
        </div> */}
        <img src={img} alt="" />
      </div>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{name}</h3>
        </Link>
        {/* <div className="projectItem__technologies">
          {technologies.map((name) => {
            return <Technology name={name} />;
          })}
        </div> */}
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
