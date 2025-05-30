# Workout Planner App

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Usage](#usage)
- [Example](#example)
- [Tech Stack](#tech-stack)
- [Version History](#version-history)
- [Update Plans](#update-plans)

## Description
This **Workout Planner App** can read and display workout data as a weekly schedule. It allows customization of the schedule with pre-set and/or custom workouts.

The app is a personal mini-project for practicing React and Node.js full-stack application development.

## Features
### Read user input
Users can edit the userWorkouts.json file to add custom workouts.
The syntax of a workout is:
```
{"name": "Name of the workout", "category": "e.g. "Arm", "Leg", "Cardio"", "group": [Muscle Group(s), e.g. "Biceps", "Quadriceps", "Hamstrings"], "equipment": [e.g. "Dumbbells", Bosu Ball, Yoga Mat]}
```
Below is the format of an example workout:
```
{ "name": "Push-ups", "category": "Chest", "group": ["Chest", "Triceps", "Core"], "equipment": [] },
```

## Usage
### Preparation
1. Ensure your device has npm installed

### Activate the backend
1. Use the default port number, or choose the desired port for local backend by:
    - Creating .env files in the backend and frontend folders with the desired PORT variable OR
    - Editing the PORT_NUMBER variable in the following folders:

    ```
    backend/server.js
    frontend/src/components/ScheduleView.js
    frontend/src/components/WorkoutForm.js
    frontend/src/WorkoutList.js
    frontend/src/WorkoutPicker.js
    ```
2. Run the following commands in the terminal:

    ```
    cd backend
    npm run dev
    ```
### Activate the frontend
1. Use the default port number, or choose the desired port for local backend by editing the PORT_NUMBER variable.
2. Run the following command in a new terminal:

    ```
    cd frontend
    npm start
    ```

## Example
An example JSON file for the project can be found in **backend**.

## Tech Stack
- Frontend: React
- Backend: Node.js

## Version History
### 1.00
- Functional App with the following pages:
    1. Home
    2. Schedule
    3. Workouts List
    4. Settings (placeholder for future updates)
- Supports fetching and displaying data from JSON files
- Frontend and backend in local ports

## Update Plans
### CRUD Operations Support
- In-app support of CRUD operations with workout data and schedule: user no longer needs to edit the json file directly but through the user interface of the application.
### UI Changes
- Add buttons to allow customization of schedule view.
- Add buttons and input blocks to support CRUD operations
- Improve UI
- More customization options
- Dark mode
### Unit Tests
- For testing Javascript functions
### Possible Updates
- Mobile Version
- External NoSQL database connection for retrieving JSON data for default workouts and the example schedule
- Deployment to GitHub Pages