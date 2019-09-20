/* eslint-disable global-require */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import routes from '../utils/routes';
import routeType from '../types/route';
import {
  cmsIdentity,
  reCAPTCHA,
} from '../utils/scripts';

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          titleFull
        }
      }
    }
  `);

  useEffect(() => {
    require('smooth-scroll')('a[href*="#"]', {
      speed: 600,
      speedAsDuration: true,
      easing: 'easeInOutCubic',
    });
  }, []);

  return (
    <Helmet>
      <title>{`${title} | ${data.site.siteMetadata.titleFull}`}</title>
      {cmsIdentity}
      {title === routes.contact.name && reCAPTCHA}
    </Helmet>
  );
};

Head.propTypes = {
  title: routeType.isRequired,
};

export default Head;
