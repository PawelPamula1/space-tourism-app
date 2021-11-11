import React, { useState } from 'react';
import classes from './Technology.module.css';
import vehicle from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import capsule from '../../assets/technology/image-space-capsule-portrait.jpg';
import spaceport from '../../assets/technology/image-spaceport-portrait.jpg';

const tech = [
  {
    number: 0,
    name: 'Launch vehicle',
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imageUrl: vehicle,
  },
  {
    number: 1,
    name: 'Space capsule',
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imageUrl: capsule,
  },
  {
    number: 2,
    name: 'Spaceport',
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    imageUrl: spaceport,
  },
];

const Technology = () => {
  const [currTech, setCurrTech] = useState(tech[0]);

  const currTechHandler = (e) => {
    setCurrTech(tech[e.target.value]);
  };

  return (
    <div className={classes.container}>
      <div className={classes.technology}>
        <h5>
          <span>03</span> Space Launch
        </h5>
        <div className={classes.box}>
          <div className={classes.buttons}>
            <button
              onClick={currTechHandler}
              className={currTech.number === 0 && classes.active}
              value="0"
            >
              1
            </button>
            <button
              onClick={currTechHandler}
              className={currTech.number === 1 && classes.active}
              value="1"
            >
              2
            </button>
            <button
              className={currTech.number === 2 && classes.active}
              onClick={currTechHandler}
              value="2"
            >
              3
            </button>
          </div>
          <div className={classes.description}>
            <div className="sub-heading-2">The Terminology...</div>
            <h2>{currTech.name}</h2>
            <p>{currTech.description}</p>
          </div>
        </div>
      </div>
      <img src={currTech.imageUrl} alt="vehicle" />
    </div>
  );
};

export default Technology;
