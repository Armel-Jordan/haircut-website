import React from 'react';

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
    <div className="scroll-mt-16" id="team-top">
      <section className="py-16 bg-gray-50" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Entrust your locks to our team of skilled and creative stylists
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-pink-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-pink-700 transition-colors">
              Join the team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;