import React from 'react';
import JobCard from './JobCard';

function JobShowcase() {
  // Sample job data with realistic information
  const sampleJobs = [
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'Google',
      location: 'Mountain View, CA',
      type: 'Internship',
      workType: 'Hybrid',
      salaryMin: 8000,
      salaryMax: 12000,
      experienceLevel: 'Entry Level',
      duration: '3 months',
      hoursPerWeek: '40 hours',
      startDate: '2025-06-01',
      applicationDeadline: '2025-03-15',
      description: 'Join our team as a Software Engineering Intern and work on cutting-edge projects that impact billions of users worldwide. You will collaborate with experienced engineers, contribute to real products, and gain hands-on experience with large-scale distributed systems. This internship offers mentorship, learning opportunities, and the chance to work on meaningful projects that solve complex technical challenges.',
      requirements: [
        'Currently pursuing a degree in Computer Science or related field',
        'Strong programming skills in Python, Java, or C++',
        'Understanding of data structures and algorithms',
        'Excellent problem-solving abilities',
        'Strong communication and teamwork skills'
      ],
      skills: ['Python', 'Java', 'Data Structures', 'Algorithms', 'Git', 'Linux'],
      benefits: ['Health Insurance', 'Free Meals', 'Transportation', 'Learning Budget', 'Mentorship'],
      postedDate: '2025-01-15'
    },
    {
      id: 2,
      title: 'Frontend Developer (Part-time)',
      company: 'Startup XYZ',
      location: 'Remote',
      type: 'Part-time',
      workType: 'Remote',
      hourlyRate: 25,
      experienceLevel: 'Mid Level',
      duration: '6 months',
      hoursPerWeek: '20 hours',
      startDate: '2025-02-01',
      applicationDeadline: '2025-01-25',
      description: 'We are looking for a talented Frontend Developer to join our growing team. You will be responsible for building responsive web applications using modern JavaScript frameworks. This is a great opportunity to work on innovative projects while maintaining a flexible work-life balance.',
      requirements: [
        '2+ years of experience with React.js',
        'Proficiency in HTML5, CSS3, and JavaScript',
        'Experience with REST APIs',
        'Knowledge of responsive design principles',
        'Ability to work independently in a remote environment'
      ],
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git'],
      benefits: ['Flexible Schedule', 'Remote Work', 'Professional Development', 'Stock Options'],
      postedDate: '2025-01-10'
    },
    {
      id: 3,
      title: 'Data Science Research Assistant',
      company: 'University Research Lab',
      location: 'Stanford, CA',
      type: 'Part-time',
      workType: 'On-site',
      hourlyRate: 18,
      experienceLevel: 'Entry Level',
      duration: '1 year',
      hoursPerWeek: '15 hours',
      startDate: '2025-02-15',
      applicationDeadline: '2025-02-01',
      description: 'Join our research team working on machine learning applications in healthcare. You will assist in data collection, analysis, and model development while gaining valuable research experience. This position is perfect for students interested in pursuing graduate studies in data science or machine learning.',
      requirements: [
        'Strong background in mathematics and statistics',
        'Experience with Python and data analysis libraries',
        'Knowledge of machine learning fundamentals',
        'Ability to work with large datasets',
        'Strong analytical and critical thinking skills'
      ],
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning', 'Statistics'],
      benefits: ['Academic Credit', 'Research Experience', 'Mentorship', 'Conference Opportunities'],
      postedDate: '2025-01-08'
    },
    {
      id: 4,
      title: 'Mobile App Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      workType: 'Hybrid',
      salaryMin: 75000,
      salaryMax: 95000,
      experienceLevel: 'Mid Level',
      duration: 'Permanent',
      hoursPerWeek: '40 hours',
      startDate: '2025-03-01',
      applicationDeadline: '2025-02-10',
      description: 'We are seeking a skilled Mobile App Developer to join our dynamic team. You will be responsible for developing high-quality mobile applications for both iOS and Android platforms. The ideal candidate should have a passion for mobile technologies and user experience design.',
      requirements: [
        '3+ years of mobile app development experience',
        'Proficiency in Swift/Kotlin or React Native',
        'Experience with mobile UI/UX best practices',
        'Knowledge of app store deployment processes',
        'Strong debugging and optimization skills'
      ],
      skills: ['Swift', 'Kotlin', 'React Native', 'iOS', 'Android', 'UI/UX', 'Git'],
      benefits: ['Health Insurance', '401k', 'Flexible Hours', 'Stock Options', 'Professional Development'],
      postedDate: '2025-01-05'
    }
  ];

  const handleApply = (jobId) => {
    console.log(`Applied to job ID: ${jobId}`);
  };

  return (
    <div style={{ 
      maxWidth: '1000px', 
      margin: '0 auto', 
      padding: '2rem' 
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#2c3e50', 
        marginBottom: '2rem',
        fontSize: '2.5rem'
      }}>
        🚀 Available Job Opportunities
      </h1>
      
      <div style={{ 
        marginBottom: '2rem',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Discover exciting career opportunities tailored for students and recent graduates
        </p>
      </div>

      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {sampleJobs.map(job => (
          <JobCard 
            key={job.id} 
            job={job} 
            onApply={handleApply}
          />
        ))}
      </div>

      <div style={{ 
        marginTop: '3rem',
        padding: '2rem',
        backgroundColor: '#e8f5e8',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#2e7d32', marginBottom: '1rem' }}>
          💡 Job Search Tips
        </h3>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0,
          color: '#666'
        }}>
          <li style={{ marginBottom: '0.5rem' }}>✓ Tailor your resume for each application</li>
          <li style={{ marginBottom: '0.5rem' }}>✓ Research the company before applying</li>
          <li style={{ marginBottom: '0.5rem' }}>✓ Follow up on your applications</li>
          <li style={{ marginBottom: '0.5rem' }}>✓ Prepare for technical interviews</li>
        </ul>
      </div>
    </div>
  );
}

export default JobShowcase;