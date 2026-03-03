import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index: React.FC = () => (
  <Main
    description={`${"Shikhar Bhatt's personal website, "}Senior Software Engineer at Impactility`}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. You can read more
        {' '}
        <Link to="/about">about me</Link>
        , explore my
        {' '}
        <Link to="/resume">resume</Link>
        , 
        {' '}
        <Link to="/projects">projects</Link>
        , or
        {' '}
        <Link to="/contact">contact</Link>
        {' '}
        me directly.
      </p>
    </article>
  </Main>
);

export default Index;

