import React from 'react';
import PText from '../Section/PText';
import FooterColumn from './FooterColumn';
import styled from 'styled-components';

const FooterStyle = styled.div`
  padding: 10rem 0;
  padding-bottom: 0;
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
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;

    .para {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    padding-top: 7rem;
    .container {
      flex-direction: column;
      gap: 6rem;
      & > div {
        margin-top: 5rem;
      }
      .footer__col1 .para {
        max-width: 100%;
      }
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Glyn Finck</h1>
          <PText>
            I am an aspiring software engineer from Vancouver, BC. I love to
            build cool projects that have a unique application and intuitive
            design. Solving tough problems is something that I am very
            passionate about.
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
      <div className="copyright">
        <div className="container">
          <PText>© 2021 - Glyn Finck</PText>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
