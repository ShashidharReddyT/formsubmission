import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import SubmittedData from './components/SubmittedData';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/submitted" element={<SubmittedData />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
