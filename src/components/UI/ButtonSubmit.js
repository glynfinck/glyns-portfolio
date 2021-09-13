import React from 'react';
import styled from 'styled-components';

const ButtonSubmitStyle = styled.div`
  button {
    background-color: var(--gray-1);
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-flex;
    text-align: center;
    align-content: center;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--gray-1);
    gap: 1rem;
    cursor: pointer;

    .button__textContainer {
      color: var(--dark-bg);
      font-size: 1.8rem;
    }

    .button__iconContainer {
      height: 3rem;
      width: 3rem;
      svg {
        fill: var(--dark-bg);
      }
    }
    &:disabled {
      background-color: var(--gray-1-diabled);
      border-color: var(--gray-1-diabled);
      cursor: not-allowed;
    }
  }

  @media only screen and (max-width: 768px) {
    .button__textContainer {
      font-size: 1.3rem;
    }
  }
`;

const ButtonSubmit = ({ text, icon, outline, disabled }) => {
  return (
    <ButtonSubmitStyle outline={outline} icon={icon} className="button-wrapper">
      <button type="submit" disabled={disabled}>
        <div className="button__textContainer">{text}</div>
        {!!icon && <div className="button__iconContainer">{icon}</div>}
      </button>
    </ButtonSubmitStyle>
  );
};

export default ButtonSubmit;
