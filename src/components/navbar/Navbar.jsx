import React from "react";
import "./navbar.css";
import QuestionMarkIcon from "../../assests/questionMark.svg";
import SearchIcon from "../../assests/searchIcon.svg";
import MessageIcon from "../../assests/messageIcon.svg";
import DownIcon from "../../assests/navbarDownIcon.svg";
export const Navbar = () => {
  return (
    <div className="nav-container common-flex jst-sp-bet">
      <div className="nav-sub-container-one">
        <h5 className="nav-heading mr-zero fm-inter">Payments</h5>
        <div className=" common-flex gp-xxxs a-center">
          <img src={QuestionMarkIcon} alt="questionmark" />
          <p className="fs-xxs mr-zero ft-wt-xs ">How it works</p>
        </div>
      </div>

      <div class="input-container gap-xxs">
        <img src={SearchIcon} className="icon" alt="search" />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="nav-input "
        />
      </div>

      <div className="common-flex a-center gap-xs">
        <img src={MessageIcon} width={40} height={40} alt="message" />
        <img src={DownIcon} width={40} height={40} alt="download"/>
      </div>
    </div>
  );
};
