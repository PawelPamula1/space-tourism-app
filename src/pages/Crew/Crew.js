import React, { Fragment } from 'react';
import classes from './Crew.module.css';
import douglas from '../../assets/crew/image-douglas-hurley.png';

const Crew = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h5>
          <span>02</span> Meet Your Crew
        </h5>
        <div className={classes.person}>
          <h4>Commander</h4>
          <h3>Douglas Hurley</h3>
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
        <div className={classes.dots}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <img src={douglas} alt="" />
    </div>
  );
};

export default Crew;
