import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import './OrderNow.css';

const subjects = [
  "Business and Entrepreneurship", "English", "History", "Nursing", "Accounting", 
  "African-American Studies", "Anthropology", "Architecture", "Art, Theatre and Film", 
  "Biology", "Calculus", "Chemistry", "Communication Strategies", "Computer Science", 
  "Coursework", "Criminology", "Economics", "Education", "Environmental Issues", 
  "Ethics", "Finance", "Geography", "Healthcare", "International and Public Relations", 
  "Law and Legal Issues", "Linguistics", "Literature", "Macroeconomics", "Management", 
  "Marketing", "Mathematics", "Microeconomics", "Music", "Nutrition", "Other", 
  "Philosophy", "Physics", "Political Science", "Presentation/Powerpoint", "Psychology", 
  "Religion and Theology", "Science", "Sociology", "Sport", "Statistics", "Technology", 
  "Tourism"
];

const formattingStyles = ["APA 6", "APA 7", "MLA", "Chicago/Turabian", "Harvard", "IEEE", "Other"];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const VALID_FILE_TYPES = [
  'application/pdf', 
  'application/msword', 
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 
  'text/plain',
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/svg+xml',
  'image/webp',
  'image/tiff',
  'image/bmp'
];

function OrderNow() {
  const [orderType, setOrderType] = useState("Writing");
  const [deadlineDate, setDeadlineDate] = useState("2024-07-12");
  const [deadlineTime, setDeadlineTime] = useState("18:00");
  const [pages, setPages] = useState(1);
  const [citedResources, setCitedResources] = useState(0);
  const [formattingStyle, setFormattingStyle] = useState(formattingStyles[0]);
  const [subject, setSubject] = useState(subjects[0]);
  const [topic, setTopic] = useState("");
  const [detailedInstructions, setDetailedInstructions] = useState("");
  const [email, setEmail] = useState(""); // New state for email
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [daysLeft, setDaysLeft] = useState(0);
  const [submissionStatus, setSubmissionStatus] = useState("");

  useEffect(() => {
    const calculateDaysLeft = () => {
      const currentDate = new Date();
      const deadline = new Date(deadlineDate);
      const timeDiff = deadline - currentDate;
      const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setDaysLeft(daysLeft >= 0 ? daysLeft : 0);
    };

    calculateDaysLeft();
  }, [deadlineDate]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = [];
    let totalSize = 0;
    selectedFiles.forEach(file => {
      if (VALID_FILE_TYPES.includes(file.type) && file.size <= MAX_FILE_SIZE) {
        validFiles.push(file);
        totalSize += file.size;
      } else if (file.size > MAX_FILE_SIZE) {
        setError(`File ${file.name} exceeds the maximum size of 10MB.`);
      } else {
        setError(`File ${file.name} is not a valid document format.`);
      }
    });
    setFiles(validFiles);
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const clearFiles = () => setFiles([]);

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => value > 0 && setter(value - 1);

  const calculateWordCount = (pages) => pages * 275;

  const resetForm = () => {
    setOrderType("Writing");
    setDeadlineDate("2024-07-12");
    setDeadlineTime("18:00");
    setPages(1);
    setCitedResources(0);
    setFormattingStyle(formattingStyles[0]);
    setSubject(subjects[0]);
    setTopic("");
    setDetailedInstructions("");
    setEmail(""); // Reset email
    clearFiles();
  };

  const handleSubmit = async () => {
    if (topic === "" || detailedInstructions === "" || email === "") { // Include email check
      setSubmissionStatus("Please fill out all required fields.");
      return;
    }

    const orderDetails = {
      orderType,
      deadlineDate,
      deadlineTime,
      pages,
      citedResources,
      formattingStyle,
      subject,
      topic,
      detailedInstructions,
      email // Include email in order details
    };

    const formData = new FormData();
    formData.append('orderDetails', JSON.stringify(orderDetails));
    files.forEach(file => {
      formData.append('files', file);
    });

    try {
      const response = await fetch('/submit-order', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setSubmissionStatus("Order submitted successfully!");
        resetForm(); // Reset the form after successful submission
      } else {
        setSubmissionStatus("Error submitting order. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmissionStatus("Error submitting order. Please try again.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="order-now-container">
        <h2>Order Now</h2>
        <div className="form-group">
          <label>Order Type</label>
          <div>
            <button 
              className={`order-type-btn ${orderType === "Writing" ? "active" : ""}`} 
              onClick={() => setOrderType("Writing")}
            >
              Writing
            </button>
            <button 
              className={`order-type-btn ${orderType === "Editing" ? "active" : ""}`} 
              onClick={() => setOrderType("Editing")}
            >
              Editing
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>Deadline: {daysLeft} days left</label>
          <input type="date" value={deadlineDate} onChange={(e) => setDeadlineDate(e.target.value)} />
          <input type="time" value={deadlineTime} onChange={(e) => setDeadlineTime(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Pages</label>
          <div className="pages-input">
            <button onClick={() => decrement(setPages, pages)}>-</button>
            <input type="number" value={pages} readOnly />
            <button onClick={() => increment(setPages, pages)}>+</button>
          </div>
          <span>{calculateWordCount(pages)} words double spacing</span>
        </div>
        <div className="form-group">
          <label>Number of cited resources</label>
          <div className="cited-resources-input">
            <button onClick={() => decrement(setCitedResources, citedResources)}>-</button>
            <input type="number" value={citedResources} readOnly />
            <button onClick={() => increment(setCitedResources, citedResources)}>+</button>
          </div>
        </div>
        <div className="form-group">
          <label>Formatting Style</label>
          <select value={formattingStyle} onChange={(e) => setFormattingStyle(e.target.value)}>
            {formattingStyles.map(style => (
              <option key={style} value={style}>{style}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Subject</label>
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Topic</label>
          <input 
            type="text" 
            placeholder="Main idea" 
            value={topic} 
            onChange={(e) => setTopic(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Detailed Instructions</label>
          <textarea 
            placeholder="List your instructions or upload the files for the order." 
            value={detailedInstructions} 
            onChange={(e) => setDetailedInstructions(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <input 
            type="file" 
            id="file-input" 
            multiple 
            onChange={handleFileChange} 
            style={{ display: 'none' }} 
          />
          <label htmlFor="file-input" className="attach-files-btn">Attach files</label>
          {files.length > 0 && (
            <div className="file-list">
              <ul>
                {files.map((file, index) => (
                  <li key={index}>
                    {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    <button onClick={() => removeFile(index)}>Remove</button>
                  </li>
                ))}
              </ul>
              <div className="file-summary">
                <p>Total files: {files.length}</p>
                <p>Total size: {(files.reduce((total, file) => total + file.size, 0) / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <button onClick={clearFiles}>Clear all</button>
            </div>
          )}
          {uploading && <div className="spinner"></div>}
          {error && <p className="error">{error}</p>}
        </div>
        <div className="form-group">
          <button className="submit-btn" onClick={handleSubmit}>Submit Order</button>
        </div>
        {submissionStatus && <p className="submission-status">{submissionStatus}</p>}
      </div>
      <Footer />
    </>
  );
}

export default OrderNow;
