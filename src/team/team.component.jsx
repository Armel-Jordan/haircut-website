import React from 'react';
import './team.styles.scss';

const Team = () => {
  const teamMembers = [
    {
      name: 'Olivia Smith',
      role: 'Hairdresser',
      image: 'https://images.unsplash.com/photo-1593702288056-7927b442d0fa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29pZmZldXJ8ZW58MHx8MHx8fDA%3D'
    },
    {
      name: 'Amelia Brown',
      role: 'Hairdresser',
      image: 'https://media.gettyimages.com/id/450272211/photo/woman-getting-curls-in-coiffeur-studio.jpg?s=612x612&w=gi&k=20&c=T9kGRJwz2XYm-Pq9LoCXG4mHFdywkiVqiNWq4lHkrWU='
    }
  ];

  return (
    <div className="section-anchor" id="team-top">
      <section className="team" id="team">
        <h2>Our Team</h2>
        <p>Entrust your locks to our team of skilled and creative stylists</p>
        <div className="team__grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
        <button className="team__join">Join the team</button>
      </section>
    </div>
  );
};

export default Team;