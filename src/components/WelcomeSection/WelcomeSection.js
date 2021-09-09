import React from 'react';
import heroImg from '../../assets/images/hero.png';
import PText from '../Section/PText';
import Button from '../UI/Button';
import styled from 'styled-components';

const WelcomeSectionStyle = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: height 750px;
    }

    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }

    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
  }
`;

const WelcomeSection = () => {
  return (
    <WelcomeSectionStyle>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, my name is</span>
            <span className="hero__name">Glyn Finck</span>
          </h1>
          <div className="hero__img">
            <img src={heroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              Aliquip laboris amet dolor ut proident id. Exercitation et
              excepteur commodo enim eiusmod enim irure labore esse occaecat
              fugiat.
            </PText>
          </div>
          <Button to="/projects">See Projects</Button>
        </div>
      </div>
    </WelcomeSectionStyle>
  );
};

export default WelcomeSection;
