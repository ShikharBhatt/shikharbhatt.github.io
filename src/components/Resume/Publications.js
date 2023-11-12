import React from 'react';
import { Link } from 'react-router-dom';
import publications from '../../data/resume/publications';

const Publications = () => (
  <div className="publications">
    <div className="link-to" id="publications" />
    <div className="title">
      <Link to="/contact">
        <h3>Publications</h3>
      </Link>
    </div>
    <ol className="points">
      {publications.map((publication) => (
        <li key={publication.id}>{publication.data}</li>
      ))}
    </ol>
  </div>
);

export default Publications;
