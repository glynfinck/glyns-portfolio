import React from 'react';
import styled from 'styled-components';
import { MdPhone } from 'react-icons/md';

const ContactInfoStyle = styled.div`
  display: inline-flex;
  align-content: center;
  align-items: center;
  justify-content: left;
  background-color: var(--deep-dark);
  gap: 2rem;
  padding: 2rem;
  border-radius: 8px;

  .contactIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: var(--gray-2);
    border-radius: 50%;
    padding: 1.3rem;
    svg {
      width: 3.5rem;
    }
  }

  a {
    font-size: 2rem;
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
