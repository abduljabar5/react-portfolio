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
              <span id='code'><a className='btn m-3 btn-dark' href='totaltowncarserviceandtaximsp.com' target="_blank">live link</a></span>
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
    </div>
  </div>
</div>
{/* modal 2 */}
<div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header ">
        <h1 className="modal-title fs-5 ms-auto" id="exampleModalLabel2"> Homies</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="m-auto py-1">
      <iframe src="https://drive.google.com/file/d/118XbYPiIxCvO2VccBhBWVThvlsBn5r-D/preview" preload="auto" width="640" height="480"></iframe>
      </div>
    </div>
  </div>
</div>
  </section>
  
  );
}
export default Portfolio;