import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  p {
    font-family: 'RobotoMono Regular';
    font-size: 2rem;
  }
  h2 {
    font-family: 'Montserrat Bold', sans-serif;
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 4rem;
    }
  }
`;

const SectionTitle = ({ subtitle, title }) => {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </SectionTitleStyle>
  );
};

export default SectionTitle;
