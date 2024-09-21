import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #1a237e;
  margin-bottom: 20px;
`;

const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ResourceBox = styled.a`
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

const ResourceTitle = styled.h2`
  color: #1a237e;
  margin-bottom: 10px;
`;

const ResourceDescription = styled.p`
  font-size: 0.9rem;
  flex-grow: 1;
`;

function CampusResources() {
  const resources = [
    {
      title: "Career Centre",
      url: "https://rmit.careercentre.me/JobSearch",
      description: "Search job and internship opportunities from all over the world"
    },
    {
      title: "Global Opportunities",
      url: "https://www.rmit.edu.au/students/careers-opportunities/global-experiences/overseas/work-volunteering-programs",
      description: "Explore overseas work and volunteering programs"
    },
    {
      title: "GradConnection",
      url: "https://au.gradconnection.com/",
      description: "Connect with graduate opportunities across Australia"
    },
    {
      title: "Job Shop",
      url: "https://www.rmit.edu.au/students/careers-opportunities/jobs-careers-employability/job-shop",
      description: "Find part-time, casual, and graduate job opportunities"
    },
    {
      title: "StudentLife",
      url: "https://www.rmit.edu.au/students/student-life",
      description: "Explore student life resources and activities at RMIT"
    }
  ];



  return (
    <PageContainer>
      <Title>Campus Resources</Title>
      <ResourceGrid>
        {resources.map((resource, index) => (
          <ResourceBox key={index} href={resource.url} target="_blank" rel="noopener noreferrer">
            <ResourceTitle>{resource.title}</ResourceTitle>
            <ResourceDescription>{resource.description}</ResourceDescription>
          </ResourceBox>
        ))}
      </ResourceGrid>
    </PageContainer>
  );
}

export default CampusResources;