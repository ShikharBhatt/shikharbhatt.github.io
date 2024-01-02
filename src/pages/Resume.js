import React from 'react';
import { Link } from 'react-router-dom';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons/faFilePdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Publications from '../components/Resume/Publications';

import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Publications: () => <Publications />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Shikhar Bhatt's Resume. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
            <h4><a rel="noreferrer" href="https://github.com/ShikharBhatt/shikharbhatt.github.io/blob/main/public/Shikhar_Bhatt.pdf" target="_blank">Download<FontAwesomeIcon icon={faFilePdf} /></a></h4>
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
