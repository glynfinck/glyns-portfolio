import React from 'react';
import PText from '../Section/PText';
import Button from '../UI/Button';
import styled from 'styled-components';

const ContactBannerStyle = styled.div`
  padding: 10rem 0;

  .contactBanner__wrapper {
    display: flex;
    flex-direction: column;
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

const ContactBanner = () => {
  return (
    <ContactBannerStyle>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Have a project in mind</PText>
          <h3 className="contactBanner__heading">Let me help you</h3>
          <Button to="/contact" text="Contact Me" />
        </div>
      </div>
    </ContactBannerStyle>
  );
};

export default ContactBanner;
