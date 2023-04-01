import React from 'react';
import profilepic from '../../images/profilepic.webp'
export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img className='profileimg' src={profilepic}></img>
      <p>
      I'm a determined person that appreciates technology and programming.
       After researching numerous employment opportunities in college and concluding that the traditional educational path was not for me, I opted to pursue my love of software development. 
       I have a strong interest in programming and am now studying at the University of Minnesota in a full-stack coding boot camp.
        My ambition is to use my newly learned skills to assist businesses and organizations in developing innovative solutions to difficult problems.
        I am a quick learner who thrives in a fast-paced environment.
         I can't wait to have a positive influence in the tech sector and am eager to see where this path takes me.
      </p>
    </div>
  );
}
