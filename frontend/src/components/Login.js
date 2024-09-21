import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #1a237e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll just navigate to the dashboard regardless of the input
    navigate('/');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Username"
          required
        />
        <Input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password"
          required
        />
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
}

export default Login;