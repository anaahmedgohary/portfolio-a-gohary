import React from 'react'
import "./style/style.css"

function Header()
{
    return (
      <>
        <header class="mheader">
          <h1>Ahmed Gohary</h1>

          <div class="personal-image">
            <img class="profile-img" src="./images/000.jpg" alt="" />
          </div>

          <div class="und-pic">
            <div class="hi-myname">
              <img src="./images/Hi-my-name-is-Ahmed-8-10-20225.png" alt="" />
            </div>
            
            <div class="contact-container">
              <h3>Contact Information</h3>
              <p class="row">Email: gogoahmed13@gmail.com</p>
              <p class="row">phone: +201155267277</p>
              <p class="row">Address: Cairo, Egypt</p>
              <p class="row">github.com/anaahmedgohary</p>
            </div>
          </div>
        </header>
      </>
    );
}

export default Header