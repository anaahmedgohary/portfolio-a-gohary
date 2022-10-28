import React from 'react';
// import { useState } from 'react';
import "./style/style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import pinkStrokes from "./style/images/pink-strokes.png";

function Bodya()
{

  AOS.init(2000);
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
  let fadeleft = "fade-left";
  let faderight = 'fade-right';


  return (

    <div className="sub-header">
      <div className="alll-cards" id='mySkillsA'>
        <div className="skills-card" id='scrolledto'>
          <img
            className="card-img-top img-sskills"
            src="./images/Skills04.png"
            alt="My Skills"
            data-aos='fade-down'
          />
          <div className="skills-div"
            id='aboutMeA'
            data-aos='fade-up'
            data-aos-duration="2000">
            <p
              data-aos={faderight} className='my-skill'>HTML</p>
            <p
              data-aos={faderight} className='my-skill'>CSS</p>
            <p data-aos={faderight} className='my-skill'>JavaScript</p>
            <p
              data-aos={faderight} className='my-skill'>jQuery</p>
            <p
              data-aos={faderight} className='my-skill'>Git</p>
            <p data-aos={fadeleft} className='my-skill'>Github</p>
            <p data-aos={fadeleft} className='my-skill'>SASS.scss</p>
            <p data-aos={fadeleft} className='my-skill'>BootStrap</p>
            <p data-aos={fadeleft} className='my-skill'>REACT.js</p>
            <p
              data-aos={faderight} className='my-skill'>Adobe Photoshop</p>
            <p
              data-aos={faderight} className='my-skill'>Adobe Illustrator</p>
            <p
              data-aos={faderight} className='my-skill'>Adobe XD</p>
            <p data-aos={fadeleft} className='my-skill'>Adobe Premiere</p>
            <p data-aos={fadeleft} className='my-skill'>GIMP</p>
            <p data-aos={fadeleft} className='my-skill'>Microsoft Office</p>
            <p
              data-aos={faderight} className='my-skill'>MySQL</p>
            <p data-aos={fadeleft} className='my-skill'>PHP</p>
          </div>
        </div>

        <div className="about-me-div">
          {/* <img
            className="card-img-top about-img"
            src={pinkStrokes}
            alt="profile"
            data-aos="fade-left"
            data-aos-duration="2000"
          /> */}
          <div className="card-body" data-aos="fade-right" data-aos-duration="2000">
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