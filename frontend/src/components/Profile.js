import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  padding: 20px;
`;

const ProfileInfo = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
`;

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Replace with your endpoint to fetch the user's profile
    axios.get('/api/auth/profile').then((res) => {
      setUser(res.data);
    });
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileContainer>
      <h1>Profile</h1>
      <ProfileInfo>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </ProfileInfo>
    </ProfileContainer>
  );
}

export default Profile;
