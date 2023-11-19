import React from 'react';

const ModalComponent = () => {
  return (
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
  );
};

export default ModalComponent;
