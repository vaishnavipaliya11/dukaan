import React from "react";
import "./overview.css";
import { overviewData } from "../../constant";
import LastMonthIcon from "../../assests/lastMonthIcon.svg";
export const Overview = () => {
  return (
    <div className="overview-container common-col a-start gap-xsm">
      <div className="overview-sub-container">
        <p className="fs-sm ft-wt-sm mr-zero fm-inter">Overview</p>
        <div className="last-month-btn">
          <p className="text-gray mr-zero ft-wt-xs fs-xss">
            Last Month <img src={LastMonthIcon} alt="down-arrow" width={16}  height={16}/>
          </p>
        </div>
      </div>
      <div className="overview-data-display-container gap-xxxs  fm-inter">
        {overviewData.map(({ label, data }) => {
          return (
            <div className="common-col gap-xxs overview-data-block">
              <p className="fs-xss ft-wt-xs mr-zero">{label}</p>
              <p className="fs-med ft-wt-sm mr-zero ">{data}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
