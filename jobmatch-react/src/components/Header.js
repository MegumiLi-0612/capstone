import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [userType, setUserType] = useState('student');

  return (
    <header style={{ 
      backgroundColor: '#2c3e50', 
      color: 'white', 
      padding: '1rem 0', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
    }}>
      <nav style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '0 2rem' 
      }}>
        <div>
          <Link to="/" style={{ 
            color: 'white', 
            textDecoration: 'none', 
            fontSize: '1.5rem', 
            fontWeight: 'bold' 
          }}>
            JobMatch
          </Link>
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              className={userType === 'student' ? 'active' : ''}
              onClick={() => setUserType('student')}
              style={{ 
                padding: '0.5rem 1rem', 
                border: '1px solid white', 
                background: userType === 'student' ? 'white' : 'transparent', 
                color: userType === 'student' ? '#2c3e50' : 'white', 
                borderRadius: '4px', 
                cursor: 'pointer' 
              }}
            >
              Student
            </button>
            <button 
              className={userType === 'employer' ? 'active' : ''}
              onClick={() => setUserType('employer')}
              style={{ 
                padding: '0.5rem 1rem', 
                border: '1px solid white', 
                background: userType === 'employer' ? 'white' : 'transparent', 
                color: userType === 'employer' ? '#2c3e50' : 'white', 
                borderRadius: '4px', 
                cursor: 'pointer' 
              }}
            >
              Employer
            </button>
          </div>
          {userType === 'student' && (
            <Link to="/student-dashboard" style={{ 
              color: 'white', 
              textDecoration: 'none', 
              padding: '0.5rem 1rem', 
              borderRadius: '4px' 
            }}>
              Student Dashboard
            </Link>
          )}
          {userType === 'employer' && (
            <Link to="/employer-dashboard" style={{ 
              color: 'white', 
              textDecoration: 'none', 
              padding: '0.5rem 1rem', 
              borderRadius: '4px' 
            }}>
              Employer Dashboard
            </Link>
          )}
          <Link to="/test" style={{ 
            color: 'white', 
            textDecoration: 'none', 
            padding: '0.5rem 1rem', 
            borderRadius: '4px' 
          }}>
            Test Page
          </Link>
          <Link to="/jobs" style={{ 
            color: 'white', 
            textDecoration: 'none', 
            padding: '0.5rem 1rem', 
            borderRadius: '4px' 
          }}>
            View Jobs
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;