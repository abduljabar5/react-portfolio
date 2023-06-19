import React, { useState, useEffect } from 'react';

import movie from '../../images/movie.png';
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
                <h4>Popcorn Peek</h4>
                <div className='mogo'>
                  <span id='code'><a className='btn m-3 btn-dark' href='https://obscure-anchorage-29420.herokuapp.com/' target="_blank">live link</a></span>
                  <span id='preview'><a className='btn m-3 btn-dark' href='https://github.com/abduljabar5/react-movie-site' target="_blank">github</a></span>
                  <span id='live'><a className='btn m-3 btn-dark' href="#exampleModal3" data-bs-toggle="modal" data-bs-target="#exampleModal3" >Preview</a></span>
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
          <div className="col-md-3 lessimportent">
            <a className="portfolio-item project3">
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
      <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header ">
              {/* <h1 className="modal-title fs-5 ms-auto" id="exampleModalLabel">Popcorn Peek</h1> */}
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="m-auto py-1">
              <img src={movie} style={{width:'100%'}}></img>
            </div>
            <div className="modal-footer">
              <div className="modal-dialog modal-dialog-scrollable">
                <h1 className='text-center'>Popcorn Peek</h1>
                <h2>Project Description:</h2>
                <p>PopcornPeek is a dynamic web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that caters to the entertainment needs of users by allowing them to explore trending movies, TV shows, and anime. PopcornPeek is more than just a listing of entertainment content. It offers a deeper dive into each show, movie, or anime. Users can view trailers, read comprehensive descriptions, explore similar content, and access useful information such as age ratings, IMDb ratings, status, and more.</p>
                <p>One of the major challenges faced during the development of this project was handling API usage limitations. As movie information changes frequently, it was essential to provide users with the most recent data while dealing with the API's constraints. One solution was to leverage the power of IndexedDB, a low-level API for client-side storage of significant amounts of structured data. A system was implemented to save the received data from the API to IndexedDB. This data is refreshed once a day, ensuring the website provides users with current information without exceeding the API's call limit. This strategy not only maintains data freshness but also improves the application's performance, as a lot of the data can be served directly from the local IndexedDB storage, resulting in quicker load times and a smoother user experience.</p>
                <h2>The Application Features:</h2>
                <ul>
                  <li><strong>Authentication:</strong> User accounts and authentication</li>
                  <li><strong>Search:</strong> Allows users to search for their desired content by title</li>
                  <li><strong>Personal Recommendations:</strong> Personalized recommendations appearing on user's homepage, curated based on the content they've saved</li>
                  <li><strong>Save Functionality:</strong> Ability for users to save movies, shows, and anime they're interested in</li>
                  <li><strong>Chat Bot:</strong> A Chatbot that can answer any queries about movies, shows, and anime</li>
                </ul>
                <h2>Technologies Used:</h2>
                <ul>
                  <li><strong>MongoDB:</strong> A NoSQL database used for efficient data storage and retrieval.</li>
                  <li><strong>Express.js:</strong> A back-end web application framework used for building the server-side logic.</li>
                  <li><strong>React.js:</strong> A JavaScript library used for building dynamic and responsive user interfaces.</li>
                  <li><strong>Node.js:</strong> A JavaScript runtime environment used for running the server-side code.</li>
                  <li><strong>Bootstrap & React Bootstrap:</strong> CSS frameworks utilized for creating responsive and appealing design components.</li>
                  <li><strong>TMDB API:</strong> Used for fetching detailed and updated information about movies and TV shows.</li>
                  <li><strong>IMDB API & OMDB API:</strong> Used for pulling ratings data and other related information about movies and shows.</li>
                  <li><strong>Kitsu API:</strong> Used for fetching data related to anime series.</li>
                  <li><strong>OpenAI API:</strong> Integrated for powering the chatbot feature, enabling it to provide detailed answers about movies, shows, and anime.</li>
                  <li><strong>GNews API:</strong> Used for fetching and displaying the latest news related to movies and shows on the website.</li>
                </ul>

                <h2>Project Requirements:</h2>
                <ul>
                  <li>The application must be fully responsive and work seamlessly on both desktop and mobile devices.</li>
                  <li>The application must implement user authentication, allowing users to create an account, log in, and maintain a personalized profile.</li>
                  <li>The application must provide real-time search results for movies, TV shows, and anime.</li>
                  <li>The application must offer personalized content recommendations based on the user's saved preferences.</li>
                  <li>The application must allow users to save and manage their favorite movies, shows, and anime in their profiles.</li>
                  <li>The application should integrate a chatbot that can answer user questions related to movies, shows, and anime.</li>
                  <li>The application must adhere to good coding practices, follow a modular approach, and maintain clean and readable code.</li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal2 */}
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