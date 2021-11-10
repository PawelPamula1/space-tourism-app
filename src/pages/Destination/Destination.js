import React from 'react';
import classes from './Destination.module.css';
import moon from '../../assets/destination/image-moon.png';

const Destination = () => {
  return (
    <div className={classes.container}>
      <div className={classes.destination}>
        <h5>
          <span>01</span> Pick Your Destination
        </h5>
        <img src={moon} alt="moon" />
      </div>
      <div className={classes.content}>
        <ul>
          <li>Moon</li>
          <li>Mars</li>
          <li>Europa</li>
          <li>Titan</li>
        </ul>
        <h2>MOON</h2>
        <p>
          See our planet as you've never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you're
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites
        </p>

        <div className={classes.horizontal} />
        <div className={classes.info}>
          <div className={classes.traveldistance}>
            <div className="sub-heading-2">Avg. distance</div>
            <div className="sub-heading-1">384,400 km</div>
          </div>
          <div className={classes.traveltime}>
            <div className="sub-heading-2">Avg. distance</div>
            <div className="sub-heading-1">384,400 km</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
