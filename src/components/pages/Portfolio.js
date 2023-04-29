import React, { useState, useEffect } from 'react';

import gymgif from '../../images/giphy.gif';

function Portfolio() {
  return (

    <section id="portfolio">
      <div className="container wow fadeInUp">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-title">Projects</h3>
            <div className="section-title-divider"></div>
            <p className="section-description">Full Stack</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 main-project">
            <a className="portfolio-item project1">
              <div className="details">
                <h4>GYM Homies</h4>
                <div className='mogo'>
                  <span id='code'><a className='btn m-3 btn-dark' href='https://gym-homies.herokuapp.com/' target="_blank">live link</a></span>
                  <span id='preview'><a className='btn m-3 btn-dark' href='https://github.com/abduljabar5/gym-homie-v-2' target="_blank">github</a></span>
                  <span id='live'><a className='btn m-3 btn-dark' href="#exampleModal" data-bs-toggle="modal" data-bs-target="#exampleModal" >Preview</a></span>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-3 lessimportent">
            <a className="portfolio-item project2">
              <div className="details">
                <h4>TTCS</h4>
                <div className='mogo'>
                  <span id='code'><a className='btn m-3 btn-dark' href='https://totaltowncarserviceandtaximsp.com/' target="_blank">live link</a></span>
                  <span id='preview'><a className='btn m-3 btn-dark' href='https://github.com/abduljabar5/ttcs' target="_blank">github</a></span>
                  <span id='live'><a className='btn m-3 btn-dark' href="#exampleModal2" data-bs-toggle="modal" data-bs-target="#exampleModal2" >Preview</a></span>
                </div>
              </div>
            </a>
          </div>
          {/* <div className="col-md-3 lessimportent">
          <a className="portfolio-item" >
            <div className="details">
              <h4>Portfolio 4</h4>
              <span></span>
            </div>
          </a>
        </div>
        <div className="col-md-3 lessimportent">
          <a className="portfolio-item" >
            <div className="details">
              <h4>Portfolio 4</h4>
              <span></span>
            </div>
          </a>
        </div> */}
        </div>
      </div>
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
      {/* modal 2 */}
      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header ">
              <h1 className="modal-title fs-5 ms-auto" id="exampleModalLabel2"> Totaltowncarservice</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="m-auto py-1">
              <iframe src="https://drive.google.com/file/d/118XbYPiIxCvO2VccBhBWVThvlsBn5r-D/preview" preload="auto" width="640" height="480"></iframe>
            </div>
            <div className="modal-footer">
              <div className="modal-dialog modal-dialog-scrollable">
                <h1 className='text-center'>TTCS</h1>
                <h2>Project Description</h2>
                <p>The Taxi Service Website is a static frontend only website that was developed for a small startup taxi service company. The website was designed to handle booking requests and allow customers to leave reviews.</p>
                <h3>Booking Form</h3>
                <ul>
                  <li>The website includes a booking form that utilizes Google Maps and Google Autocomplete to help customers enter their pickup and dropoff locations.</li>
                  <li>The form also utilizes the user's current location to provide more accurate pickup location suggestions.</li>
                  <li>Once the form is submitted, the customer's booking information is sent to the company via email.</li>
                </ul>
                <h3>Review Page</h3>
                <ul>
                  <li>The website has a review page where customers can leave feedback about their experience with the taxi service.</li>
                  <li>The review page displays all the reviews left by customers, including their name and the date they left the review.</li>
                </ul>
                <h2>Technologies Used</h2>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Google Maps API</li>
                  <li>Google Autocomplete API</li>
                  <li>EmailJS API</li>
                </ul>
                <h2>Project Requirements</h2>
                <ul>
                  <li>The website must be responsive and work on desktop and mobile devices.</li>
                  <li>The website must include a booking form that uses Google Maps and Google Autocomplete to handle location input.</li>
                  <li>The website must send booking information to the company via email.</li>
                  <li>The website must have a review page that displays all the reviews left by customers.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
export default Portfolio;