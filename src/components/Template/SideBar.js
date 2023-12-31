import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Shikhar Bhatt</h2>
        <p><a href="mailto:shikhar.bhatt011@gmail.com">shikhar.bhatt011@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Shikhar. I am a Blockchain Engineer with full-stack capabilities.
        I have 4+ years of experience. I completed my Bachelor&apos;s of Engineering in
        Information Technology from University of Pune.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Shikhar Bhatt <Link to="/">shikharbhatt.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
