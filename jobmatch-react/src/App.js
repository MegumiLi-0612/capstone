import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TestPage from './components/TestPage';
import JobShowcase from './components/JobShowcase';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/jobs" element={<JobShowcase />} />
            <Route path="/student-dashboard" element={
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h1>Student Dashboard</h1>
                <p>Coming Soon - Student job search and application features</p>
              </div>
            } />
            <Route path="/employer-dashboard" element={
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h1>Employer Dashboard</h1>
                <p>Coming Soon - Employer job posting and management features</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;