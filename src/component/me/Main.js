import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import style from '../../stylesheets/Main.module.scss';

const Main = () => (
  <div id="main">
    <Jumbotron className="text-center">
      <h1 className={style.title}>Andy Chen</h1>
      <hr className="my-4" />
      <p>A Master&apos;s Degree in Computer Science from NCCU.</p>
      <p className="lead">
        <Button color="primary" href="#aboutme">About Me</Button>
      </p>
    </Jumbotron>
  </div>
);


export default Main;
