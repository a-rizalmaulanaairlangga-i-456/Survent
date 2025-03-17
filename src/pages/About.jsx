import React from 'react';
import NavbarComponent from '../components/NavbarComponent';

const AboutPage = () => {
  // Team member data
  const teamMembers = [
    {
      name: "Rizal Maulana Airlangga",
      major: "Teknik Informatika",
      photo: "/selfPhoto/rizal.jpg",
      contact: {
        whatsapp: "+62 857-3054-0210",
        email: "rizalmaulanaairlanggad4itb2024@gmail.com",
        social: "a_rizal_i",
        github: "a-rizalmaulanaairlangga-i-456"
      },
      quote: "Apapun yang terjadi, tetaplah bernapas dengan tenang."
    },
    {
      name: "Andi Muhammad Ammar Arsyad",
      major: "Teknik Informatika",
      photo: "/selfPhoto/ammar.jpg",
      contact: {
        whatsapp: "+62 821-9290-7075",
        email: "Ammararsyad1205@gmail.com",
        social: "ammar.arsyad1",
        github: "member2.example.com"
      },
      quote: "Hidup itu seperti sepeda. Untuk menjaga keseimbangan, kamu harus terus bergerak."
    },
    {
      name: "⁠Irvan Aditya Kurniawan",
      major: "Teknik Informatika",
      photo: "/selfPhoto/irvan.jpg",
      contact: {
        whatsapp: "+62 851-7220-4869",
        email: "irvankurniawan624@gmail.com",
        social: "Coach_Irvan",
        github: "irvankurniawan624"
      },
      quote: "Dipuji tidak terbang, Dihina aku tumbang"
    }
  ];

  // Framework/libraries data
  const technologies = [
    {
      name: "React.js",
      logo: "/img/atom.png",
      description: "Perpustakaan JavaScript untuk membangun antarmuka pengguna"
    },
    {
      name: "Tailwind CSS",
      logo: "/img/tailwind.png",
      description: "Kerangka kerja CSS yang mengutamakan utilitas"
    },
    {
      name: "MapLibre",
      logo: "/img/maplibregljs.png",
      description: "Peta sumber terbuka untuk aplikasi"
    },
    {
      name: "MapTiler",
      logo: "/logo192.png",
      description: "Peta untuk pengembang dan desainer"
    }
  ];

  const logoStyles = {
    borderRadius: "38px",
    boxShadow:  "5px 5px 10px #cbcbcb, -5px -5px 10px #ffffff"
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarComponent />

      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <section className="mb-16">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">About Our Project</h1>
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col">
              <div className="p-6 text-center">
                <p className="text-gray-700 mb-6">
                SURVENT lahir dari semangat untuk menghadirkan informasi terkini mengenai berbagai event dan kegiatan di Surabaya. Proyek ini merupakan bagian dari perlombaan UI dalam kegiatan MINI CLASS X E-CODE HIMIT PENS, yang bertujuan untuk menciptakan aplikasi dengan manfaat nyata bagi masyarakat.
                </p>
              </div>
              
              <div style={logoStyles} className="flex w-11/12 mx-auto items-center justify-center p-6 bg-gradient-to-r from-white to-gray-200">
                <div className="max-w-lg w-full">
                  <img 
                    src="/img/Udah Bukan Saatnya DirumahAja.svg" 
                    alt="Udah Bukan Saatnya #DirumahAja Logo" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
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

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Framework / Libraries Used</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
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
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">About Our Team</h2>
          <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
            <p className="text-gray-700 text-center">
            Tim kami beranggotakan tiga orang yang terdiri dari Mahasiswa Politeknik Elektronika Negeri Surabaya yang berdedikasi dan berkomitmen untuk menciptakan solusi inovatif. Kami percaya pada kekuatan teknologi untuk membuat perubahan positif di masyarakat, terutama dalam membantu masyarakat beradaptasi dengan dunia pasca pandemi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <div className="p-4 flex justify-center bg-gray-50">
                  <img src={member.photo} alt={member.name} className="h-48 w-48 rounded-full object-cover" />
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.major}</p>
                  
                  <hr className="my-4" />
                  
                  <div className="text-sm text-gray-700 space-y-2">
                    <p><span className="font-medium">WhatsApp:</span> {member.contact.whatsapp}</p>
                    <p><span className="font-medium">Email:</span> {member.contact.email}</p>
                    <p><span className="font-medium">Instagram:</span><a href={`http://instagram.com/member.contact.social`} className='text-blue-600 hover:text-blue-800'> @{member.contact.social}</a></p>
                    <p><span className="font-medium">GitHub:</span> {member.contact.github}</p>
                  </div>
                  
                  <hr className="my-4" />
                  
                  <div className="italic text-gray-600">
                    "{member.quote}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} SURVENT APPS | All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;