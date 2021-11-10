import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h5>So, you want to travel to</h5>
        <h1>space</h1>
        <p>
          Let's face it: If you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <NavLink to="/destination" className={classes.explore}>
        <h4 className={classes.heading}>Explore</h4>
      </NavLink>
    </div>
  );
};

export default Home;
