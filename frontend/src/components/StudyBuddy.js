import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import io from 'socket.io-client';

const Container = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const BuddyItem = styled.div`
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StarButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  align-self: flex-end;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.active ? '#1a237e' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : 'black'};
  border: none;
  cursor: pointer;
  margin: 0 5px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
`;

const ChatContainer = styled.div`
  height: 300px;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
`;

const ChatMessage = styled.div`
  margin-bottom: 5px;
  ${props => props.isCurrentUser ? 'text-align: right;' : ''}
`;

const socket = io('http://localhost:5000');

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
  const [activeTab, setActiveTab] = useState('find');
  const [showModal, setShowModal] = useState(false);
  const [selectedBuddy, setSelectedBuddy] = useState(null);
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem('userProfile');
    return savedProfile ? JSON.parse(savedProfile) : {
      name: '',
      email: '',
      studyPreference: '',
      availability: ''
    };
  });
  const [groups, setGroups] = useState([]);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBuddies([...buddies, { ...formData, id: Date.now(), starred: false }]);
    setFormData({ name: '', semester: '', gender: '', skills: '', availableTiming: '', subjects: '' });
  };

  const toggleStar = (id) => {
    setBuddies(buddies.map(buddy => 
      buddy.id === id ? { ...buddy, starred: !buddy.starred } : buddy
    ));
  };

  const handleCreateGroup = (e) => {
    e.preventDefault();
    const newGroup = {
      id: Date.now(),
      ...Object.fromEntries(new FormData(e.target))
    };
    setGroups([...groups, newGroup]);
    e.target.reset();
  };

  const openChat = (buddy) => {
    setSelectedBuddy(buddy);
    setShowModal(true);
    setMessages([]);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(profile));
    alert('Profile updated successfully!');
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage && selectedBuddy) {
      const messageData = {
        roomId: `chat_${selectedBuddy.id}`,
        userId: 'currentUser',
        text: inputMessage,
        sender: 'You'
      };
      socket.emit('message', messageData);
      setMessages(prevMessages => [...prevMessages, messageData]);
      setInputMessage('');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const mockData = [
        { id: 1, name: 'John Doe', semester: '3rd', gender: 'male', skills: 'Python, Java', availableTiming: 'Evenings', subjects: 'Math, Physics', starred: false },
        { id: 2, name: 'Jane Smith', semester: '2nd', gender: 'female', skills: 'C++, React', availableTiming: 'Weekends', subjects: 'Computer Science, Web Development', starred: false },
      ];
      setBuddies(mockData);
    };

    fetchData();

    socket.on('message', (data) => {
      setMessages(prevMessages => [...prevMessages, data]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  useEffect(() => {
    if (selectedBuddy) {
      socket.emit('join', `chat_${selectedBuddy.id}`);
    }
  }, [selectedBuddy]);

  return (
    <Container>
      <h1>Study Buddy</h1>
      <TabContainer>
        <Tab active={activeTab === 'find'} onClick={() => setActiveTab('find')}>Find Buddy</Tab>
        <Tab active={activeTab === 'create'} onClick={() => setActiveTab('create')}>Create Group</Tab>
        <Tab active={activeTab === 'profile'} onClick={() => setActiveTab('profile')}>My Profile</Tab>
      </TabContainer>

      {activeTab === 'find' && (
        <>
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
            {buddies.map((buddy) => (
              <BuddyItem key={buddy.id}>
                <StarButton onClick={() => toggleStar(buddy.id)}>
                  {buddy.starred ? '⭐' : '☆'}
                </StarButton>
                <h3>{buddy.name}</h3>
                <p>Semester: {buddy.semester}</p>
                <p>Gender: {buddy.gender}</p>
                <p>Skills: {buddy.skills}</p>
                <p>Available: {buddy.availableTiming}</p>
                <p>Subjects: {buddy.subjects}</p>
                <Button onClick={() => openChat(buddy)}>Chat</Button>
              </BuddyItem>
            ))}
          </BuddyList>
        </>
      )}

      {activeTab === 'create' && (
        <>
          <Form onSubmit={handleCreateGroup}>
            <Input name="groupName" placeholder="Group Name" required />
            <Input name="subject" placeholder="Subject" required />
            <Input name="date" type="date" required />
            <Input name="time" type="time" required />
            <Input name="location" placeholder="Location (or 'Virtual')" required />
            <Input name="maxMembers" type="number" placeholder="Max Members" required />
            <Button type="submit">Create Study Group</Button>
          </Form>
          <h2>Existing Groups</h2>
          <BuddyList>
            {groups.map((group) => (
              <BuddyItem key={group.id}>
                <h3>{group.groupName}</h3>
                <p>Subject: {group.subject}</p>
                <p>Date: {group.date}</p>
                <p>Time: {group.time}</p>
                <p>Location: {group.location}</p>
                <p>Max Members: {group.maxMembers}</p>
              </BuddyItem>
            ))}
          </BuddyList>
        </>
      )}

      {activeTab === 'profile' && (
        <Form onSubmit={handleUpdateProfile}>
          <Input 
            name="name" 
            value={profile.name} 
            onChange={handleProfileChange} 
            placeholder="Your Name" 
          />
          <Input 
            name="email" 
            type="email" 
            value={profile.email} 
            onChange={handleProfileChange} 
            placeholder="Your Email" 
          />
          <Select 
            name="studyPreference" 
            value={profile.studyPreference} 
            onChange={handleProfileChange}
          >
            <option value="">Preferred Study Method</option>
            <option value="visual">Visual</option>
            <option value="auditory">Auditory</option>
            <option value="kinesthetic">Kinesthetic</option>
          </Select>
          <Input 
            name="availability" 
            value={profile.availability} 
            onChange={handleProfileChange} 
            placeholder="Your Availability" 
          />
          <Button type="submit">Update Profile</Button>
        </Form>
      )}

      {showModal && (
        <Modal onClick={() => setShowModal(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <h2>Chat with {selectedBuddy.name}</h2>
            <ChatContainer>
              {messages.map((msg, index) => (
                <ChatMessage key={index} isCurrentUser={msg.sender === 'You'}>
                  <strong>{msg.sender}: </strong>{msg.text}
                </ChatMessage>
              ))}
            </ChatContainer>
            <Form onSubmit={sendMessage}>
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type a message"
              />
              <Button type="submit">Send</Button>
            </Form>
            <Button onClick={() => setShowModal(false)}>Close</Button>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}

export default StudyBuddy;