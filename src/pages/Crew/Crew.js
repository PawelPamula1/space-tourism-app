import React, { useState, useEffect } from 'react';
import classes from './Crew.module.css';
import douglas from '../../assets/crew/image-douglas-hurley.png';
import anousheh from '../../assets/crew/image-anousheh-ansari.png';
import victor from '../../assets/crew/image-victor-glover.png';
import mark from '../../assets/crew/image-mark-shuttleworth.png';

const crew = [
  {
    number: 0,
    name: 'Douglas Hurley',
    position: 'commander',
    description:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    urlImage: douglas,
  },
  {
    number: 1,
    name: 'Anousheh Ansari',
    position: 'Flight Engineer',
    description:
      'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    urlImage: anousheh,
  },
  {
    number: 2,
    name: 'Victor Glover',
    position: 'Pilot',
    description:
      'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
    urlImage: victor,
  },
  {
    number: 3,
    name: 'Mark Shuttleworth',
    position: 'Mission Specialist',
    description:
      'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    urlImage: mark,
  },
];

const Crew = () => {
  const [currPerson, setCurrPerson] = useState(crew[0]);

  const currPersonHandler = (e) => {
    const personNumber = e.target.value;
    console.log(+personNumber);
    setCurrPerson(crew[personNumber]);
  };

  useEffect(() => {
    if (currPerson === crew[0]) {
      const timer = setTimeout(() => {
        setCurrPerson(crew[1]);
      }, 5000);
      return () => clearTimeout(timer);
    }

    if (currPerson === crew[1]) {
      const timer = setTimeout(() => {
        setCurrPerson(crew[2]);
      }, 5000);
      return () => clearTimeout(timer);
    }

    if (currPerson === crew[2]) {
      const timer = setTimeout(() => {
        setCurrPerson(crew[3]);
      }, 5000);
      return () => clearTimeout(timer);
    }

    if (currPerson === crew[3]) {
      const timer = setTimeout(() => {
        setCurrPerson(crew[0]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  });

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h5>
          <span>02</span> Meet Your Crew
        </h5>
        <div className={classes.person}>
          <h4>{currPerson.position}</h4>
          <h3>{currPerson.name}</h3>
          <p>{currPerson.description}</p>
        </div>
        <div className={classes.dots}>
          <button
            onClick={currPersonHandler}
            value="0"
            className={currPerson.number === 0 && classes.active}
          ></button>
          <button
            onClick={currPersonHandler}
            value="1"
            className={currPerson.number === 1 && classes.active}
          ></button>
          <button
            onClick={currPersonHandler}
            value="2"
            className={currPerson.number === 2 && classes.active}
          ></button>
          <button
            onClick={currPersonHandler}
            value="3"
            className={currPerson.number === 3 && classes.active}
          ></button>
        </div>
      </div>
      <img src={currPerson.urlImage} alt="" />
    </div>
  );
};

export default Crew;
