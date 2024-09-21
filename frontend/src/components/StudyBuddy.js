import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Select = styled.select`
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

const BuddyList = styled.div`
  margin-top: 20px;
`;

const BuddyItem = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StarButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

function StudyBuddy() {
  const [buddies, setBuddies] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    semester: '',
    gender: '',
    skills: '',
    availableTiming: '',
    subjects: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBuddies([...buddies, { ...formData, starred: false }]);
    setFormData({ name: '', semester: '', gender: '', skills: '', availableTiming: '', subjects: '' });
  };

  const toggleStar = (index) => {
    const updatedBuddies = buddies.map((buddy, i) => 
      i === index ? { ...buddy, starred: !buddy.starred } : buddy
    );
    setBuddies(updatedBuddies);
  };

  return (
    <Container>
      <h1>Find a Study Buddy</h1>
      <Form onSubmit={handleSubmit}>
        <Input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <Input name="semester" value={formData.semester} onChange={handleChange} placeholder="Semester" required />
        <Select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select>
        <Input name="skills" value={formData.skills} onChange={handleChange} placeholder="Skills (comma separated)" />
        <Input name="availableTiming" value={formData.availableTiming} onChange={handleChange} placeholder="Available Timing" />
        <Input name="subjects" value={formData.subjects} onChange={handleChange} placeholder="Current Subjects (comma separated)" required />
        <Button type="submit">Add Buddy</Button>
      </Form>
      <BuddyList>
        {buddies.map((buddy, index) => (
          <BuddyItem key={index}>
            <div>
              <h3>{buddy.name}</h3>
              <p>Semester: {buddy.semester}</p>
              <p>Gender: {buddy.gender}</p>
              <p>Skills: {buddy.skills}</p>
              <p>Available: {buddy.availableTiming}</p>
              <p>Subjects: {buddy.subjects}</p>
            </div>
            <StarButton onClick={() => toggleStar(index)}>
              {buddy.starred ? '⭐' : '☆'}
            </StarButton>
          </BuddyItem>
        ))}
      </BuddyList>
    </Container>
  );
}

export default StudyBuddy;