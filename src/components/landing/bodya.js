import React from 'react';
// import { useState } from 'react';
import "./style/style.css";

function Bodya()
{

  //const [oshow, setOshow] = useState("ohide");

  // const observer = new IntersectionObserver((entries) =>
  // {
  //   entries.forEach((entry) =>
  //   {
  //     console.log(`entry: ${entry}`)
  //     if (entry.isIntersecting)
  //     {
  //       setOshow('oShow')
  //       entry.target.classList.add(oshow);
  //     } 
  //     // 
  //   })
  // });

  // const hiddenEls = document.querySelectorAll('.oHide');
  // hiddenEls.forEach((el)=> observer.observe(el));



  return (

    <div className="sub-header">
      <div className="alll-cards">
        <div className="skills-card">
          <img
            className="card-img-top img-sskills"
            src="./images/Skills04.png"
            alt="My Skills"
          />
          <div className="skills-div">
            <p className='my-skill'>HTML</p>
            <p className='my-skill'>CSS</p>
            <p className='my-skill'>JavaScript</p>
            <p className='my-skill'>jQuery</p>
            <p className='my-skill'>Git</p>
            <p className='my-skill'>Github</p>
            <p className='my-skill'>SASS.scss</p>
            <p className='my-skill'>BootStrap</p>
            <p className='my-skill'>REACT.js</p>
            <p className='my-skill'>Adobe Photoshop</p>
            <p className='my-skill'>Adobe Illustrator</p>
            <p className='my-skill'>Adobe XD</p>
            <p className='my-skill'>Adobe Premiere</p>
            <p className='my-skill'>GIMP</p>
            <p className='my-skill'>Microsoft Office</p>
            <p className='my-skill'>MySQL</p>
            <p className='my-skill'>PHP</p>
          </div>
        </div>

        <div className="about-me-div">
          <img
            className="card-img-top about-img"
            src="./images/facerj.jpg"
            alt="profile"
          />
          <div className="card-body">
            <h3 className="card-title">About Me</h3>
            <div className="about-content">
              <p>
                Hello, my name is Ahmed Gohary and I'm a fontend web developer. I'm really passionate about web
                development. I'm Egyptian, and I live in Cairo currently. I'm
                an active & quick learner. And a good team member.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Bodya;