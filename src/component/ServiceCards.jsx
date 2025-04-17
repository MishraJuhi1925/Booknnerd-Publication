import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/services.css';

function ServiceCards() {
  const services = [
    {
      id: 3,
      title: "Pre-Examination Services",
      image: "/images/services.png",
      description: "Our *Pre-Examination Services* include the secure and confidential printing of question papers and answer sheets. These services guarantee the integrity and confidentiality of your exam materials, from the printing of question papers to the delivery of answer sheets in secure, sealed packages.",
      slug: "pre-examination-services"
    },
    {
      id: 4,
      title: "Conduction of Exam",
      image: "/images/exam-condtion.jpg",
      description: "We manage end-to-end exam execution with trained invigilators, CCTV surveillance, biometric verification, and strict protocols to ensure secure, fair, and smooth conduct of examinations.",
      slug: "end-to-end-exam-execution-services"
    },
    {
      id: 5,
      title: "Post-Examination Services",
      image: "/images/post.jpg",
      description: "From OMR sheet evaluation and secure CBT result processing to advanced On-Screen Evaluation of theory papers, we handle everything needed for accurate, efficient, and end-to-end post-examination result management.",
      slug: "post-examination-services"
    },
    
  ];

  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="learn-more">
                <Link to={`/services/${service.slug}`}>
                  Learn More <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;