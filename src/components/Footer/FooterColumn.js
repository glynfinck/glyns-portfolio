import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterColumnStyle = styled.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
  }
`;

const FooterColumn = ({
  heading = 'Default Heading',
  links = [
    { title: 'Home', path: '/home', anchor: false },
    { title: 'Projects', path: '/projects', anchor: false },
    { title: 'Resume', path: '/resume', anchor: false },
    { title: 'Contact', path: '/contact', anchor: false },
  ],
}) => {
  return (
    <FooterColumnStyle>
      <h1 className="heading">{heading}</h1>
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index}>
              {link.anchor ? (
                <a href={link.path}>{link.title}</a>
              ) : (
                <Link to={link.path}>{link.title}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </FooterColumnStyle>
  );
};

export default FooterColumn;
