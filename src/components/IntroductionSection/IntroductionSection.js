import React from 'react';
import SectionTitle from '../Section/SectionTitle';
import PText from '../Section/PText';
import Button from '../UI/Button';
import AboutImg from '../../assets/images/placeholder-profile.jpeg';
import styled from 'styled-components';

const IntroductionSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .introSection__left {
    padding-right: 2rem;
  }
  .introSection__right {
    padding-left: 2rem;
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .introSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
  }

  @media only screen and (max-width: 950px) {
    .introSection__left {
      flex: 4;
    }
    .introSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .section-title {
      text-align: center;
    }
    .introSection__left {
      padding-right: 0px;
      width: 100%;
      justify-content: center;
    }
    .introSection__right {
      padding-left: 0px;
      margin-top: 3rem;

      img {
        max-width: 85%;
      }
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .introSection__buttons {
      flex-direction: column;
      gap: 0px;
      .button,
      a {
        text-align: center;
      }
    }
  }
`;

const IntroductionSection = () => {
  return (
    <IntroductionSectionStyle>
      <div className="container">
        <div className="introSection__left">
          <SectionTitle subtitle="Hello, my name is" title="Glyn Finck" />
          <PText>
            I am an aspiring software engineer and love to solve complex
            problems. Learning new technologies and building projects is my
            passion. More than anything, I like to build cool stuff.
          </PText>
          <div className="introSection__buttons">
            <Button to="/projects" text="Projects" type="link" />
            <Button outline to="/contact" text="Contact" type="link" />
          </div>
        </div>
        <div className="introSection__right">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </IntroductionSectionStyle>
  );
};

export default IntroductionSection;
