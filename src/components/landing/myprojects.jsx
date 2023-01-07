import React from 'react'

import "./style/myprojects/bodybstyle.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

// import elonappsnap from "./style/images/elonapp.png";
import mebatteryimg from "./style/images/mebattery02.png";
import rpsimg from "./style/images/rps.png"
import menusapp from "./style/images/menusapp.png"

export default function MyProjects()
{
  AOS.init(2000);

  return (
    <div className="proj-body">
      <h1 className="proj-title" id='myProjAnchore'>My Projects</h1>

      <div className="proj-cards">

        
        <div className="card proj-card pc06" data-aos='fade-up' data-aos-duration="3000" data-aos-easing="ease-out">
          <img
            className="card-img-top card-image"
            src={menusapp}
            alt="webapp screenpshot"
          />
          <div className="card-body">
            <h5 className="card-title">
              Menus web app.
            </h5>
            <p className="card-text">
              Project of web app to provide menus for restaurants and cafes. Made with
              [REACT.js, Node.js, Express.js, JavaScript, SASS, CSS, Bootstrap].
            </p>
            <a href="https://menusapp.vercel.app" className="btn btn-primary linkBtn" target="_blank" rel="noopener noreferrer">
              Link to project
            </a>
          </div>
        </div>


        <div className="card proj-card pc01" data-aos='fade-up' data-aos-duration="3000" data-aos-easing="ease-out">
          <img
            className="card-img-top card-image"
            src="./images/carsapp.png"
            alt="website screenpshot"
          />
          <div className="card-body">
            <h5 className="card-title">Cars Wishlist web app (REACT.js)</h5>
            <p className="card-text">
              Project of website for car prices with dynamic Cart .
              Made with [ REACT.JS, JSX, CSS, SASS, Express.js, Node.js].
            </p>
            <a
              href="https://carprices.vercel.app/" target="_blank" rel="noopener noreferrer"
              className="btn btn-primary linkBtn"
            >
              Link to project
            </a>
          </div>
        </div>



        <div className="card proj-card pc02" data-aos='fade-up' data-aos-duration="3000" data-aos-easing="ease-out">
          <img
            className="card-img-top card-image"
            src="./images/shahd01.png"
            alt="website screenpshot"
          />
          <div className="card-body">
            <h5 className="card-title">
              Restaurant Web app for.
            </h5>
            <p className="card-text">
              Project of website for online shopping. Connected to MySQL
              Database. Stores Cart data in local storage. Added Paypal
              Payment method. Made with [PHP, HTML, JavaScript, CSS, SQL,
              jQuery].
            </p>
            <a
              href="http://shahdresturant.epizy.com/"
              className="btn btn-primary linkBtn" target="_blank" rel="noopener noreferrer"
            >
              Link to project
            </a>
          </div>
        </div>

        

        

        

        {/* <div className="card proj-card pc04" data-aos='fade-up' data-aos-duration="3000" data-aos-easing="ease-out">
          <img
            className="card-img-top card-image"
            src={elonappsnap}
            alt="website screenpshot"
          />
          <div className="card-body">
            <h5 className="card-title">
              Elon Musk fanpage web app.
            </h5>
            <p className="card-text">
              Project of website for Elon Musk fanpage made with
              [React.js, JSX, SASS, JavaScript, SASS, CSS,].
            </p>
            <a href="https://elonmuskfans.vercel.app/" className="btn btn-primary linkBtn" target="_blank" rel="noopener noreferrer">
              Link to project
            </a>
          </div>
        </div> */}

        <div className="card proj-card pc03" data-aos='fade-up' data-aos-duration="3000" data-aos-easing="ease-out">
          <img
            className="card-img-top card-image"
            src={mebatteryimg}
            alt="webapp screenpshot"
          />
          <div className="card-body">
            <h5 className="card-title">
              MeBattery web app.
            </h5>
            <p className="card-text">
              Project of web app to record personal energy levels during day.Backend Node.js. Connected to Database to record notes. Made with
              [React.js, Express.js, SQL, JSX, SASS, JavaScript, SASS, CSS, Bootstrap].
            </p>
            <a href="https://mebattery.vercel.app/" className="btn btn-primary linkBtn" target="_blank" rel="noopener noreferrer">
              Link to project
            </a>
          </div>
        </div>

        <div className="card proj-card pc04" data-aos='fade-up' data-aos-duration="3000" data-aos-easing="ease-out">
          <img
            className="card-img-top card-image"
            src={rpsimg}
            alt="webapp screenpshot"
          />
          <div className="card-body">
            <h5 className="card-title">
              Rock Paper Scissors web game.
            </h5>
            <p className="card-text">
              Project of web app to play rock paper scissors game staticly with friends. Made with
              [HTML, SASS, JavaScript, SASS, CSS, Bootstrap].
            </p>
            <a href="https://anaahmedgohary.github.io/rock-paper-scissors/play-vs-friend.html" className="btn btn-primary linkBtn" target="_blank" rel="noopener noreferrer">
              Link to project
            </a>
          </div>
        </div>

        

        {/* <div className="card proj-card pc05" data-aos='fade-up'>
            <img
              className="card-img-top card-image"
              src="./images/reviewSite.jpg"
              alt="website screenpshot"
            />
            <div className="card-body">
              <h5 className="card-title">simple reviews web app with jQuery</h5>
              <p className="card-text">
                Project of website for Customer reviews made with with [jQuery,
                HTML, CSS].
              </p>
              <a href="/review-app" className="btn btn-primary linkBtn" target="_blank" rel="noopener noreferrer">
                Link to project
              </a>
            </div>
          </div>
        </div>
        <div> */}
        {/* <div>
                    <h1>
                        Customer reviews web app with vanilla Javascript
                    </h1>
                    <img src="" alt="" srcset="" />
                    <a href="/review-app" target="_blank" rel="noopener noreferrer">Link to project</a>
                </div>
                <div>
                    <h1>
                        resturant web app with REACT JS
                    </h1>
                    <a href="https://react-shahd-git-main-marlojoman.vercel.app/" target="_blank" rel="noopener noreferrer">Link to REACT project</a>
                </div> */}
      </div>
    </div>
  );
}


