import React from 'react';
import dayjs from 'dayjs';

export interface Project {
  title: string;
  subtitle: string;
  link?: string;
  image?: string;
  date: string;
  desc?: string[];
}

interface CellProps {
  data: Project;
}

const Cell: React.FC<CellProps> = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h3>{data.title}</h3>
      <p className="daterange">{data.subtitle}</p>
      <p className="daterange">{dayjs(data.date).format('MMMM YYYY')}</p>
      {data.link && (
        <a href={data.link} rel="noreferrer" target="_blank">
          View project →
        </a>
      )}
    </header>
    <br />
    {data.desc ? (
      <ul className="points">
        {data.desc.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    ) : null}
  </article>
);

export default Cell;

