import React from 'react';
import styled from 'styled-components';

const TechnologyStyle = styled.div`
  flex: 0 1 auto;
  font-size: 1rem;
  border-radius: 1rem;
  background-color: var(--gray-1);
  color: var(--deep-dark);
  padding: 0.8rem;
`;

const Technology = ({ name }) => {
  return <TechnologyStyle>{name}</TechnologyStyle>;
};

export default Technology;
