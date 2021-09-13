import React from 'react';
import styled from 'styled-components';
import { MdFileDownload } from 'react-icons/md';
import { PText, Button } from '../components';
import resumeFile from '../assets/files/GlynResume2021.pdf';

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
        <p className="about__subheading">A little more about</p>
        <h2 className="about__heading">Glyn Finck</h2>
        <div className="about__info">
          <PText>
            I grew up in Vancouver, Canada and I learned early on to appreciate
            the beauty of the city I lived in. Whether it be skiing up at
            Whistler or boating in the Howe sound I always loved to get outdoors
            and enjoy the picturesque scenery here.
            <br /> <br />
            During attending high school at Rockridge Secondary I found my
            passion for Mathematics and Science which would later lead to my
            interest in Engineering. Although I knew I was deeply interested in
            the subjects of Mathematics and Science during high school, it
            wasn’t until university that I got my first exposure to Software
            Engineering taking an introductory course in C at the University of
            Victoria. I immediately fell in love with programming, finding it
            hard to put the computer down at times and take a break.
            <br /> <br />
            After this I knew that I was interested in programming and software
            engineering but remained passionate about the other faculties of
            engineering. Because of this I decided to transfer into Engineering
            Physics at the University of British Columbia. Throughout my degree
            I continued to narrow my interests through taking technical
            electives within my program and ultimately solidified my interest in
            Software Engineering.
            <br /> <br />
            My experience related to the Software comes from a mix of courses
            that I have taken as well as through teaching myself new
            technologies. This experience is highlighted in the personal
            projects found on this website and through some of my past roles.
            <br /> <br />I thank you for reading through all of this and hope
            that you’ve learned a little bit more about me.
          </PText>
        </div>
        <Button
          text="Download Resume"
          icon={<MdFileDownload />}
          to={resumeFile}
          type="download"
          download="GlynsResume2021"
        />
      </div>
    </AboutPageStyle>
  );
};

export default AboutPage;
