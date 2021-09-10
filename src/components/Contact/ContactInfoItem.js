import React from 'react';
import styled from 'styled-components';
import { MdPhone } from 'react-icons/md';

const ContactInfoStyle = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  background-color: var(--deep-dark);
  margin: 1.8rem 0;
  border-radius: 8px;

  .contactIcon {
    display: flex;
    background-color: var(--gray-1);
    margin: 1rem;
    border-radius: 50%;
    width: 4rem;
    padding: 0.75rem;
    path {
      color: var(--white);
    }
  }

  a {
    padding-left: 1rem;
    font-size: 1.5rem;
  }
`;

const ContactInfoItem = ({
  icon = <MdPhone />,
  text = '604-780-1062',
  link = 'tel:604-780-1062',
}) => {
  return (
    <ContactInfoStyle>
      <div className="contactIcon">{icon}</div>
      <a href={link}>{text}</a>
    </ContactInfoStyle>
  );
};

export default ContactInfoItem;
