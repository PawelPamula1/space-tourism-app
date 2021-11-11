import React, { useState } from 'react';
import classes from './Destination.module.css';
import moonImg from '../../assets/destination/image-moon.png';
import europaImg from '../../assets/destination/image-europa.png';
import titanImg from '../../assets/destination/image-titan.png';
import marsImg from '../../assets/destination/image-mars.png';

const planets = [
  {
    number: 0,
    name: 'moon',
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites",
    distance: '384,400 km',
    time: '3 days',
    urlImage: moonImg,
  },
  {
    number: 1,
    name: 'mars',
    description:
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 mil. km',
    time: '9 months',
    urlImage: marsImg,
  },
  {
    number: 2,
    name: 'europa',
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bi of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 mil. km',
    time: '3 years',
    urlImage: europaImg,
  },
  {
    number: 3,
    name: 'titan',
    description:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 bil. km',
    time: '7 years',
    urlImage: titanImg,
  },
];

const Destination = () => {
  const [planet, setPlanet] = useState(planets[0]);

  const planetHandler = (e) => {
    const planetNumber = e.target.value;
    setPlanet(planets[planetNumber]);
  };

  return (
    <div className={classes.container}>
      <div className={classes.destination}>
        <h5>
          <span>01</span> Pick Your Destination
        </h5>
        <img src={planet.urlImage} alt={planet.name} />
      </div>
      <div className={classes.content}>
        <ul>
          <li
            className={planet.number === 0 && classes.active}
            value="0"
            onClick={planetHandler}
          >
            Moon
          </li>
          <li
            className={planet.number === 1 && classes.active}
            value="1"
            onClick={planetHandler}
          >
            Mars
          </li>
          <li
            className={planet.number === 2 && classes.active}
            value="2"
            onClick={planetHandler}
          >
            Europa
          </li>
          <li
            className={planet.number === 3 && classes.active}
            value="3"
            onClick={planetHandler}
          >
            Titan
          </li>
        </ul>
        <h2>{planet.name}</h2>
        <p>{planet.description}</p>

        <div className={classes.horizontal} />
        <div className={classes.info}>
          <div className={classes.traveldistance}>
            <div className="sub-heading-2">Avg. distance</div>
            <div className="sub-heading-1">{planet.distance}</div>
          </div>
          <div className={classes.traveltime}>
            <div className="sub-heading-2">Est. travel time</div>
            <div className="sub-heading-1">{planet.time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
