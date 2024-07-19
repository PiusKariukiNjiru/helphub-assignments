import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faFileAlt, faBook, faGraduationCap, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import './SamplePapers.css';
import Button from '../Button/Button';
const samplePapers = [
  {
    title: "Role of Parents in Teenage Alcoholism Test",
    category: "Philosophy",
    pages: 6,
    sources: 10,
    style: "MLA",
    level: "University",
    path: "/documents/role-of-parents-in-teenage-alcoholism.docx",
  },
  {
    title: "How Plath's Life Influenced Her Poetry Test",
    category: "Literature",
    pages: 4,
    sources: 3,
    style: "MLA",
    level: "College",
    path: "/documents/how-plaths-life-influenced-her-poetry.docx",
  },
  {
    title: "Reflection on Thomas Hobbes' Ideas Test",
    category: "History and Anthropology",
    pages: 2,
    sources: 1,
    style: "MLA",
    level: "High School",
    path: "/documents/reflection-on-thomas-hobbes-ideas.docx",
  },
  {
    title: "Self-Esteem: Is There a Dark Side? Test",
    category: "Philosophy",
    pages: 8,
    sources: 10,
    style: "APA",
    level: "College",
    path: "/documents/self-esteem-is-there-a-dark-side.docx",
  },
  {
    title: "Evidence Against ACER Tree Service Test",
    category: "Computer Sciences",
    pages: 12,
    sources: 10,
    style: "MLA",
    level: "College",
    path: "/documents/evidence-against-acer-tree-service.docx",
  },
  {
    title: "Marijuana Should be Illegal Test",
    category: "Health Sciences",
    pages: 4,
    sources: 7,
    style: "APA",
    level: "Master's",
    path: "/documents/marijuana-should-be-illegal.docx",
  },
  {
    title: "Genetic and Environmental Factors in Schizophrenia Test",
    category: "Health Sciences",
    pages: 4,
    sources: 6,
    style: "APA",
    level: "College",
    path: "/documents/genetic-and-environmental-factors-in-schizophrenia.docx",
  },
  {
    title: "Diseases due to Abnormalities in Lysosomes, Peroxisomes and Mitochondria Test",
    category: "Health Sciences",
    pages: 3,
    sources: 5,
    style: "MLA",
    level: "Master's",
    path: "/documents/diseases-due-to-abnormalities.docx",
  },
  {
    title: "Progeria Case Study Test",
    category: "Health Sciences",
    pages: 5,
    sources: 9,
    style: "MLA",
    level: "College",
    path: "/documents/progeria-case-study.docx",
  }

];

const SamplePapers = () => {
  return (
    <div className="sample-papers">
      <div className='samples-header'>
        <h1>Sample Papers</h1>
        <p>
          Every project we are working on requires an individual approach. We decided to provide you with a variety of articles and papers of different levels of complexity to help you set your expectations. Our goal is to assign each paper request to a writer who specializes in the subject matter and can do an extensive research.
        </p>
        <p>
          The articles presented here were created only for display purposes and were not sent to customers as final products. We will never publish an article sent to a customer, unless the customer refuses to accept it. In that case, we own the rights to the text and can display it publicly.
        </p>
      </div>
      <div className="papers-grid-container">
        <div className="papers-grid">
          {samplePapers.map((paper, index) => (
            <div key={index} className="paper-card">
              <div className="paper-card-content">
                <h3>{paper.title}</h3>
                <p className="category">{paper.category}</p>
                <div className="attributes">
                  <div className="attribute">
                    <FontAwesomeIcon icon={faFileAlt} /> {paper.pages} Pages
                  </div>
                  <div className="attribute">
                    <FontAwesomeIcon icon={faBook} /> {paper.sources} Sources
                  </div>
                  <div className="attribute">
                    <FontAwesomeIcon icon={faBookOpen} /> {paper.style} Style
                  </div>
                  <div className="attribute">
                    <FontAwesomeIcon icon={faGraduationCap} /> {paper.level} Level
                  </div>
                </div>
                <a href={paper.path} download>
                  <Button>
                    <FontAwesomeIcon icon={faFileDownload} /> Download
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SamplePapers;
