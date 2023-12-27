// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Survey from './Survey';
import SurveyList from './SurveyList';
import SurveyDetails from './SurveyDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<LoginForm />}
          />
          <Route
            path="/survey"
            element={<Survey />}
          />
          <Route
            path="/surveylist"
            element={<SurveyList />}
          />
          <Route
            path="/survey/:id"
            element={<SurveyDetails />}
          />
          <Route
            path="/signup"
            element={<SignupForm />}
          />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
