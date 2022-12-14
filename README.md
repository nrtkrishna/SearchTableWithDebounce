# CarepayKrishna

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

# Start json server
Go to root folder of the project in terminal. Goto `server` folder and execute belo command

`json-server --watch db.json`

This will start json server which serves the db.json content with certain endpoints like `http://localhost:3000/treatments`

# Start the angular application

Goto root folder in another terminal window and start the application using `npm start`


Treatments are retrieved by using fake REST API (https://github.com/typicode/json-server). You can find db.json file in `server` folder of the repository.

Search field validation:

Treatment code must include at least three identical letters, regardless of order. For example, treatment codes "aaa", "aa2a" and "zz222z" are valid, while "aabbcc" is not.
