import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <h1 className="about-title">About Us</h1>
      
      <section className="about-section">
        <h2>About SVNIT</h2>
        <div className="content-wrapper">
          <p>
            The Institute was established as Sardar Vallabhbhai Regional College of Engineering & Technology (SVRCET) 
            Surat in 1961 as one of the Regional Engineering Colleges (RECs) to impart technical education. The 
            Government of India declared the Sardar Vallabhbhai Regional College of Engineering & Technology (SVRCET) 
            Surat to Sardar Vallabhbhai National Institute of Technology (SVNIT) Surat with status of 'Deemed University' 
            with effect from 4th December, 2002. With the enactment of National Institutes of Technology Act-2007, the 
            Institute has been granted the status of 'Institution of National Importance' w.e.f. August 15, 2007.
          </p>
          <p>
            The Institute now offers eleven (11) B.Tech. Degree Programmes, twenty-one (21) M.Tech. Degree Programmes, 
            three (03) Five Years Integrated M.Sc. Degree Programmes in Chemistry, Mathematics & Physics, One (01) Five 
            Years Integrated B.Tech and M.Tech Degree Programme and Master of Business Administration in Business Analytics. 
            Institute offers Doctoral Degree Programme in Engineering, Science, Management and English. Institute also 
            offers M. Tech (R) in all the engineering disciplines.
          </p>
          <p>
            The Institute has been recognized by the Government of India as one of the centres for the Quality 
            Improvement Programme for M.Tech. and Ph.D.
          </p>
          <p>
            Institute has also established the Centre of Indian Knowledge System and Centre for the Tribal Technology 
            Development.
          </p>
          <div className="">
          <img 
              src={"https://i.ibb.co/84MfjQph/svnit-main-gate.jpg"}
              alt="SVNIT-Main-Gate" 
              className="campus-image"
            />
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>About Department of Electrical Engineering</h2>
        <div className="content-wrapper">
          <div className="">
            <img 
              src={"https://i.ibb.co/jPNkdgQv/electrical-engg-svnit.jpg"}
              alt="Electrical Engineering Department" 
              className="campus-image"
            />
          </div>
          <p>
            The Department of Electrical Engineering (DoEE) is one of the oldest departments established in 1961. 
            Currently, the department offers B. Tech. in Electrical Engineering and B. Tech. Minor in Electrical 
            Engineering for other discipline students, along with M. Tech. in Power Electronics and Electric Drives, 
            M. Tech. in Power Systems and M. Tech. in Instrumentation and Control. Also, the department offers PhD 
            programme in the research areas of power electronics and electrical drives, power systems, renewable 
            energy, control systems, electrical vehicles and other area of electrical engineering. The department 
            provides consultancy and electrical testing services to various industries, government and semi-government 
            organizations.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About; 