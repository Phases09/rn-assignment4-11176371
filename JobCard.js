import React from 'react';

function JobCard({ title, company, location, salary, logo }) {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>{company}</p>
      <p>{location}</p>
      <p>{salary}</p>
      <p>{logo}</p>
    </div>
  );
}

export default JobCard;
