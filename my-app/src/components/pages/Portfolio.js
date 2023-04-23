import React from 'react';
import pictureoe from '../../images/pic.png';
import picturetw from '../../images/screens.jpg';
import '../../styles/portfolio.css';

export default function Portfolio() {
  return (
    <section id="portfolio">
    <div className="container wow fadeInUp">
      <div className="row">
        <div className="col-md-12">
          <h3 className="section-title">Portfolio</h3>
          <div className="section-title-divider"></div>
          <p className="section-description">main projects</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <a className="portfolio-item" href="">
            <div className="details">
              <h4>Portfolio 1</h4>
              <div className='mogo'>
              <span id='code'><a className='btn m-3 btn-dark' href='https://powerful-sands-21433.herokuapp.com/' target="_blank">live link</a></span>
              <span id='live'><a className='btn m-3 btn-dark' href='https://github.com/abduljabar5/gym-homie-v-2' target="_blank">github</a></span>
            </div>
            </div>
          </a>
        </div>

        <div className="col-md-3">
          <a className="portfolio-item"href="">
            <div className="details">
              <h4>Portfolio 2</h4>
              <span></span>
            </div>
          </a>
        </div>

        <div className="col-md-3">
          <a className="portfolio-item" href="">
            <div className="details">
              <h4>Portfolio 3</h4>
              <span></span>
            </div>
          </a>
        </div>

        <div className="col-md-3">
          <a className="portfolio-item"  href="">
            <div className="details">
              <h4>Portfolio 4</h4>
              <span></span>
            </div>
          </a>
        </div>
        <div className="col-md-3">
          <a className="portfolio-item"  href="">
            <div className="details">
              <h4>Portfolio 4</h4>
              <span></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  );
}
