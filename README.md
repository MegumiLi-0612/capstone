# capstone
# JobMatch Backend API

A comprehensive backend solution for a job matching platform connecting students with employers.

## 🚀 Project Overview

JobMatch is a full-stack application that facilitates job searching and recruitment. This repository contains the backend API built with Node.js, Express, and MySQL.

## 📦 Features

- **User Authentication**: JWT-based authentication for students and employers
- **Job Management**: Create, read, update, and delete job postings
- **Application System**: Students can apply to jobs and track their applications
- **Task Management**: Personal task tracker for job search activities
- **Skill Matching**: Skills system for job requirements
- **Role-based Access Control**: Different permissions for students and employers

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL with Sequelize ORM
- **Authentication**: JWT (jsonwebtoken)
- **Security**: bcrypt, helmet, cors
- **Validation**: express-validator
- **Rate Limiting**: express-rate-limit

## 📁 Project Structure

```
jobmatch-backend/
├── config/
│   └── database.js          # Database configuration
├── controllers/
│   ├── auth.controller.js   # Authentication logic
│   ├── job.controller.js    # Job management logic
│   ├── application.controller.js
│   └── task.controller.js
├── middleware/
│   ├── auth.middleware.js   # JWT verification
│   ├── errorHandler.js      # Global error handling
│   └── rateLimiter.js       # API rate limiting
├── models/
│   ├── User.js
│   ├── Student.js
│   ├── Employer.js
│   ├── Job.js
│   └── ...
├── routes/
│   ├── auth.routes.js
│   ├── job.routes.js
│   └── ...
├── .env.example
├── package.json
└── server.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/jobmatch-backend.git
cd jobmatch-backend
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```bash
cp .env.example .env
```

4. Configure your database in `.env`
```
DB_HOST=localhost
DB_NAME=jobmatch_db
DB_USER=root
DB_PASSWORD=yourpassword
JWT_SECRET=your_jwt_secret_key
```

5. Create database
```sql
CREATE DATABASE jobmatch_db;
```

6. Run the server
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api/v1
```

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register new user |
| POST | `/auth/login` | User login |
| GET | `/auth/me` | Get current user |

### Job Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/jobs` | Get all jobs | No |
| GET | `/jobs/:id` | Get job details | No |
| POST | `/jobs` | Create job | Yes (Employer) |
| PUT | `/jobs/:id` | Update job | Yes (Employer) |
| DELETE | `/jobs/:id` | Delete job | Yes (Employer) |

### Application Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/applications` | Submit application | Yes (Student) |
| GET | `/applications/my-applications` | Get my applications | Yes (Student) |
| GET | `/applications/job/:jobId` | Get job applications | Yes (Employer) |

## 🧪 Testing

Run the test suite:
```bash
node test-api.js
```

## 📊 Database Schema

The application uses the following main tables:
- users
- students
- employers
- jobs
- applications
- tasks
- skills

See the full schema in `/docs/database-schema.sql`

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Input validation
- SQL injection prevention
- Rate limiting
- CORS configuration
- Security headers with Helmet

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Course instructors for guidance
- Classmates for feedback and testing
