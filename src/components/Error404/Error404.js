import React from "react";
import "./Error404.css";


const Error404 = (props) => (
  <>
   
     <div className="container">
        <h1>{props.children}</h1>
        <img src="" alt="" className="img-fluid" />
      </div>
      <div class="mainbox">
    <div class="err">4</div>
    <i class="far fa-question-circle fa-spin"></i>
    <div class="err2">4</div>
    <div class="msg">Maybe this page moved? Got deleted? 
    Is hiding out in quarantine? Never existed in the first place?
    <p>Let's go <a href="/">home</a> and try from there.</p></div>
      </div>
  </>
);

export default Error404;