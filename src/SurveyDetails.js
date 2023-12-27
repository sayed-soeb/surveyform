
import React, { useState, useEffect } from 'react';
import './Styles/SurveyDetails.css';
import { useParams , useNavigate } from 'react-router-dom';

const SurveyDetail = () => {
  const { id } = useParams();
  const [survey, setSurvey] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSurveyDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/surveys/${id}`);
        if (response.ok) {
          const surveyData = await response.json();
          setSurvey(surveyData);
        } else {
          console.error('Failed to fetch survey details');
        }
      } catch (error) {
        console.error('Error fetching survey details:', error);
      }
    };

    fetchSurveyDetails();
  }, [id]);

  const handleGoBack = () => {
    navigate('/surveylist');
  };

  return (
    <div className='survey-details-container'>
      <h2>Survey Details</h2>
      {survey ? (
        <div>
          <p>Name: {survey.name}</p>
          <p>Gender: {survey.gender}</p>
          <p>Nationality: {survey.nationality}</p>
          <p>Email: {survey.email}</p>
          <p>Phone Number: {survey.phoneNumber}</p>
          <p>Address: {survey.address}</p>
          <p>Message: {survey.message}</p>
          <button className='close-button' onClick={handleGoBack}>x</button>
        </div>
      ) : (
        <p>Loading survey details...</p>
      )}
    </div>
  );
};

export default SurveyDetail;