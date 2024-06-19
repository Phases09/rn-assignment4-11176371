import React from 'react';
import JobCard from '../components/JobCard';

function HomeScreen({ location }) {
  const { name, email } = location.state;

  return (
    <div className="home-screen">
      <h1>Welcome, {Philip}!</h1>
      <p>Your email is: {anamanphilip1@gmail.com}</p>
      <h2>Popular Jobs</h2>
      <div className="job-card-container">
        {popularJobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
      <h2>Featured Jobs</h2>
      <div className="job-card-container">
        {featuredJobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
}

const popularJobs = [
  { id: 1, title: 'Software Engineer', company: 'Facebook', location: 'New York', salary: '$180,000/year', logo: '' },
  { id: 2, title: 'Data Scientist', company: 'Amazon', location: 'Seattle', salary: '$150,000', logo: ''  },
  { id: 3, title: 'Product Manager', company: 'Google', location: 'New York', salary: '$160,000/year', logo: '' },
  { id: 4, title: 'UX Designer', company: 'Microsoft', location: 'Redmond', salary: '$120,000/year', logo: '' },
  { id: 5, title: 'Full Stack Developer', company: 'Apple', location: 'Cupertino', salary: '$140,000/year', logo: '' },
  { id: 6, title: 'Dev0ps Engineer', company: 'Netflix', location: 'Los Gatos', salary: '$130,000/year', logo: '' },
  { id: 7, title: 'Cybersecurity Specialist', company: 'IBM', location: 'Armonk', salary: '$110,000/year', logo: '' },
  { id: 8, title: 'Artificial Intelligence Engineer', company: 'NVIDIA', location: 'Santa Clara', salary: '$100,000/year', logo: '' }
];

const featuredJobs = [
  { id: 9, title: 'Product Manager', company: 'Beats', location: 'San Francisco', salary: '$84,000/year', logo: '' },
  { id: 10, title: 'UX Designer', company: 'Target', location: 'Minneapolis', salary: '$90,000/year', logo: '' },
  { id: 11, title: 'Jr Executive', company: 'Burger King', location: 'Los Angeles', salary: '$96,000/year', logo: '' },
  { id: 12, title: 'Software Engineer', company: 'Microsoft', location: 'Redmond', salary: '$86,000/year', logo: '' },
  { id: 13, title: 'Data Analyst', company: 'Walmart', location: 'Bentonville', salary: '$80,000/year', logo: '' },
  { id: 14, title: 'Full Stack Developer', company: 'Google', location: 'New York', salary: '$115,000/year', logo: '' },
  { id: 15, title: 'Cybersecurity Specialist', company: 'Home Depot', location: 'Atlanta', salary: '$100,000/year', logo: '' },
  { id: 16, title: 'Dev0ps Engineer', company: 'Amazon', location: 'Mooresville', salary: '$95,000/year', logo: '' }
];

export default HomeScreen;
