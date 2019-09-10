import React from 'react';
import { Link } from 'gatsby';
import {
  Hero,
  Header,
  Layout,
  Head,
} from '../components';
import navLinks, { notFound } from '../utils/routes';

const NotFound = () => (
  <Layout location={notFound.name}>
    <Head location={notFound.href} />
    <Hero
      id="not-found"
      color="primary"
      image="/uploads/pnw2.jpg"
    >
      <Header>{notFound.name}</Header>
      <div className="buttons">
        <Link
          to={navLinks.home.href}
          className="button is-white is-outlined"
        >
          {navLinks.home.name}

        </Link>
        <Link
          to={navLinks.contact.href}
          className="button is-white is-outlined"
        >
          {' '}
          {navLinks.contact.name}
        </Link>
      </div>
    </Hero>
  </Layout>
);

export default NotFound;
