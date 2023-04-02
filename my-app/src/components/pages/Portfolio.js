import React from 'react';
import pictureone from '../../images/pic.png';
import picturetwo from '../../images/screens.jpg';
import '../../styles/portfolio.css';

export default function Portfolio() {
  return (
    <div>
      <h1 className='jo'>Portfolio</h1>
      <div className="container text-center">
  <div className="row row-cols-2">
    <div className="col">
      <div>
        <img className='image' id='image' src= {pictureone}></img>
        <div className='imgref' id='imgref'>
        <a className='btn m-3 btn-dark' href='https://powerful-sands-21433.herokuapp.com/'>live link</a>
        <a className='btn m-3 btn-dark' href='https://github.com/abduljabar5/gym-homie-v-2'>github</a>
        </div>
        </div>
    </div>
    <div className="col">
   <img className='image' src={picturetwo}></img> 
   <div className='imgref' id='imgref'>
        <a className='btn m-3 btn-dark' href='https://powerful-sands-21433.herokuapp.com/'>live link</a>
        <a className='btn m-3 btn-dark' href='https://github.com/abduljabar5/gym-homie-v-2'>github</a>
        </div>
    </div>
    <div className="col">
      <img className='image' src='https://w0.peakpx.com/wallpaper/184/644/HD-wallpaper-css-coding-ultra-computers-hardware-internet-laptop-working-technology-computer-code-programming-software-development-workplace-website-sourcecode.jpg'></img>
      <div className='imgref' id='imgref'>
        <a className='btn m-3 btn-dark' href='https://powerful-sands-21433.herokuapp.com/'>live link</a>
        <a className='btn m-3 btn-dark' href='https://github.com/abduljabar5/gym-homie-v-2'>github</a>
        </div>
    </div>
    <div className="col">
      <img className='image' src='https://w0.peakpx.com/wallpaper/40/229/HD-wallpaper-typetrail-media-business-analytics-content-marketing-digital-marketing-email-marketing-local-seo-mobile-marketing-reputation-management-social-media-marketing-web-development-website-design.jpg'></img>
      <div className='imgref' id='imgref'>
        <a className='btn m-3 btn-dark' href='https://powerful-sands-21433.herokuapp.com/'>live link</a>
        <a className='btn m-3 btn-dark' href='https://github.com/abduljabar5/gym-homie-v-2'>github</a>
        </div>
    </div>
  </div>
</div>
    </div>
  );
}
