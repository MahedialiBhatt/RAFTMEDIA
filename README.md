TO START NODE.JS APP

(PRE-REQ :- Mysql should be installed on local system and in project directory create .env file (for reference check .env.example file))

Step 1: npm install
Step 2: npm run start

LIST OF APIS:

BASE_URL : localhost:3000

- Authorization token required in this no. of apis(3,4,5,6,7,8);

- LOGIN and REGISTER apis will return access_token which can be used in all others api for Authorization and also can be used in websocket to access chatroom endpoint. (POSTMAN APIs collection is available in ./POSTMAN_COLLECTION)

1. POST /api/register IN REQ BODY PASS (name,username,password)  -> to register user and return token on success
2. POST /api/login IN REQ BODY PASS (username,password)          -> to login on success return token
3. GET /api/messages                                             -> to get all stored message (chatroom messages) 
4. GET /api/post/:id                                             -> get single record by id 
5. GET /api/post IN QUERY PARAMS(limit , page, sortBy, sortOrder)                                               -> get all records(supports PAGINATION and SORTING)
6. POST /api/post IN REQ BODY PASS (title,content)               -> to create post  
7. PUT /api/post/:id IN REQ BODY PASS (title,content)            -> to edit post by id
8. DELETE /api/post/:id                                          -> to delete post by id  

----------------------------------------------------------------------------------------------------------

- Authorization token is required in headers to access websocket(chatroom)

WEBSOCKET URL IS : localhost:3000

----------------------------------------------------------------------------------------------------------

- TO TEST CHATROOM FIRST START APP and THEN GET TOKEN FROM REGISTER OR LOGIN API and USE THAT TOKEN IN EXTERNAL/client.js file after run client.js file