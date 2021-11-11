import React from 'react';
import classes from './Technology.module.css';
import vehicle from '../../assets/technology/image-launch-vehicle-portrait.jpg';

const Technology = () => {
  return (
    <div className={classes.container}>
      <div className={classes.technology}>
        <h5>
          <span>03</span> Space Launch
        </h5>
        <div className={classes.box}>
          <div className={classes.buttons}>
            <button className={classes.active}>1</button>
            <button>2</button>
            <button>3</button>
          </div>
          <div className={classes.description}>
            <div className="sub-heading-2">The Terminology...</div>
            <h2>Launch Vehicle</h2>
            <p>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
      </div>
      <img src={vehicle} alt="vehicle" />
    </div>
  );
};

export default Technology;
