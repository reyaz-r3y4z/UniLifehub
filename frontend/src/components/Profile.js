import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled component for the profile container
const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1f2937;
    text-align: center;
  }

  p {
    font-size: 1rem;
    color: #374151;
    margin: 0.5rem 0;
    display: flex;
    justify-content: space-between;
  }

  .label {
    font-weight: 600;
    color: #111827;
  }
`;

// Component to show profile information
const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  // Load profile data from localStorage when the component mounts
  useEffect(() => {
    // Get profile creation data
    const savedProfile = localStorage.getItem('profileCreationFormData');
    // Get sign up data (which includes fullName)
    const signUpData = localStorage.getItem('signUpFormData');

    if (savedProfile && signUpData) {
      const profileInfo = JSON.parse(savedProfile);
      const signUpInfo = JSON.parse(signUpData);

      // Merge the fullName from signUpInfo into profileInfo
      const mergedProfileData = {
        ...profileInfo,
        fullName: signUpInfo.studentName, // Take the full name from signUp data
      };

      setProfileData(mergedProfileData);
    }
  }, []);

  // Display a loading message if data is not available yet
  if (!profileData) {
    return <p>Loading...</p>;
  }

  return (
    <ProfileContainer>
      <h2>Your Profile</h2>
      <p>
        <span className="label">Full Name:</span> 
        <span>{profileData.fullName}</span>
      </p>
      <p>
        <span className="label">Gender:</span>
        <span>{profileData.gender}</span>
      </p>
      <p>
        <span className="label">Nationality:</span> 
        <span>{profileData.nationality ? profileData.nationality.label : 'N/A'}</span>
      </p>
      <p>
        <span className="label">Age Group:</span> 
        <span>{profileData.ageGroup}</span>
      </p>
      <p>
        <span className="label">Course:</span> 
        <span>{profileData.course}</span>
      </p>
      <p>
        <span className="label">Academic Level:</span> 
        <span>{profileData.academicLevel}</span>
      </p>
      <p>
        <span className="label">Subjects Enrolled:</span>
        <span>{profileData.subjectsEnrolled.length > 0 ? profileData.subjectsEnrolled.map(subject => subject.label || subject).join(', ') : 'N/A'}</span>
      </p>
      <p>
        <span className="label">Study Preference:</span> 
        <span>{profileData.studyPreference}</span>
      </p>
      <p>
        <span className="label">Availability:</span> 
        <span>{profileData.availability.length > 0 ? profileData.availability.map(day => day.label || day).join(', ') : 'N/A'}</span>
      </p>
      <p>
        <span className="label">Learning Style:</span> 
        <span>{profileData.learningStyle}</span>
      </p>
      <p>
        <span className="label">Motivational Factors:</span>
        <span>{profileData.motivationalFactors.length > 0 ? profileData.motivationalFactors.map(factor => factor.label || factor).join(', ') : 'N/A'}</span>
      </p>
      <p>
        <span className="label">Study Environment:</span>
        <span>{profileData.studyEnvironment.length > 0 ? profileData.studyEnvironment.map(env => env.label || env).join(', ') : 'N/A'}</span>
      </p>
      <p>
        <span className="label">Academic Skills:</span>
        <span>{profileData.academicSkills.length > 0 ? profileData.academicSkills.map(skill => skill.label || skill).join(', ') : 'N/A'}</span>
      </p>
      <p>
        <span className="label">Hobbies:</span>
        <span>{profileData.hobbies.length > 0 ? profileData.hobbies.map(hobby => hobby.label || hobby).join(', ') : 'N/A'}</span>
      </p>
      <p>
        <span className="label">Interests:</span>
        <span>{profileData.interests.length > 0 ? profileData.interests.map(interest => interest.label || interest).join(', ') : 'N/A'}</span>
      </p>
      <p>
        <span className="label">Career Aspirations:</span>
        <span>{profileData.careerAspirations}</span>
      </p>
      <p>
        <span className="label">Communication Channels:</span>
        <span>{profileData.communicationChannels.length > 0 ? profileData.communicationChannels.map(channel => channel.label || channel).join(', ') : 'N/A'}</span>
      </p>
      <p>
        <span className="label">Tools Proficiency:</span>
        <span>{profileData.toolsProficiency.length > 0 ? profileData.toolsProficiency.map(tool => tool.label || tool).join(', ') : 'N/A'}</span>
      </p>
      <p>
        <span className="label">Location Preference:</span>
        <span>{profileData.locationPreference}</span>
      </p>
      <p>
        <span className="label">Languages Spoken:</span>
        <span>{profileData.languagesSpoken}</span>
      </p>
      <p>
        <span className="label">Study Partner Preference:</span>
        <span>{profileData.studyPartnerPreference}</span>
      </p>
      <p>
        <span className="label">Group Project Experience:</span>
        <span>{profileData.groupProjectExperience}</span>
      </p>
      <p>
        <span className="label">Willingness to Mentor:</span>
        <span>{profileData.willingnessToMentor}</span>
      </p>
    </ProfileContainer>
  );
};

export default Profile;
