import React from "react";
import "./navbar.css";
import QuestionMarkIcon from "../../assests/questionMark.svg";
import SearchIcon from "../../assests/searchIcon.svg"
export const Navbar = () => {
  return (
    <div className="nav-container common-flex jst-sp-bet">
      <div className="nav-sub-container-one">
        <h5 className="nav-heading mr-zero">Payments</h5>
        <div className=" common-flex gp-xxxs a-center">
          <img src={QuestionMarkIcon} />
          <p className="fs-xxs mr-zero ft-wt-xs ">How it works</p>
        </div>
      </div>

      <div class="input-container">
        <img src={SearchIcon} className="icon"/>
        <input type="text" placeholder="Search features, tutorials, etc."  className="nav-input "/>
      </div>

      <div className="common-flex a-center gap-xs">
        <p>1</p>
        <p>2</p>
      </div>
    </div>
  );
};
