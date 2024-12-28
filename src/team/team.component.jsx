import React from 'react';
import './team.styles.scss';

const Team = () => {
  const teamMembers = [
    {
      name: 'Olivia Smith',
      role: 'Hairdresser',
      image: '/path/to/olivia.jpg'
    },
    {
      name: 'Amelia Brown',
      role: 'Hairdresser',
      image: '/path/to/amelia.jpg'
    }
  ];

  return (
    <section className="team">
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
  );
};

export default Team;