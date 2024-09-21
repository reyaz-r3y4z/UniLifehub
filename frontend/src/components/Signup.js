import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1f2937;
    text-align: center;
  }

  input {
    width: 100%;
    height: 38px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 1rem;
    background-color: #fff;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
    }
  }

  button {
    width: 100%;
    background-color: #1a237e;
    color: white;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;

    &:hover {
      background-color: #2563eb;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
    }
  }

  .success {
    color: green;
    text-align: center;
    margin-top: 1rem;
  }

  .error {
    color: red;
    text-align: center;
    margin-top: 1rem;
  }
`;

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentId: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate(); // Use for navigation after signup

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { studentId, password, confirmPassword } = formData;

    // Check if the student ID starts with 's'
    if (!studentId.startsWith('s')) {
      setMessage('Sign up failed: Student ID must start with "s".');
      return;
    }

    // Check if the passwords match
    if (password !== confirmPassword) {
      setMessage('Sign up failed: Passwords do not match.');
      return;
    }

    // If all validations pass, save formData to localStorage
    localStorage.setItem('signUpFormData', JSON.stringify(formData));

    // Show success message
    setMessage('Sign up successful!');

    // Simulate a successful signup by redirecting to profile creation page after a delay
    setTimeout(() => {
      // If everything is valid, redirect to Profile Creation
      navigate('/profile-creation');
    }, 1000); // Redirect after 1 second
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Student Sign Up</h2>
      <input
        type="text"
        name="studentName"
        value={formData.studentName}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
      <input
        type="text"
        name="studentId"
        value={formData.studentId}
        onChange={handleChange}
        placeholder="Student ID"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        required
      />
      <button type="submit">Sign Up</button>
      {message && (
        <div className={message.includes('failed') ? 'error' : 'success'}>
          {message}
        </div>
      )}
    </StyledForm>
  );
};

export default SignUpForm;
