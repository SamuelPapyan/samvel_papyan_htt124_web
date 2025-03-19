# Samvel Papyan HTT124 WEB

## Environment Variables

Find .env.example file and rename it into .env and then change the variables with values which you need.

## Start Project

To start project enter the following command in terminal.

`` npm run start ``


## API Endpoints

GET / - returns the list of students (checking for authentication)

GET /add - returns the html file with student form

POST / - adds posted student into db

PUT / - updates student data (still requires id in body)

DELETE / - deletes student by id (still required id in body)

GET /auth/login - returns the html file with login form

POST /auth - returns authentication token from login form (checking for existed user and correct password)

POST /auth/token - returns user data from authentication token from Authorization header.
