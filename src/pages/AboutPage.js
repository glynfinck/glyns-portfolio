import React from 'react';
import styled from 'styled-components';
import { MdFileDownload } from 'react-icons/md';
import { PText, Button } from '../components';

const AboutPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;

  padding: 20rem 0 10rem 0;
  .container {
    padding: 0 3rem 0 3rem;
    .about__subheading {
      padding-top: 1rem;
      font-size: 1.6rem;
    }
    .about__heading {
      padding-top: 0.5rem;
      font-size: 3rem;
    }
    .about__info {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      .para {
        text-align: justify;
        font-size: 1.6rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      .about__subheading {
        font-size: 1.3rem;
      }
      .about__heading {
        font-size: 2.5rem;
      }
      .about__info {
        .para {
          text-align: center;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

const AboutPage = () => {
  return (
    <AboutPageStyle>
      <div className="container">
        <p className="about__subheading">
          Hello, my name is Glyn Finck and I am an aspiring
        </p>
        <h2 className="about__heading">Software Engineer</h2>
        <div className="about__info">
          <PText>
            Dolor irure do in labore ea laborum ullamco laborum ipsum enim aute
            laborum. Sunt aliqua aliqua aute irure officia elit ad nulla dolore
            excepteur qui. Cupidatat sint veniam reprehenderit reprehenderit sit
            magna irure ipsum laborum occaecat occaecat ad occaecat. Qui aliqua
            cillum esse elit. Laborum id et est esse eiusmod consectetur eu sunt
            nulla velit dolore cillum Lorem.
            <br />
            <br />
            Sunt exercitation non fugiat aliquip incididunt sit non incididunt
            mollit adipisicing. Nostrud nostrud cupidatat enim non et nisi elit
            dolore anim. Non nisi consectetur enim mollit aliquip sunt. Minim
            voluptate dolor nostrud cupidatat esse. Laborum proident enim quis
            amet amet veniam velit non non enim dolor dolor. Eiusmod excepteur
            cupidatat et enim pariatur consequat qui.
            <br />
            <br />
            Occaecat do dolor non dolor culpa Lorem ad ullamco ut elit nulla
            elit magna. Occaecat sit ullamco occaecat excepteur aliquip pariatur
            magna deserunt dolore qui ad tempor et. Exercitation ipsum est
            consectetur proident aliquip esse sunt ex eu nostrud ad cupidatat
            labore ipsum. Nulla nisi quis officia sint. Duis ad non cillum est
            commodo velit.
          </PText>
        </div>
        <Button text="Download Resume" icon={<MdFileDownload />} to="#" />
      </div>
    </AboutPageStyle>
  );
};

export default AboutPage;
