import React from 'react';
import { useLocation } from 'react-router-dom';

const SubmittedData = () => {
  const location = useLocation();
  const formData = location.state || {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  return (
    <div className="submitted-data">
      <h1>Submitted Data</h1>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Password:</strong> {formData.password}</p>
    </div>
  );
};

export default SubmittedData;
