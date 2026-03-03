import React from 'react';
import Job from './Experience/Job';
import type { WorkPosition } from '../../data/resume/work';

interface ExperienceProps {
  data?: WorkPosition[];
}

const Experience: React.FC<ExperienceProps> = ({ data = [] }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Experience</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={`${job.name}-${job.position}`}
      />
    ))}
  </div>
);

export default Experience;

