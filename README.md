AirTribe ASSIGNMENT
============
This repository contains the code and Dockerized setup of ARITRIBE-BACKEND Assignment.

About the Project
-----------
My task was to build a backend which capable of storing course related data i.e. Course, Learner, Instructor details. Also I have to create search functionality for the stored data. At last I have to dockerize the complete project keeping in mind that my backend should be scalable and optimal.

TechStack Used
------
* JavaScript (Programming Language)
* Node (Web Framework)
* MySQL (Database)
* Docker (Containerization)

How to Setup the project
---------------
1. Using Docker-Compose (recommended): 
    1. Build the docker image:
        1. Clone the Repository locally.
            ``` git clone https://github.com/theanandankit/airtribe-backend.git```
        2. Go to the project directory.
        3. Build the image locally
            ```sudo docker build -t airtribe-backend .```
        4. To check the successful build, open terminal and run
            ```sudo docker images```
            airtribe-backend:latest will appear in the list.
    2. Start the server:
        1. Run Docker Compose using ``` sudo docker-compose up```.
            ###### Note: Wait for sometime this command will fetch the docker image and launch the container.
    3. Stop Docker Compose
        1. Press Ctrl + C and run 
        ```sudo docker-compose down -v```

2. Using Docker Image:
    1. Clone the Repository locally:
        ```git clone git clone https://github.com/theanandankit/airtribe-backend.git```
    2. Create Docker Network
        ``` docker network create airtribe-net```
    3. Run MySQL Container
        ```docker run -d -p 3306:3306 --name=mysql-airtribe --net=airtribe-net -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=airtribe mysql:5.6```
    4. Build the Docker Image
        ```docker build -t airtribe-backend .```
    5. Run the Container
        ```docker run -p 3000:3000 --name=airtribe-backend --net=airtribe-net -e MYSQL_HOST=mysqldb -e MYSQL_USER=root -e MYSQL_PASSWORD=root -e MYSQL_PORT=3306 airtribe-backend```
    6. Servers are running Successfully (Go to Project flow section for API calls)

3. Running Manually: 
    1. Make sure you have mysql running on your system at port 3306 and have ```airtribe``` database created.
    2. Go to the project directory and run ```npm start```

PROJECT STRUCTURE
-------
This is the overview of the project structure
<img src="images/structure.png">

PROJECT FLOWS
------
1. First, insert the initial data by calling the a GET API (as shown below). Init Data https://github.com/theanandankit/airtribe-backend/blob/master/Utils/InitialData.js  
2. Add New instructor (EndPoint: localhost:3000/instructor/add)
    <img src=“images/ins_add.png”>
3. Add New Course (EndPoint: localhost:3000/course/create)
    <img src=“images/cou_add.png”>
4. Update Course Detail (EndPoint: localhost:3000/course/update)
    <img src=“images/cou_up.png”>
5. Add New Learner (EndPoint: localhost:3000/learner/add)
    <img src=“images/lea_add.png”>
6. Add New Lead (EndPoint: localhost:3000/lead/add)
    <img src=“images/lead_add.png”>
7. Update Lead (EndPoint: localhost:3000/lead/update)
    <img src=“images/lead_up.png”>
8. Add New Comment (EndPoint: localhost:3000/comment/add)
    <img src=“images/com_add.png”>
9. Search API (EndPoint: localhost:3000/lead/search)
    <img src=“images/search.png”>

    