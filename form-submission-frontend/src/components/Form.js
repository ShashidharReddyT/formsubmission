import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully');
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Failed to submit form');
    }
  };

  return (
    <div className="form">
      <h1>Sign Up for Free</h1>
      <form onSubmit={handleSubmit}>
        <div className="field-wrap">
          <label className={formData.firstName ? 'active' : ''}>
            First Name<span className="req">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field-wrap">
          <label className={formData.lastName ? 'active' : ''}>
            Last Name<span className="req">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field-wrap">
          <label className={formData.email ? 'active' : ''}>
            Email Address<span className="req">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field-wrap">
          <label className={formData.password ? 'active' : ''}>
            Set A Password<span className="req">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="button button-block">Get Started</button>
      </form>
      <Link
        to={{
          pathname: '/submitted',
          state: formData,
        }}
        className="button button-block"
      >
        Check Submitted Data
      </Link>
    </div>
  );
};

export default Form;
