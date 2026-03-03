import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const SITE_URL = 'https://shikharbhatt.github.io';
const DEFAULT_IMAGE = `${SITE_URL}/images/me.jpg`;

interface MainProps {
  children?: React.ReactNode;
  fullPage?: boolean;
  title?: string | null;
  description?: string;
}

const Main: React.FC<MainProps> = ({
  children = null,
  fullPage = false,
  title = null,
  description = "Shikhar Bhatt's personal website.",
}) => {
  const { pathname } = useLocation();
  const canonicalUrl = pathname === '/' ? SITE_URL : `${SITE_URL}${pathname}`;
  const pageTitle = title ? `${title} | Shikhar Bhatt` : 'Shikhar Bhatt';

  return (
    <HelmetProvider>
      <Analytics />
      <ScrollToTop />
      <Helmet titleTemplate="%s | Shikhar Bhatt" defaultTitle="Shikhar Bhatt" defer={false}>
        {title && <title>{title}</title>}
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
          {children}
        </div>
        {fullPage ? null : <SideBar />}
      </div>
    </HelmetProvider>
  );
};

export default Main;

