import React from 'react';
import SectionTitle from '../Section/SectionTitle';
import Button from '../UI/Button';
import { MdFileDownload } from 'react-icons/md';
import styled from 'styled-components';

const ResumeSectionStyle = styled.div`
  padding: 10rem 0;

  .resume__downloadButton {
    padding-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ResumeSection = () => {
  return (
    <ResumeSectionStyle>
      <SectionTitle
        subtitle="my employment history and skills"
        title="Resume"
      />
      <div className="resume__downloadButton">
        <Button
          outline
          to="files/GlynResume2021.pdf"
          text="Download Resume"
          icon={<MdFileDownload />}
        />
      </div>
    </ResumeSectionStyle>
  );
};

export default ResumeSection;
