const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import database connection
const { sequelize } = require('./config/database');

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'JobMatch Backend API' });
});

// Import routes with error handling
const loadRoute = (path, mountPoint) => {
  try {
    const route = require(path);
    app.use(mountPoint, route);
    console.log(`✅ Loaded route: ${mountPoint}`);
  } catch (error) {
    console.error(`❌ Failed to load route ${mountPoint}:`, error.message);
  }
};

// Load routes
loadRoute('./routes/auth.routes', '/api/v1/auth');
loadRoute('./routes/user.routes', '/api/v1/users');
loadRoute('./routes/job.routes', '/api/v1/jobs');
loadRoute('./routes/application.routes', '/api/v1/applications');
loadRoute('./routes/task.routes', '/api/v1/tasks');
loadRoute('./routes/skill.routes', '/api/v1/skills');
loadRoute('./routes/savedJob.routes', '/api/v1/saved-jobs');

// Import error handler
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

// 404 handler
app.use(notFoundHandler);

// Error handling middleware (must be last)
app.use(errorHandler);

// Database connection and server start
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');
    
    // Sync database (use migrations in production)
    if (process.env.NODE_ENV === 'development') {
      await sequelize.sync({ alter: true });
      console.log('✅ Database synced successfully.');
    }
    
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
      console.log(`📍 API URL: http://localhost:${PORT}`);
      console.log(`📍 Health check: http://localhost:${PORT}/health`);
    });
  } catch (error) {
    console.error('❌ Unable to start server:', error);
    process.exit(1);
  }
}

startServer();

module.exports = app;