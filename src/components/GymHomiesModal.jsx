import React from 'react'
import gymgif from '../images/giphy.gif';

const GymHomiesModal = () => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header ">
              <h1 className="modal-title fs-5 ms-auto" id="exampleModalLabel">GYM Homies</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="m-auto py-1">
              <img src={gymgif}></img>
            </div>
            <div className="modal-footer">
              <div className="modal-dialog modal-dialog-scrollable">
                <h1 className='text-center'>Fitness Workout Tracker</h1>
                <h2>Project Description:</h2>
                <p>The Fitness Workout Tracker is a web application that allows users to track their fitness progress and monitor their workout routines. The application will allow users to create an account, log in, and track their daily workouts, as well as view their workout history.</p>
                <p>The application will be a full stack web application built using Node.js for the server-side code and Handlebars for the front-end code. The application will use MySQL as the database for storing user information and workout data.</p>
                <h2>The application will have the following features:</h2>
                <ul>
                  <li>User Registration and Login: Users will be able to create an account and log in using their email and password. Authentication will be implemented using a token-based authentication system.</li>
                  <li>Workout Tracking: Users will be able to log their workouts, including the type of exercise, duration, and intensity. The application will allow users to view their workout history and progress over time.</li>
                  <li>Exercise Library: The application will have a library of exercises that users can choose from when creating their workout logs. The library will include information on the type of exercise, how to perform it, and the muscles targeted.</li>
                  <li>Dashboard: The application will have a dashboard that displays a summary of the user's workout history and progress.</li>
                </ul>
                <h2>Technologies Used:</h2>
                <ul>
                  <li>Node.js for server-side code</li>
                  <li>Handlebars for front-end code</li>
                  <li>MySQL for the database</li>
                  <li>Express.js for creating the RESTful API</li>
                  <li>bootstrap for the user interface design</li>
                </ul>
                <h2>Project Requirements:</h2>
                <ul>
                  <li>The application must be responsive and work on desktop and mobile devices.</li>
                  <li>The application must use RESTful APIs for communicating between the server and the client.</li>
                  <li>The application must implement authorization.</li>
                  <li>The application must use MySQL for storing user information and workout data.</li>
                  <li>The application must be well documented, with clear instructions for running and deploying the application.</li>
                  <li>The application must be deployed to a cloud hosting platform such as AWS or Heroku.</li>
                  <li>The application must adhere to good coding practices and follow the MVC architecture pattern.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default GymHomiesModal