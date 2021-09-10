import React from 'react';
import { SectionTitle, ContactInfoItem, ContactForm } from '../components';
import styled from 'styled-components';
import { MdPhone, MdEmail, MdPlace } from 'react-icons/md';

const ContactPageStyle = styled.div`
  padding: 10rem 0;

  .contact__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
    .contact__left {
      width: 100%;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .contact__right {
      max-width: 500px;
      width: 100%;
    }
  }

  .contact__wrapper:after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  @media only screen and (max-width: 768px) {
    .contact__wrapper {
      flex-direction: column;
      gap: 8rem;
      .contact__left,
      .contact__right {
        max-width: 100%;
      }
      .contact__right {
        padding: 4rem 2rem 2rem 2rem;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    .contact__wrapper:after {
      display: none;
    }
  }
`;

const ContactPage = () => {
  return (
    <ContactPageStyle>
      <div className="container">
        <SectionTitle subtitle="get in touch" title="Contact" />
        <div className="contact__wrapper">
          <div className="contact__left">
            <ContactInfoItem
              icon={<MdPhone />}
              link="tel:604-780-1062"
              text="604-780-1062"
            />
            <ContactInfoItem
              icon={<MdEmail />}
              link="mailto:glynfinck97@gmail.com"
              text="glynfinck97@gmail.com"
            />
            <ContactInfoItem
              icon={<MdPlace />}
              link="https://goo.gl/maps/mvQmdgj1ryhymqJB8"
              text="Vancouver, BC"
            />
          </div>
          <div className="contact__right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactPageStyle>
  );
};

export default ContactPage;
