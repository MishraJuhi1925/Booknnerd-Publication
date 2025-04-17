import React from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/service-detail.css';

function ServiceDetail() {
  const { slug } = useParams();
 
  const serviceDetails = {
    'post-examination-services': {
      title: "📘 Post-Examination Services",
      description: "At Booknerd Publication LLP, we provide a full suite of post-examination services to help institutions manage result processing securely, accurately, and efficiently — whether the assessment is on paper, digital, or hybrid.",
      mainHeading: {
        title: "✍ OMR, CBT, and OSM Processing",
        content: "We offer complete processing solutions across all examination modes:"
      },
      sections: [
        {
          title: "🟡 OMR (Optical Mark Recognition)",
          content: "Our OMR solution software ensures high-speed scanning with built-in error detection. Key features include:",
          features: [
            "Auto-flagging of unreadable or wrongly-marked responses",
            "Instant identification of discrepancies or missing fields",
            "Clean, verified data ready for result processing"
          ]
        },
        {
          title: "💻 CBT (Computer-Based Testing)",
          content: "Our CBT platform is robust and secure, offering:",
          features: [
            "Blockchain-based question banks with question randomization",
            "Question and answer shuffling with encrypted encoding",
            "AI-enabled eye detection and activity monitoring",
            "Full-screen lockdown to prevent cheating",
            "Real-time scoring and result generation",
            "Live dashboards for test monitoring"
          ]
        },
        {
          title: "🖥 On-Screen Evaluation (OSM)",
          content: "Our On-Screen Evaluation (OSM) System digitizes the evaluation of physical theory answer scripts via a secure, centralized platform. No cutting of answer sheets is required — our scanners preserve the original integrity of the script. We support institutions by providing:",
          features: [
            "High-speed scanning at exam centers or our designated hubs",
            "Secure cloud upload with encrypted access",
            "Laptops for teachers with orientation and support",
            "Centralized dashboard for admin oversight"
          ]
        }
      ]
    },
    'pre-examination-services': {
    title: "📘 Pre-Examination Services",
    description: "At Booknerd Publication LLP, we provide secure, scalable, and end-to-end pre-examination solutions. Our services are designed to simplify, digitize, and safeguard every stage of the pre-exam process for examination boards, universities, and recruiters.",
    sections: [
      {
        title: "📝 Application Management with Integrated Payment Gateway",
        content: "We offer a robust application management platform for both online and offline forms. Candidates can register, upload documents, and track their application status with ease. The system includes a secure, integrated payment gateway for seamless collection of examination or registration fees — featuring real-time tracking, instant confirmations, and admin-ready MIS reports for reconciliation."
      },
      {
        title: "🔐 Data Handling",
        content: "All candidate data is collected, validated, and stored securely in encrypted databases. We implement role-based access, audit trails, and regular backups to ensure data integrity, compliance, and zero leakage."
      },
      {
        title: "🎟 Admit Card Generation",
        content: "We generate personalized admit cards/hall tickets complete with candidate photos, roll numbers, exam details, and QR/barcodes for verification. Admit cards are distributed digitally or physically, with support for automated center-wise distribution."
      },
      {
        title: "🧾 Question Paper Creation, Printing & Packing",
        content: "From syllabus-aligned question paper creation by subject experts to confidential printing and secure packing, we handle it all. Papers are moderated, proofread, and then printed in CCTV-monitored high-security environments. They are center-sorted, tamper-proof packed, and dispatched with full traceability to prevent leaks and ensure delivery to authorized officials only."
      },
      {
        title: "🗂 Answer Sheet Printing",
        content: "We print theory and OMR answer sheets using high-quality materials with features like barcodes, serial numbers, and pre-printed candidate details. Each batch is quality-checked to meet institutional compliance and scanning readiness."
      },
      {
        title: "🚚 Secure Delivery",
        content: "All pre-exam materials — from admit cards to question papers and answer sheets — are delivered using tamper-proof packaging and GPS-tracked logistics. Our handover protocols guarantee that materials reach only verified exam center coordinators."
      }
    ]
  },
    'our-mission': {
      title: "🎯 Our Mission",
      description: "At Booknerd Publication LLP, our mission is to deliver examinations that are secure, transparent, and future-ready.",
      // Add mission details here
    },
    'end-to-end-exam-execution-services': {
        title: "📘 Conduction of Examination",
        description: "We provide complete on-ground support for exam day execution, ensuring that every step – from logistics to integrity control – is handled with precision and security.",
        mainHeading: {
          title: "✍ Key Services Include:",
         
        },
        sections: [
          // {
          //   title: "Key Services Include:",
          //   content: "We provide the following key services to ensure smooth and secure exam conduction:"
          // },
          {
            title: "• Center Management",
            content: "Identification, setup, and coordination of examination centers across multiple locations."
          },
          {
            title: "• Invigilator Deployment",
            content: "Trained invigilators and supervisors provided as per the scale and requirement of the exam."
          },
          {
            title: "• CCTV Surveillance",
            content: "Installation of CCTV cameras at examination centers for real-time monitoring and recording."
          },
          {
            title: "• Biometric & ID Verification",
            content: "On-site candidate verification using biometric scanners and photo ID matching to eliminate impersonation."
          },
          {
            title: "• Cheating Prevention",
            content: "Strict protocols including frisking, and multiple invigilators per room to prevent malpractice."
          },
          {
            title: "• Logistics & Stationery",
            content: "Supply and management of question papers, OMR sheets, attendance sheets, and other exam materials."
          },
          {
            title: "• Live Monitoring",
            content: "Centralized dashboard for real-time oversight of all centers, including live CCTV feeds and attendance tracking."
          },
          // {
          //   title: "This service ensures that exams are conducted in a fair, transparent, and compliant environment, maintaining the highest standards of integrity."
          // }
        ]
      }
  };

  const currentService = serviceDetails[slug] || {
    title: "Service Not Found",
    description: "The requested service information is not available."
  };

  return (
    <div className="service-detail-page">
      <div className="service-detail-header">
        <h1 className="service-detail-title">{currentService.title}</h1>
        <div className="service-detail-divider">⸻</div>
        <p className="service-detail-description">{currentService.description}</p>

        {/* Show main heading only if it exists (for post-examination-services) */}
        {currentService.mainHeading && (
          <div className="main-heading-block">
            <h3 className="section-title">{currentService.mainHeading.title}</h3>
            <p className="section-content">{currentService.mainHeading.content}</p>
          </div>
        )}
      </div>

      <div className="service-details-grid">
        {currentService.sections && currentService.sections.map((section, index) => (
          <div key={index} className="service-detail-card">
            <div className="service-detail-content">
              <h3 className="section-title">{section.title}</h3>
              <p className="section-content">{section.content}</p>

              {section.features && (
                <ul className="feature-list">
                  {section.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceDetail;