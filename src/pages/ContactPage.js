import React from 'react';
import { SectionTitle, ContactInfoItem, ContactForm } from '../components';
import styled from 'styled-components';
import { MdPhone, MdEmail } from 'react-icons/md';

const ContactPageStyle = styled.div`
  padding: 10rem 0;

  .contact__wrapper {
    display: flex;
    gap: 10rem;

    .contact__left {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
    }
    .contact__right {
      flex: 1 1 auto;
    }
  }
  @media only screen and (max-width: 768px) {
    .contact__wrapper {
      flex-direction: column;
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
