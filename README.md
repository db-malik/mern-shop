# mern-shop

Run Locally

1. Clone repo
   $ git clone https://github.com/db-malik/mern-shop.git

2. Setup MongoDB
   Local MongoDB
   Install it from here
   Create .env file in root folder
   Set MONGODB_URI
   Atlas Cloud MongoDB
   Create database at https://cloud.mongodb.com
   Create .env file in root folder
   Set MONGODB_URI=mongodb+srv://your-db-connection

3. Run Backend
   $ npm install
   $ npm start

4. Run Frontend

# open new terminal

$ cd frontend
$ npm install
$ npm start

5. Seed Users and Products
   $ npm run data:import

5.1. delete data generated
$ data:destroy

6.  Login
    Run http://localhost:3000/login
    Enter admin email and password and click login

7.  register
    Run http://localhost:3000/register
    Enter admin email and password and click signin
