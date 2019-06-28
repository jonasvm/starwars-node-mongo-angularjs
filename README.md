# Starwars Project

# Mongo Setup
After installed, issue the following commands (they will create default user admin, with password admin):
- use starwars_users
- db.createCollection("users)
- db.users.insertOne({"user_name":"admin","email":"admin@email.com","password":"admin"})

# Backend Api
The testAPI is the backend API, it will receive requests from the frontend and retrieve the users in order to authenticate.
- NodeJS must be installed, after this, issue the command: npm install [in order to generate node modules dependencies]
- After dependencies are installed, issue th comand: npm start
- It will run over localhost port 3000 (if not changed)

# Frontend 
The frontend is built over Angular JS, and uses Angular CLI. 
- NodeJS must be installed, after this, issue the command: npm install [in order to generate node modules dependencies]
- After dependencies are installed, the easiest way to test is is issuing the command: ng serve 
- It will run over localhost port 4200

# SWAPI - The Star Wars API
The frontend uses the data provided by SWAPI to work, if any inconsistenses are found, please check if API is answering (using for instance the Postman).
- For more details abou the API, please access the official website: https://swapi.co/documentation
