import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h3>{data.title}</h3>
      <p className="daterange">{data.subtitle}</p>
      <p className="daterange"> {dayjs(data.date).format('MMMM YYYY')}</p>
      <a href={data.link} rel="noreferrer" target="_blank">{data.link}</a>
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

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
