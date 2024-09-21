import React, { useState } from 'react';
import axios from 'axios';

import styled from 'styled-components';

const StyledForm = styled.form`
  max-width: 56rem;
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
  }

  section {
    margin-bottom: 1.5rem;
    background-color: white;
    padding: 1rem;
    border-radius: 0.375rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #374151;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 0.5rem;
  }

  input, select, textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
  }

  button {
    width: 100%;
    background-color: #3b82f6;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-weight: 600;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #2563eb;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem;

    section {
      padding: 0.5rem;
    }
  }
`;
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    nationality: '',
    ageGroup: '',
    course: '',
    academicLevel: '',
    subjectsEnrolled: '',
    studyPreference: '',
    availability: '',
    learningStyle: '',
    motivationalFactors: '',
    studyEnvironment: '',
    academicSkills: '',
    hobbies: '',
    interests: '',
    careerAspirations: '',
    communicationChannels: '',
    toolsProficiency: '',
    locationPreference: '',
    languagesSpoken: '',
    studyPartnerPreference: '',
    groupProjectExperience: '',
    willingnessToMentor: ''
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', formData);
      console.log('Sign up successful', response.data);
      // Handle successful signup (e.g., redirect, show success message)
    } catch (error) {
      console.error('Sign up failed', error);
      // Handle error (e.g., show error message)
    }
  };
 
  return (
    <StyledForm onSubmit={handleSubmit}>
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Student Sign Up</h2>
 
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-2 border rounded"
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            placeholder="Nationality"
            className="w-full p-2 border rounded"
            required
          />
          <select
            name="ageGroup"
            value={formData.ageGroup}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Age Group (Optional)</option>
            <option value="18-22">18-22</option>
            <option value="23-27">23-27</option>
            <option value="28+">28+</option>
          </select>
        </div>
      </section>


 
<section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Academic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Course</option>
            <option value="masters">Master's</option>
            <option value="bachelors">Bachelor's</option>
          </select>
          <input
            type="text"
            name="academicLevel"
            value={formData.academicLevel}
            onChange={handleChange}
            placeholder="Semester/Academic Level"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="subjectsEnrolled"
            value={formData.subjectsEnrolled}
            onChange={handleChange}
            placeholder="Subjects Enrolled"
            className="w-full p-2 border rounded"
            required
          />
          <select
            name="studyPreference"
            value={formData.studyPreference}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Study Preference</option>
            <option value="group">Group</option>
            <option value="individual">Individual</option>
          </select>
          <textarea
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            placeholder="Availability for the Week"
            className="w-full p-2 border rounded"
            rows="3"
            required
          ></textarea>
        </div>
      </section>
 
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Personality and Study Habits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="learningStyle"
            value={formData.learningStyle}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Learning Style</option>
            <option value="visual">Visual</option>
            <option value="auditory">Auditory</option>
            <option value="reading">Reading/Writing</option>
            <option value="kinesthetic">Kinesthetic</option>
          </select>
          <input
            type="text"
            name="motivationalFactors"
            value={formData.motivationalFactors}
            onChange={handleChange}
            placeholder="Motivational Factors"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="studyEnvironment"
            value={formData.studyEnvironment}
            onChange={handleChange}
            placeholder="Preferred Study Environment"
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="academicSkills"
            value={formData.academicSkills}
            onChange={handleChange}
            placeholder="Strengths and Weaknesses in Academic Skills"
            className="w-full p-2 border rounded"
            rows="3"
            required
          ></textarea>
        </div>
      </section>
 
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Interests and Hobbies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
            placeholder="Hobbies"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            placeholder="Interests Outside of Academics"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="careerAspirations"
            value={formData.careerAspirations}
            onChange={handleChange}
            placeholder="Future Career Aspirations"
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </section>
 
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Technical/Work Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="communicationChannels"
            value={formData.communicationChannels}
            onChange={handleChange}
            placeholder="Preferred Communication Channels"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="toolsProficiency"
            value={formData.toolsProficiency}
            onChange={handleChange}
            placeholder="Proficiency in Tools/Technologies"
            className="w-full p-2 border rounded"
            required
          />
          <select
            name="locationPreference"
            value={formData.locationPreference}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Location Preference</option>
            <option value="inPerson">In Person</option>
            <option value="online">Online</option>
          </select>
          <input
            type="text"
            name="languagesSpoken"
            value={formData.languagesSpoken}
            onChange={handleChange}
            placeholder="Languages Spoken"
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </section>
 
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Social and Team Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="studyPartnerPreference"
            value={formData.studyPartnerPreference}
            onChange={handleChange}
            placeholder="Preferred Study Partner Personality"
            className="w-full p-2 border rounded"
            required
          />
          <select
            name="groupProjectExperience"
            value={formData.groupProjectExperience}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Past Group Project Experience</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <select
            name="willingnessToMentor"
            value={formData.willingnessToMentor}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Willingness to Mentor Others</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </section>
 
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Sign Up
      </button>
    </form>
    </StyledForm>
  );

};
 
export default SignUpForm;
 