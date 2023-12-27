import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'; 
import "./Styles/Survey.css";

const Survey = () => {
  const [surveyData, setSurveyData] = useState({
    name: '',
    gender: '',
    nationality: '',
    email: '',
    phoneNumber: '',
    address: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/surveys', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(surveyData),
      });

      if (response.ok) {
        toast.success('Survey submitted successfully!');
        setSurveyData({
          name: '',
          gender: '',
          nationality: '',
          email: '',
          phoneNumber: '',
          address: '',
          message: '',
        });
      } else {
        toast.error('Survey submission failed');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred');
    }
  };

  return (
    <div className='survey-container'>
      <Link to="/" className="home-button">Home</Link>
      <h2>Take a Survey</h2>
      <form className='survey-form'>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={surveyData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Gender:
          <select
            name="gender"
            value={surveyData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Nationality:
          <input
            type="text"
            name="nationality"
            value={surveyData.nationality}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={surveyData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={surveyData.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={surveyData.address}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={surveyData.message}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <button type="button" onClick={handleSubmit}>
          Submit Survey
        </button>
      </form>
    </div>
  );
};

export default Survey;
