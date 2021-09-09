import React from 'react';
import styled from 'styled-components';

const OverlayButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 1.5rem;
    background-color: var(--deep-dark);
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    color: var(--white);
  }

  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.2rem;
    }
  }
`;

const OverlayButton = ({ children, href }) => {
  return (
    <OverlayButtonStyle>
      <a href={href} className="button" role="button">
        {children}
      </a>
    </OverlayButtonStyle>
  );
};

export default OverlayButton;
