import React from 'react';
import Header from './components/landing/header';
import Bodya from './components/landing/bodya';
import MyProjects from "./components/landing/myprojects";

const Landing = () =>
{
    return (
      <div>
        <Header />
        <Bodya />
        <MyProjects />
      </div>
    );
}

export default Landing;
