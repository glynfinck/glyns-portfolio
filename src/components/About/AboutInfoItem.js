import React from 'react';
import styled from 'styled-components';

const AboutInfoItemStyle = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;

  .title {
    font-size: 2rem;
  }

  .items {
    display: inline-flex;
    gap: 1.5rem;
    .item {
      background-color: var(--deep-dark);
      padding: 1rem;
      border-radius: 8px;
    }
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;

    .title {
      font-size: 2rem;
    }
    .items {
      gap: 1rem;
    }
  }
`;

const AboutInfoItem = ({
  title = 'FrontEnd',
  items = ['HTML', 'CSS', 'REACT'],
}) => {
  return (
    <AboutInfoItemStyle>
      <div className="title">{title}</div>
      <div className="items">
        {items.map((item, index) => {
          return (
            <div key={index} className="item">
              {item}
            </div>
          );
        })}
      </div>
    </AboutInfoItemStyle>
  );
};

export default AboutInfoItem;
