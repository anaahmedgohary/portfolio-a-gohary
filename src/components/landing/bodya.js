import React from 'react'
import "./style/style.css";

function Bodya() {
  return (
      <>
          <div className="sub-header">

              <div className="alll-cards container">
                  <div className="card skil-cart">
                      <img className="card-img-top sskills" src="./images/Skills2.png" alt="My Skills" />
                          <div className="card-body mcard-body">
                              <h5 className="card-title">My Skills</h5>
                              <p>
                                  HTML
                              </p>
                              <p>
                                  CSS
                              </p>
                              <p>
                                  SASS
                              </p>
                              <p>
                                  BootStrap
                              </p>
                              <p>
                                  Javascript
                              </p>
                              <p>
                                  REACT JS
                              </p>

                              <p>
                                  GIMP
                              </p>

                          </div>
                  </div>

                  <div className="card about-cart">
                      <img className="card-img-top about-img" src="./images/facerj.jpg" alt="profile" />
                          <div className="card-body">
                              <h3 className="card-title">About Me</h3>
                              <div className="about-content">
                                  <p>
                                      I'm 29 years old.
                                      I'm really passionate about coding & web development.
                                      I'm Egyptian, and I live in Cairo currently.
                                      I'm an active & quick learner.
                                      I'm a hardworking web developer.
                                  </p>
                              </div>


                          </div>
                  </div>
              </div>

          </div>
      </>
  )
}

export default Bodya;