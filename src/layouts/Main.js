import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const SITE_URL = 'https://shikharbhatt.github.io';
const DEFAULT_IMAGE = `${SITE_URL}/images/me.jpg`;

const Main = (props) => {
  const { pathname } = useLocation();
  const canonicalUrl = pathname === '/' ? SITE_URL : `${SITE_URL}${pathname}`;
  const pageTitle = props.title ? `${props.title} | Shikhar Bhatt` : 'Shikhar Bhatt';
  const description = props.description || "Shikhar Bhatt's personal website.";

  return (
    <HelmetProvider>
      <Analytics />
      <ScrollToTop />
      <Helmet titleTemplate="%s | Shikhar Bhatt" defaultTitle="Shikhar Bhatt" defer={false}>
        {props.title && <title>{props.title}</title>}
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content={description} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={DEFAULT_IMAGE} />
        <meta property="og:site_name" content="Shikhar Bhatt" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={DEFAULT_IMAGE} />
      </Helmet>
      <div id="wrapper">
        <Navigation />
        <div id="main">
          {props.children}
        </div>
        {props.fullPage ? null : <SideBar />}
      </div>
    </HelmetProvider>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Shikhar Bhatt's personal website.",
};

export default Main;
