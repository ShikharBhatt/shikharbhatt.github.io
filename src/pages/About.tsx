import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import Main from '../layouts/Main';

// Vite: load markdown as raw text at build time
import aboutMd from '../data/about.md?raw';

const About: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    setMarkdown(aboutMd);
  }, []);

  return (
    <Main
      description="Learn about Shikhar Bhatt"
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              Hello &#128075;
              <br />
              I&apos;m Shikhar.
            </h2>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default About;

