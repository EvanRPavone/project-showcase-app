# Project Showcase App
A web application using React-Redux for the frontend and Rails API to manage the backend.

# Backend API
https://github.com/EvanRPavone/project-showcase-api

# Features
- Shows fetch requests using AJAX with API
- Uses React-Redux to make HTML and CSS elements
- The user can login or signup
- Allows user to view Projects by other users
- Allows user to add new Projects to showcase
- Can comment on other user Projects

# Installation

Backend
1. Clone the repo
2. cd into project-showcase-api and run bundle
3. This backend uses postgres, to setup postgres go here: https://github.com/learn-co-curriculum/wsl-setup#advanced-topics-postgresql-setup-optional
4. Run rails db:create, rails db:migrate, and if you want rails db:seed
(you can change your data you want to seed by going to app/db/seeds.rb)
5. Start the server by running rails s

Frontend
1. Open another tab in the terminal and cd into project-showcase-app
2. In the terminal run npm install to install the packages
3. Once all packages are installed run npm start to startup the server
NOTE: run the backend server first and then run npm start, it will prompt you telling you that there is something already on the localhost:3000, hit y
4. Navigate around the site and Enjoy!

# Things I want to do
- Make it into a portfolio site? Add a user to the project in the backend. Only Evan can make a new project and showcase it but other users can comment.
