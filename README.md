MovieCRUD App is a full-stack web application designed for movie enthusiasts. It employs a microservices architecture with Spring Boot and MongoDB for the backend, and Next.js with TypeScript for the frontend.

## Tech Stacks

 - ### Backend:

    - **Spring Boot:**  Implemented it to create the movie-api from the the databse in MongoDB

    - **MongoDB:**  Serves as the NoSQL database for storing movie information and user reviews.

    - **Postman:**  Used it to test the backend Spring Boot API (movie-api).
  
    - **Docker: ** Used to containerise the server-side of the application  

- ### Frontend:

    - **Next.js:**  Used for building a fast and dynamic React application.

    - **TypeScript:** Enhances code quality and maintainability by introducing static typing to the JavaScript codebase.

    - **Tailwind CSS:** Enables rapid and responsive UI development with a utility-first CSS framework.

## What is CRUD Operation?


CRUD stands for Create, Read, Update, and Delete, which are the basic operations that can be performed on data in a database or data storage system. 
This concept is fundamental to database management and is often used in the context of web development, software engineering, and data management.

## Project Workflow

![uzg9i3u89pb3eebmkdfi](https://github.com/Debaditya-Som/movieCRUD/assets/121785700/7d4e6904-b844-42cd-97d2-8ef4d6430949)

1. **Explore Movies:**
   - Users interact with the dynamic Next.js frontend, which fetches movie data from the Spring Boot backend.

2. **View Movie Details:**
   - Clicking on a movie card triggers a request to the Spring Boot backend, which retrieves detailed information from the MongoDB database and sends it back to the Next.js frontend.

3. **Submit Reviews:**
   - TypeScript components in the Next.js app handle the creation of new reviews, communicating with the Spring Boot backend to store the data in MongoDB.

4. **Update and Delete:**
   - TypeScript ensures type safety and smooth updates to user reviews within the Next.js frontend.
   - Deletion of reviews triggers requests to the Spring Boot backend, updating the MongoDB database accordingly.

## Getting Started

1. **Backend Setup:**
   - Ensure you have Java and MongoDB installed.
   - Run the Spring Boot application using the provided configuration.

2. **Frontend Setup:**
   - Navigate to the `frontend` directory.
   - Install dependencies with `npm install`.
   - Start the Next.js app with `npm run dev`.

3. **Access the App:**
   - Open a web browser and go to `http://localhost:3000` to start exploring and reviewing movies.

Feel free to contribute and enhance the Movie Reviewer App to create a vibrant community of movie enthusiasts!
