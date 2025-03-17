import React from 'react';
import NavbarComponent from '../components/NavbarComponent';

const AboutPage = () => {
  // Team member data
  const teamMembers = [
    {
      name: "Team Member Name 1",
      major: "Computer Science",
      photo: "/api/placeholder/200/200",
      contact: {
        whatsapp: "+62 812-3456-7890",
        email: "member1@example.com",
        social: "@member1",
        website: "member1.example.com"
      },
      quote: "The only way to do great work is to love what you do."
    },
    {
      name: "Team Member Name 2",
      major: "Information Technology",
      photo: "/api/placeholder/200/200",
      contact: {
        whatsapp: "+62 812-3456-7891",
        email: "member2@example.com",
        social: "@member2",
        website: "member2.example.com"
      },
      quote: "Innovation distinguishes between a leader and a follower."
    },
    {
      name: "Team Member Name 3",
      major: "Software Engineering",
      photo: "/api/placeholder/200/200",
      contact: {
        whatsapp: "+62 812-3456-7892",
        email: "member3@example.com",
        social: "@member3",
        website: "member3.example.com"
      },
      quote: "Be the change you wish to see in the world."
    }
  ];

  // Framework/libraries data
  const technologies = [
    {
      name: "React.js",
      logo: "/api/placeholder/120/120",
      description: "A JavaScript library for building user interfaces"
    },
    {
      name: "Tailwind CSS",
      logo: "/api/placeholder/120/120",
      description: "A utility-first CSS framework"
    },
    {
      name: "MapLibre",
      logo: "/api/placeholder/120/120",
      description: "Open-source maps for your applications"
    },
    {
      name: "MapTiler",
      logo: "/api/placeholder/120/120",
      description: "Maps for developers and designers"
    }
  ];

  const logoStyles = {
    borderRadius: "38px",
    boxShadow:  "5px 5px 10px #cbcbcb, -5px -5px 10px #ffffff"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <NavbarComponent />

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* About Our Project */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">About Our Project</h1>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col">
              {/* Project description */}
              <div className="p-6 text-center">
                <p className="text-gray-700 mb-6">
                SURVENT lahir dari semangat untuk menghadirkan informasi terkini mengenai berbagai event dan kegiatan di Surabaya. Proyek ini merupakan bagian dari perlombaan UI dalam kegiatan MINI CLASS X E-CODE HIMIT PENS, yang bertujuan untuk menciptakan aplikasi dengan manfaat nyata bagi masyarakat.
                </p>
              </div>
              
              {/* Logo with gradient background - full width */}
              <div style={logoStyles} className="flex w-11/12 mx-auto items-center justify-center p-6 bg-gradient-to-r from-white to-gray-200">
                <div className="max-w-lg w-full">
                  <img 
                    src="/img/Udah Bukan Saatnya DirumahAja.svg" 
                    alt="Udah Bukan Saatnya #DirumahAja Logo" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Product information below logo */}
              <div className="p-6 text-center">
                <div className="text-gray-700">
                  <p className="mb-2">Surabaya Event and Entertainment atau yang lebih dikenal SURVENT, hadir untuk mempermudah masyarakat dalam menemukan dan mengikuti berbagai kegiatan menarik di Surabaya, mulai dari konser, seminar, festival, hingga workshop edukatif. Aplikasi ini juga memberikan kesempatan bagi penyelenggara untuk mempromosikan event mereka kepada khalayak yang lebih luas. 
                  </p>
                  <br />
                  <p>Udah Bukan Saatnya #DirumahAja. Dengan SURVENT, kini kamu bisa dengan mudah menemukan dan menghadiri event yang sesuai dengan minatmu! Mari bersama-sama meramaikan Surabaya dengan berbagai kegiatan seru dan bermanfaat!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Framework / Libraries Used */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Framework / Libraries Used</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 flex justify-center">
                  <img src={tech.logo} alt={tech.name} className="h-24 w-auto" />
                </div>
                <div className="px-4 py-3 bg-gray-50 text-center">
                  <h3 className="text-lg font-medium text-gray-900">{tech.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Our Team */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">About Our Team</h2>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-gray-700 text-center">
              Our team consists of dedicated students committed to creating innovative solutions. 
              We believe in the power of technology to make positive changes in society, especially 
              in helping people adapt to the post-pandemic world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Member Photo */}
                <div className="p-4 flex justify-center bg-gray-50">
                  <img src={member.photo} alt={member.name} className="h-48 w-48 rounded-full object-cover" />
                </div>
                
                {/* Member Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.major}</p>
                  
                  <hr className="my-4" />
                  
                  {/* Contact Info */}
                  <div className="text-sm text-gray-700 space-y-2">
                    <p><span className="font-medium">WhatsApp:</span> {member.contact.whatsapp}</p>
                    <p><span className="font-medium">Email:</span> {member.contact.email}</p>
                    <p><span className="font-medium">Social:</span> {member.contact.social}</p>
                    <p><span className="font-medium">Website:</span> {member.contact.website}</p>
                  </div>
                  
                  <hr className="my-4" />
                  
                  {/* Quote */}
                  <div className="italic text-gray-600">
                    "{member.quote}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Udah Bukan Saatnya #DirumahAja. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;