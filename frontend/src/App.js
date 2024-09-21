import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import Dashboard from './components/Dashboard';
import StudyPlanner from './components/StudyPlanner';
import CampusResources from './components/CampusResources';
import StudyBuddy from './components/StudyBuddy';
import CampusEats from './components/CampusEats';
import FitU from './components/FitU';
import OpenForum from './components/OpenForum';
import Login from './components/Login';
import Signup from './components/Signup';   // Import Signup
import Profile from './components/Profile'; // Import Profile
import Footer from './components/Footer';  // Import Footer

const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Nav = styled.nav`
  background-color: #1a237e;
  padding: 1rem;
  margin-bottom: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3949ab;
  }
`;

const ContentContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />  {/* Add Signup route */}
          <Route path="/profile" element={<Profile />} /> {/* Add Profile route */}
          <Route path="/*" element={
            <>
              <Nav>
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/study-planner">Study Planner</NavLink>
                <NavLink to="/campus-resources">Campus Resources</NavLink>
                <NavLink to="/study-buddy">Study Buddy</NavLink>
                <NavLink to="/campus-eats">Campus Eats</NavLink>
                <NavLink to="/fit-u">FitU</NavLink>
                <NavLink to="/open-forum">Open Forum</NavLink>
                <NavLink to="/login">Login</NavLink>         {/* Login link */}
                <NavLink to="/signup">Signup</NavLink>       {/* Signup link */}
                <NavLink to="/profile">Profile</NavLink>     {/* Profile link */}
              </Nav>
              <ContentContainer>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/study-planner" element={<StudyPlanner />} />
                  <Route path="/campus-resources" element={<CampusResources />} />
                  <Route path="/study-buddy" element={<StudyBuddy />} />
                  <Route path="/campus-eats" element={<CampusEats />} />
                  <Route path="/fit-u" element={<FitU />} />
                  <Route path="/open-forum" element={<OpenForum />} />
                </Routes>
              </ContentContainer>
            </>
          } />
        </Routes>
        <Footer /> {/* Include the Footer */}
      </AppContainer>
    </Router>
  );
}

export default App;
