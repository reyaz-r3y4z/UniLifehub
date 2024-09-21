import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCalendar, FaUniversity, FaUsers, FaUtensils, FaPiggyBank, FaDumbbell, FaComments } from 'react-icons/fa';
import { FaCalendarAlt, FaExclamationCircle } from 'react-icons/fa';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const WelcomeSection = styled.div`
  background-color: #e8eaf6;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled(Link)`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
`;

const CardTitle = styled.h2`
  margin-top: 10px;
  color: #1a237e;
  font-size: 1.2rem;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #3f51b5;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

function Dashboard() {
  const features = [
    { 
      title: 'Study Planner', 
      icon: FaCalendar, 
      path: '/study-planner', 
      color: '#e3f2fd', 
      description: 'Organize your study sessions and track your progress.',
      external: false
    },
    { 
      title: 'Campus Resources', 
      icon: FaUniversity, 
      path: '/campus-resources', 
      color: '#e8f5e9', 
      description: 'Discover and access various campus resources.',
      external: true
    },
    { 
      title: 'Study Buddy', 
      icon: FaUsers, 
      path: '/study-buddy', 
      color: '#fff3e0', 
      description: 'Find study partners and collaborate with peers.',
      external: false
    },
    { 
      title: 'Campus Eats', 
      icon: FaUtensils, 
      path: '/campus-eats', 
      color: '#ffebee', 
      description: 'Explore dining options on and around campus.',
      external: false
    },
    {
        title: 'Campus Events',
        icon: FaCalendarAlt, // Use an appropriate icon, for example, a calendar icon
        path: 'https://www.rmit.edu.au/events', 
        color: '#e0f7fa', 
        description: 'Stay updated on events happening on campus.',
        external: true // Set this to true since it's an external link
      },
      {
        title: 'Important Dates',
        icon: FaExclamationCircle, // Use an appropriate icon, for example, an exclamation or calendar icon
        path: 'https://www.rmit.edu.au/students/my-course/important-dates',
        color: '#f3e5f5',
        description: 'Check important academic dates and deadlines.',
        external: true // External link
      },
      
    { 
      title: 'FitU', 
      icon: FaDumbbell, 
      path: '/fit-u', 
      color: '#fce4ec', 
      description: 'Access fitness resources and workout plans for students.',
      external: false
    },
    { 
      title: 'Open Forum', 
      icon: FaComments, 
      path: '/open-forum', 
      color: '#e0f7fa', 
      description: 'Discuss and share university happenings.',
      external: false
    },
  ];

  return (
    <DashboardContainer>
      <WelcomeSection>
        <h1>Welcome to UniLife Hub</h1>
        <p>Your comprehensive platform for enhancing student life. Explore our features below!</p>
      </WelcomeSection>
      <CardGrid>
        {features.map((feature, index) => (
          <Card 
            key={index} 
            to={feature.path} 
            style={{ backgroundColor: feature.color }}
            target={feature.external ? "_blank" : "_self"}
            rel={feature.external ? "noopener noreferrer" : ""}
          >
            <IconWrapper>
              <feature.icon />
            </IconWrapper>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.description}</CardDescription>
          </Card>
        ))}
      </CardGrid>
    </DashboardContainer>
  );
}

export default Dashboard;