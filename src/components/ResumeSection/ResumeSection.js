import React from 'react';
import SectionTitle from '../Section/SectionTitle';
import Button from '../UI/Button';
import { MdFileDownload } from 'react-icons/md';
import styled from 'styled-components';
import resumeFile from '../../assets/files/GlynResume2021.pdf';

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
          to={resumeFile}
          text="Download Resume"
          type="download"
          download="GlynResume2021"
          icon={<MdFileDownload />}
        />
      </div>
    </ResumeSectionStyle>
  );
};

export default ResumeSection;
