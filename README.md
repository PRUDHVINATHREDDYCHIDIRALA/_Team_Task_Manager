# Team Task Manager

## Features
- Authentication (JWT)
- Project Management
- Task Assignment & Tracking
- Role-based Access (Admin/Member)

## Backend Setup
cd backend
npm install
node server.js

## Frontend Setup
cd frontend
npm install
npm start

## API Endpoints

### Auth
POST /api/auth/register
POST /api/auth/login

### Projects
POST /api/projects
GET /api/projects

### Tasks
POST /api/tasks
GET /api/tasks
PUT /api/tasks/:id

## Deployment
Deploy backend & frontend using Railway
