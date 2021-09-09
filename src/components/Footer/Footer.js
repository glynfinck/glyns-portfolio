import React from 'react';
import PText from '../Section/PText';
import FooterColumn from './FooterColumn';
import styled from 'styled-components';

const FooterStyle = styled.div`
  padding: 10rem 0;
  background-color: var(--deep-dark);

  .container {
    display: flex;
    gap: 3rem;
  }

  .footer_col1 {
    flex: 2;
  }

  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }

  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Glyn Finck</h1>
          <PText>
            Officia magna sunt amet ullamco ex ipsum ut id. Exercitation nulla
            exercitation ut veniam aliqua consectetur voluptate qui labore
            consequat pariatur quis. Cillum officia labore reprehenderit
            eiusmod.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterColumn
            heading="Important Links"
            links={[
              { title: 'Home', path: '/home', anchor: false },
              { title: 'Projects', path: '/projects', anchor: false },
              { title: 'Resume', path: '/resume', anchor: false },
              { title: 'Contact', path: '/contact', anchor: false },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterColumn
            heading="Contact Information"
            links={[
              {
                title: '604-780-1062',
                path: 'tel:604-780-1062',
                anchor: true,
              },
              {
                title: 'glynfinck97@gmail.com',
                path: 'mailto:glynfinck97@gmail.com',
                anchor: true,
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterColumn
            heading="Social Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/glynfinck/',
                anchor: true,
              },
              {
                title: 'GitHub',
                path: 'https://github.com/glynfinck',
                anchor: true,
              },
            ]}
          />
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
