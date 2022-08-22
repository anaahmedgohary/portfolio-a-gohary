import React from 'react';
import $ from "jquery";
import "./style/review-app.css";

function ReviewApp()
{


    
  ready();
    

    function ready(){
      let serviceName = $("#serviceName");
      let ratingOverall = $("#ratingOverall");
      let custServ = $("#custServ");
      let staffRate = $("#staffRate");
      let qualityRate = $("#qualityRate");
      let cleanRate = $("#cleanRate");
      let paragraphRev = $("#paragraphRev");

      $("#submit-rev-btn").click(() => {
        //alert("Are You Sure?")
        jqWay();
        serviceName.text($("#bNameInp").val());
        ratingOverall.text($("#ovRateInp").val());
        custServ.text($("#custServInp").val());
        staffRate.text($("#staffInp").val());
        qualityRate.text($("#qualityInp").val());
        cleanRate.text($("#cleanInp").val());
        paragraphRev.text($("#letterInp").val());

        $(".hidden").attr("id", "showNewRev");
      });

      function jqWay() {
        $(".rate-0-5").each(function () {
          if ($(this).val() > 5) {
            $(this).val(5);
          } else if ($(this).val() < 0) {
            $(this).val(0);
          } else if($(this).val() === "") {
            $(this).val(5);;
          }
        });
      };

      serviceName.text($("#bNameInp").val());
      ratingOverall.text($("#ovRateInp").val());
      custServ.text($("#custServInp").val());
      staffRate.text($("#staffInp").val());
      qualityRate.text($("#qualityInp").val());
      cleanRate.text($("#cleanInp").val());
      paragraphRev.text($("#letterInp").val());

    };
    
    


  return (
    <>
      <div>
        <nav className="main-nav">
          <span>
            <a href="index.html">Home</a>
          </span>
          <span>
            <a href="contact.html">Contact</a>
          </span>
          <span>
            <a href="popular.html">Popular</a>
          </span>
          <span>
            <a href="new.html">New</a>
          </span>
        </nav>
      </div>
      <div id="searchBarDiv">
        <input id="searchBarInp" type="search" placeholder="Search me!" />
        <div className="half-circle-left"></div>
        <div className="half-circle-right"></div>
      </div>

      <section>
        <div className="review-div">
          <h2>Add Your Review Now!</h2>
          <div>
            <span className="column-1">Name of Business</span>
            <input
              id="bNameInp"
              className="column-2"
              type="text"
              placeholder="Business/Service name"
            />
          </div>
          <div>
            <span className="column-1">First Impression</span>
            <input
              id="ovRateInp"
              className="column-2 rate-0-5"
              type="number"
              maxLength="1"
              max="5"
              minLength="1"
              min="0"
              step="0.5"
            />
          </div>
          <div>
            <span className="column-1">Customer Service</span>
            <input
              id="custServInp"
              className="column-2 rate-0-5"
              type="number"
              maxLength="1"
              max="5"
              minLength="1"
              min="0"
              step="0.5"
            />
          </div>
          <div>
            <span className="column-1">Staff Treatment</span>
            <input
              id="staffInp"
              className="column-2 rate-0-5"
              type="number"
              maxLength="1"
              max="5"
              minLength="1"
              min="0"
              step="0.5"
            />
          </div>
          <div>
            <span className="column-1">Quality Of Product</span>
            <input
              id="qualityInp"
              className="column-2 rate-0-5"
              type="number"
              maxLength="1"
              max="5"
              minLength="1"
              min="0"
              step="0.5"
            />
          </div>
          <div>
            <span className="column-1">Cleanliness Standard</span>
            <input
              id="cleanInp"
              className="column-2 rate-0-5"
              type="number"
              maxLength="1"
              max="5"
              minLength="1"
              min="0"
              step="0.5"
            />
          </div>
          <div>
            <span className="column-1">Short letter</span>
            <input
              id="letterInp"
              className="column-2"
              type="text"
              maxLength="200"
            />
          </div>
          <div>
            <input
              onClick={ready}
              id="submit-rev-btn"
              className="column-2"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="new-reviews hidden">
          <h4 id="serviceName">aaaaa</h4>
          <label className="new-label">First Impression</label>
          <span className="new-rates" id="ratingOverall">
            aaaaaa
          </span>
          <label className="new-label">Customer Service</label>
          <span className="new-rates" id="custServ">
            aaaaaaa
          </span>
          <label className="new-label">Staff</label>
          <span className="new-rates" id="staffRate">
            {" "}
            aaaaa
          </span>
          <label className="new-label">Quality</label>
          <span className="new-rates" id="qualityRate">
            aaaaaaaa
          </span>
          <label className="new-label">Cleanliness</label>
          <span className="new-rates" id="cleanRate">
            aaaaaaa
          </span>
          <label className="letter-label">Short letter</label>
          <p id="paragraphRev">aaaaaaaaa</p>
        </div>
      </section>
    </>
  );
}

export default ReviewApp;