import React from 'react';
// Replace with the actual import path for your placeholder image
import linkafyVideo from '../images/linkafy.webm'

const LinkafyProjectModal = () => {
  return (
    <div className="modal fade" id="linkafyModal" tabIndex="-1" aria-labelledby="linkafyModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="m-auto py-1">
          <iframe src={linkafyVideo} preload="auto" width="640" height="336"></iframe>
          </div>
          <div className="modal-footer">
            <div className="modal-dialog modal-dialog-scrollable">
              <h1 className='text-center'>Linkafy</h1>
              <h2>Project Description:</h2>
              <p>Linkafy is an innovative link tracking application designed to provide detailed analytics on web link traffic. Built with Next.js, React, and Node.js, this platform allows users to convert their original URLs into trackable links. Once a user registers, they can generate a new link that monitors the number of clicks and the geographic location of each click. The platform effectively addresses the challenge of maintaining the speed and efficiency of link redirection, ensuring the original link is quickly reached post-tracking.</p>
              <p>The most significant challenge in this project was optimizing the link tracking process to prevent any noticeable delays. This was crucial to ensure users experience seamless redirection to the original link after their click and location data are captured and stored. Implementing efficient data handling and server-side processing was key to achieving this.</p>
              <h2>The Application Features:</h2>
              <ul>
                <li><strong>Unlimited Link Tracking:</strong> Users can track an unlimited number of links.</li>
                <li><strong>Click and Location Analytics:</strong> Detailed tracking of the number of clicks and geographical locations.</li>
                <li><strong>User Authentication:</strong> Secure user registration and login facilitated by NextAuth.</li>
                <li><strong>Performance Optimization:</strong> Ensuring fast and efficient link redirection after data capture.</li>
                <li><strong>Geolocation Tracking:</strong> Utilization of geolocation technology for precise user click location analytics.</li>
              </ul>
              <h2>Technologies Used:</h2>
              <ul>
                <li><strong>Next.js:</strong> The React framework for server-side rendering and static site generation.</li>
                <li><strong>React:</strong> For building a dynamic user interface.</li>
                <li><strong>Tailwind CSS:</strong> A utility-first CSS framework for rapid UI development.</li>
                <li><strong>Node.js:</strong> JavaScript runtime for building the server-side application.</li>
                <li><strong>NextAuth:</strong> For authentication and security.</li>
                <li><strong>Geolocation:</strong> For tracking the geographical location of link clicks.</li>
              </ul>
              <h2>Project Requirements:</h2>
              <ul>
                <li>Highly efficient and fast link redirection post-tracking.</li>
                <li>Robust user authentication and security measures.</li>
                <li>Accurate geolocation tracking for each link click.</li>
                <li>Ability to handle a high volume of links and click data without performance degradation.</li>
                <li>Responsive design for optimal user experience across various devices.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkafyProjectModal;
