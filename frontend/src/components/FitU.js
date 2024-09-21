import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #1a237e;
  margin-bottom: 20px;
  text-align: center;
`;

const WorkoutList = styled.div`
  display: grid;
  gap: 20px;
`;

const WorkoutCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: pointer;
`;

const WorkoutTitle = styled.h2`
  color: #1a237e;
  margin-bottom: 10px;
`;

const WorkoutDescription = styled.p`
  margin-bottom: 10px;
`;

const WorkoutDuration = styled.p`
  font-weight: bold;
`;

const WorkoutDetails = styled.div`
  margin-top: 10px;
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 6px;
`;

function FitU() {
  const [activeWorkout, setActiveWorkout] = useState(null); // State to track active workout

  const workouts = [
    {
      title: "Dorm Room HIIT",
      description: "High-intensity interval training that can be done in a small space. Includes jumping jacks, push-ups, mountain climbers, and burpees.",
      duration: "15 minutes",
      details: "This workout consists of 30 seconds per exercise with 10 seconds rest in between."
    },
    {
      title: "Study Break Stretches",
      description: "Quick stretching routine to relieve tension from long study sessions. Focuses on neck, shoulders, and lower back.",
      duration: "5-10 minutes",
      details: "Start with neck stretches, followed by shoulder rolls, and finish with a gentle back stretch."
    },
    {
      title: "Campus Jogging Route",
      description: "A mapped jogging route around campus. Great for cardio and exploring your university grounds.",
      duration: "30 minutes",
      details: "Start at the main gate, jog past the library, and loop back to the central campus square."
    },
    {
      title: "Bodyweight Strength Training",
      description: "Full-body workout using only your bodyweight. Includes squats, lunges, push-ups, and planks.",
      duration: "20-30 minutes",
      details: "Complete 3 sets of each exercise: 15 squats, 10 lunges per leg, 10 push-ups, and a 30-second plank."
    },
    {
      title: "Stress-Relief Yoga",
      description: "Gentle yoga flow to help reduce stress and improve focus. Perfect for exam season.",
      duration: "20 minutes",
      details: "Start with deep breathing, then flow through child's pose, cat-cow, and gentle twists."
    },
    {
      title: "Desk Exercises",
      description: "Simple exercises you can do at your desk to stay active during long study sessions.",
      duration: "5 minutes (repeat throughout the day)",
      details: "Try leg lifts, seated marches, and shoulder shrugs every hour to stay active."
    }
  ];

  const toggleWorkoutDetails = (index) => {
    setActiveWorkout(activeWorkout === index ? null : index); // Toggle workout details
  };

  return (
    <Container>
      <Title>FitU Workout Plans</Title>
      <p>Stay fit and healthy with these workout plans tailored for busy students. Remember to warm up before exercising and stay hydrated!</p>
      
      <WorkoutList>
        {workouts.map((workout, index) => (
          <WorkoutCard key={index} onClick={() => toggleWorkoutDetails(index)}>
            <WorkoutTitle>{workout.title}</WorkoutTitle>
            <WorkoutDescription>{workout.description}</WorkoutDescription>
            <WorkoutDuration>Duration: {workout.duration}</WorkoutDuration>

            {activeWorkout === index && (
              <WorkoutDetails>
                <p><strong>Details:</strong> {workout.details}</p>
              </WorkoutDetails>
            )}
          </WorkoutCard>
        ))}
      </WorkoutList>
    </Container>
  );
}

export default FitU;
