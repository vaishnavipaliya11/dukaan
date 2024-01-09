import React from "react";
import "../../utility.css";
import "../../style.css";
import CreditIcon from "../../assests/creditIcon.svg";
import CompanyLogo from "../../assests/companyLogo.png";
import NavbarDownIcon from "../../assests/navbarDown.svg";
import "./sidebar.css";
import { sidebarData } from "../../constant";

export const Sidebar = () => {
  return (
    <div className="sidebar-container common-col jst-sp-bet">
      <div className="child-sidebar-container ">
        <div className="common-flex jst-sp-bet">
          <div className="common-flex gap-xs">
            <img src={CompanyLogo} alt="logo" height={39} width={39} />
            <div className="common-col a-start">
              <p className="text-white mr-zero ft-wt-sm fs-xss">Nishyan</p>
              <p className="text-white mr-zero fs-xs ft-wt-xs op-sm">
                Visit store
              </p>
            </div>
          </div>
          <img src={NavbarDownIcon} alt="arrow" />
        </div>

        <div className="options">
          {sidebarData.map(({ label, icon }) => {
            return (
              <div className="common-flex a-center">
                <img src={icon} alt={icon} />
                <p className="text-white icon-text fm-inter"> {label} </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="common-flex credits-bg">
        <img src={CreditIcon} alt="credit" />
        <div className="common-col a-start">
          <p className="fs-xs ft-wt-xs op-sm text-white mr-zero">
            Available Credits
          </p>
          <p className="ft-wt-sm text-white fs-xss mr-zero">220.10</p>
        </div>
      </div>
    </div>
  );
};
