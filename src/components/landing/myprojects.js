import React from 'react'

import "./style/myprojects/bodybstyle.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MyProjects()
{
  AOS.init(2000);

  return (
    <div className="proj-body">
      <h1 className="proj-title" id='myProjAnchore'>My Projects</h1>

      <div className="proj-cards">

        <div className="card proj-card pc01" data-aos='flip-down' data-aos-duration="3000" data-aos-easing="ease-out">
          <img
            className="card-img-top card-image"
            src="./images/resta02.png"
            alt="website screenpshot"
          />
          <div className="card-body">
            <h5 className="card-title">Resturant web app with Cart (REACT)</h5>
            <p className="card-text">
              Project of website for resturant web app with dynamic Cart made
              with REACT JS framework.
            </p>
            <a
              href="https://react-restaurant-git-master-ahmedgohary.vercel.app/"
              className="btn btn-primary"
            >
              Link to project
            </a>
          </div>
        </div>

        <div className="card proj-card pc02" data-aos='flip-down' data-aos-duration="3000" data-aos-easing="ease-out">
          <img
            className="card-img-top card-image"
            src="./images/shahd01.png"
            alt="website screenpshot"
          />
          <div className="card-body">
            <h5 className="card-title">
              Web app for online shopping. [MySQL DB. PHP. local storage.
              Paypal.]
            </h5>
            <p className="card-text">
              Project of website for online shopping. Connected to MySQL
              Database. Stores Cart data in local storage. Added Paypal
              Payment method. Made with [PHP, HTML, JavaScript, CSS, MySQL,
              jQuery].
            </p>
            <a
              href="http://shahdresturant.epizy.com/"
              className="btn btn-primary"
            >
              Link to project
            </a>
          </div>
        </div>

        <div className="card proj-card pc03" data-aos='fade-up' data-aos-duration="3000" data-aos-easing="ease-out">
          <img
            className="card-img-top card-image"
            src="./images/menusvercel.jpg"
            alt="website screenpshot"
          />
          <div className="card-body">
            <h5 className="card-title">Menus web app with (REACT)</h5>
            <p className="card-text">
              Project of web app for Menus made with REACT.JS framework ,
              Bootstrap & SASS.
            </p>
            <a
              href="https://menusapp-ahmedgohary.vercel.app"
              className="btn btn-primary"
            >
              Link to project
            </a>
          </div>
        </div>

        

        

        <div className="card proj-card pc04" data-aos='fade-up' data-aos-duration="3000" data-aos-easing="ease-out">
          <img
            className="card-img-top card-image"
            src="./images/reviewsThump.png"
            alt="website screenpshot"
          />
          <div className="card-body">
            <h5 className="card-title">
              Customer reviews web app, connected to MySQL Database. And
              Backend API.
            </h5>
            <p className="card-text">
              Project of website for Customer reviews made with with [PHP,
              HTML, SASS, JavaScript, CSS, MySQL, jQuery].
            </p>
            <a href="http://review-app.epizy.com/" className="btn btn-primary">
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
              <a href="/review-app" className="btn btn-primary">
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


