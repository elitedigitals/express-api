Express.js CRUD API

This is a simple Express.js application that implements a basic CRUD API with in-memory data storage. It includes proper validation, error handling, and example requests for testing.

 Features
- Root route (`/`) returns "Hello World"
- CRUD routes for managing `items`
- In-memory data store (array)
- Request validation and error handling (400, 404, 500)

Project Structure
All routes are in index.js
Setup Instructions

1. Clone the Repository

git clone https://github.com/elitedigitals/express-crud-api.git
cd express-crud-api
2. npm install
3. Run the Application
    npm run dev
Server will run at: http://localhost:7000

API Endpoints
Root
GET /
•	Response: "Hello World"

Items
GET /items
•	Description: Get all items
•	Response:
[
{ "id": 1, "name": "Michael Lee","business": "GreenField Farms","position": "Operations Manager", "description": "An organic farming business focused on sustainable agriculture."}
]

GET /items/:id
•	Description: Get item by ID
•	Response (200):
{ "id": 1, "name": "Michael Lee","business": "GreenField Farms","position": "Operations Manager", "description": "An organic farming business focused on sustainable agriculture."}
Response (404):
message: `Item with ID ${id} not found.`

POST/items
•	Description: Create a new item
•	Body:
•	{ "name": "emma", "business": " apex tech ", "position": "Director", "description": "A digital marketing company."}

Response (201):
{ “id”:2 "name": "emma", "business": " apex tech ", "position": "Director", "description": "A digital marketing company."}

Response (400):
{ "error": "Name and description are required." }

PUT /items/:id
•	Description: Update an existing item
•	Body:
•	{ "name": "updatedemma", "business": " apex tech ", "position": "Director", "description": "A digital marketing company."}

Response (200)
{ "message": "Item updated", "item": { ... } }

Response (404)
{ message: `Item with ID ${id} not found.}

DELETE /items/:id
•	Description: Delete an item by ID
•	Response (200):
{ "message": "Item deleted", "item": { ... } }
Response (404)
{ message: `Item with ID ${id} not found.` }


Error Responses
Status Code	Meaning	Reason
400	Bad Request	Missing or invalid input
404	Not Found	Item or route not found
500	Internal Server Error	Unexpected server error
Testing with Postman
Use the provided endpoints and sample requests above to test with Postman or any other REST client.







