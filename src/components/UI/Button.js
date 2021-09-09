import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    background-color: ${({ outline }) =>
      outline ? 'transparent' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: ${({ icon }) => (!!icon ? 'flex' : 'inline-block')};
    text-align: center;
    align-content: center;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--gray-1);
    gap: 1rem;

    .button__textContainer {
      flex: 0 1 auto;
      color: ${({ outline }) => (outline ? 'var(--gray-1)' : 'var(--dark-bg)')};
      font-size: 1.8rem;
    }

    .button__iconContainer {
      flex: 0 1 auto;
      height: 3rem;
      width: 3rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.4rem;
    }
  }
`;

const Button = ({ text, icon, outline, to, external }) => {
  return (
    <ButtonStyle outline={outline} icon={icon} className="button-wrapper">
      {external ? (
        <a className="button" href={to} role="button">
          <div className="button__textContainer">{text}</div>
          {!!icon && <div className="button__iconContainer">{icon}</div>}
        </a>
      ) : (
        <Link className="button" to={to} role="button">
          <div className="button__textContainer">{text}</div>
          {!!icon && <div className="button__iconContainer">{icon}</div>}
        </Link>
      )}
    </ButtonStyle>
  );
};

export default Button;
