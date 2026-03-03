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

const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '';

const sections: Record<string, React.FC> = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Publications: () => <Publications />,
};

const Resume: React.FC = () => (
  <Main
    title="Resume"
    description="Shikhar Bhatt's resume and professional experience."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
            <h4>
              <a rel="noreferrer" href={`${baseUrl}/Shikhar_Bhatt.pdf`} target="_blank">
                Download
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </h4>
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

