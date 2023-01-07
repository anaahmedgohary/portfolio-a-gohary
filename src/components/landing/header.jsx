import React from 'react'
//import "./style/style.css"
import './style/headerstyle/headerstyle.css'

function Header()
{
    return (
      
        <header className="mheader">
         <div className='myName-job'>
           <h1 className='my-name-title'>Ahmed Gohary</h1>
           <h6 className='my-job-title'>Frontend Web Developer</h6>
         </div>

          {/* <div className="personal-image">
            <img className="profile-img" src="./images/000.jpg" alt="profile pic" />
          </div> */}

          <div className="und-pic">
            <div className="contact-container">
              <div>
                <h3>Welcome To My Portfolio</h3>
              </div>
            
              <div className='info-rows'>

                <div className="info-row">
                  <a className='header-con-link' href="#myProjAnchore">
                    <strong>Projects</strong>
                  </a>
              </div>
              
              <div className="info-row">
                <a className='header-con-link' href="#mySkillsA">
                  <strong>Skills</strong>
                </a>
              </div>
              
              <div className="info-row">
                <a className='header-con-link' href="#aboutMeA">
                  <strong>About me</strong>
                </a>
              </div>

              <div className="info-row">
                <a className='header-con-link' href="#contactMeA">
                  <strong>Contact</strong>
                </a>
              </div>



              </div>
            </div>
          </div>

          <div className='arrowdown-div'>
          <a href='#scrolledto' className='piecesDiv'>
              <span className='piece'></span>
              <span className='piece'></span>
              <span className='piece'></span>
            </a>

          </div>
        </header>
      
    );
}

export default Header