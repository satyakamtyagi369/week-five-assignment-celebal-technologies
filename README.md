This project allows you to interact with a MongoDB database using the command line (CMD). You can perform operations like:
Viewing all users
Editing user information
Deleting users
Adding new users
The project uses Node.js, Express.js, and MongoDB for backend operations. MongoDB shell (mongo or mongosh) is used to interact directly with the database.

Installation
Clone the repository
git clone https://github.com/your-username/mongodb-user-crud.git
cd mongodb-user-crud
Install dependencies

npm install
Set up your .env file

MONGO_URI=mongodb://localhost:27017/users
PORT=3000
Start the server
npm start

API Endpoints
Method	Endpoint	Description
GET	/users	Get all users
POST	/users	Add a new user
GET	/users/:id	Get user by ID
PUT	/users/:id	Update user by ID
DELETE	/users/:id	Delete user by ID

Using Mongo Shell
Start the shell:

mongo
Then run:
use users
show collections
db.users.find().pretty()         // View users
db.users.updateOne({...})        // Edit user
db.users.deleteOne({...})        // Delete user

Example Mongo Update

db.users.updateOne(
  { name: "Satyakam Tyagi" },
  { $set: { email: "newemail@example.com" } }
)
Author
Satyakam Tyagi
ID: CT_CSI_NJ_5521
Nodejs Backend Developer Intern
Celebal Technologies
