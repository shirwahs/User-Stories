# User-Stories

* The Project Details.
  
1:- As an Admin, I need to log in to the system.
* As an Admin, I need to manage admin users by creating, updating, and deleting them.
* As an Admin, I need to manage product details such as name, description, images, and price by creating, updating, and deleting them.
* As an Admin, I need the ability to reply to customer reviews.
* As a Customer, I need to view products along with their details.
* As a Customer, I need the ability to write reviews for a product.
2:- System Requirements
* The system should utilize the following technologies: HTML, CSS, JavaScript, and Node.js.
* The database management system should be either MySQL or PostgreSQL.
* The system should consist of at least three separate applications:
3:- Backend API
* Admin Web Application
* Customer Web Application
* The backend API should communicate via RESTful APIs.
* The backend API system should be the only one that connects directly to the database.
* The two web applications (Admin and Customer) should not interact directly with the database.
* The two web applications should send and receive data to/from the backend API system.
* The two web applications should communicate with the backend API using XHR (XMLHttpRequest) or modern alternatives like fetch.
* The two web applications should be developed using a Single Page Application (SPA) framework, such as Angular, React, or Vue.js.
