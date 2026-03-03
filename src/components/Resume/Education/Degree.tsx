import React from 'react';
import type { DegreeEntry } from '../../../data/resume/degrees';

interface DegreeProps {
  data: DegreeEntry;
}

const Degree: React.FC<DegreeProps> = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <p className="school">
        <a href={data.link}>{data.school}</a>
        ,
        {' '}
        {data.year}
      </p>
      {data.gpa && <p>GPA: {data.gpa}</p>}
    </header>
  </article>
);

export default Degree;

