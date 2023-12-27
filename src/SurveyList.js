// src/SurveyList.js

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import "./Styles/SurveyList.css";

const SurveyList = () => {
  const [surveys, setSurveys] = useState([]);
  const navigate = useNavigate();

  const fetchSurveys = async () => {
    try {
      const response = await fetch('https://survey-form-dyif.onrender.com/api/surveys');
      const data = await response.json();
      setSurveys(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSurveys();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/');
  };

  const handleDeleteSurvey = async (surveyId) => {
    try {
      const response = await fetch(`https://survey-form-dyif.onrender.com/api/surveys/${surveyId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success('Survey deleted successfully!');
        // Fetch surveys again after deletion
        fetchSurveys();
      } else {
        toast.error('Failed to delete survey');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred');
    }
  };

  return (
    <>
    <h2>Surveys</h2>
    
    <div className='survey-list-container'>
      
      <button className='logout-button' onClick={handleLogout}>Logout</button>
      <ul className='survey-list'>
        {surveys.map((survey) => (
          <div key={survey._id} className='survey-item'>
            <li>
              <Link to={`/survey/${survey._id}`} className='survey-link'>{survey.name}</Link>
            </li>
            <button className='delete-button' onClick={() => handleDeleteSurvey(survey._id)}>
                <FaTrash />
              </button>
          </div>
        ))}
      </ul>
    </div>
    </>
  );
};

export default SurveyList;
