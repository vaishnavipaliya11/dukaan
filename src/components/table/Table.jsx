import React from "react";
import "./table.css";
import "../../style.css";
import "../../utility.css";
import { tableData } from "../../constant";
import PreviousIcon from "../../assests/previousIcon.svg";
import NextIcon from "../../assests/nextIcon.svg";
import DownloadIcon from "../../assests/downloadIcon.svg";
import SortIcon from "../../assests/sortIcon.svg";
export const Table = () => {
  return (
    <div className="gap-xxxs common-col mr-sm">
      <div>
        <p className="transaction-heading ft-wt-sm fs-sm ">
          Transactions | This Month
        </p>
      </div>
      <div className="table-container gap-xs common-col">
        <div className="common-flex a-center jst-sp-bet">
          <input
            className="table-input fs-xs"
            placeholder="Search by order ID..."
          />
          <div className="gap-xs common-flex a-center">
            <button className="fm-inter sort-btn">
              Sort <img src={SortIcon} alt="sort"/>
            </button>
            <button className="fm-inter sort-btn">
              <img src={DownloadIcon} alt="download"/>
            </button>
          </div>
        </div>
        <div className="">
          <table className="table-heading four-grid">
            <th className="order-heading">Order ID</th>
            <th className="order-heading">Order date</th>
            <th className="order-heading">Order amount</th>
            <th className="order-heading">Transaction fees</th>
          </table>

          <div className="table-data-container">
            {tableData.map(
              ({ orderId, orderDate, orderAmount, transactionFees }) => {
                return (
                  <table className="four-grid order-row">
                    <td className="order-id ft-wt-sm fs-xs fm-galano">
                      {orderId}
                    </td>
                    <td className="fs-xs ft-wt-xs fm-galano">{orderDate}</td>
                    <td className="fs-xs ft-wt-xs fm-galano">{orderAmount}</td>
                    <td className="fs-xs ft-wt-xs fm-galano">
                      {transactionFees}
                    </td>
                  </table>
                );
              }
            )}
          </div>

          <div className="table-footer common-flex a-center j-center">
            <button className="common-flex a-center white-bg mr-xxs ft-btn">
              <img src={PreviousIcon} alt="previous"/>
              Previous
            </button>

            <p className="fm-inter fs-xs">
              <span className="pd-xs mr-xxs fm-inter">1</span>
              <span className="pd-xs mr-xxs fm-inter">...</span>
              <span className="primary-btn pd-xs">10</span>
              <span className="pd-xs mr-xxs">11</span>
              <span className="pd-xs mr-xxs">12</span>
              <span className="pd-xs mr-xxs">13</span>
              <span className="pd-xs mr-xxs"> 14</span>
              <span className="pd-xs mr-xxs">15</span>
              <span className="pd-xs mr-xxs">16</span>
              <span className="pd-xs mr-xxs">17</span>
              <span className="pd-xs mr-xxs">18</span>
            </p>

            <button className="mr-xxs ft-btn common-flex a-center white-bg">
              Next
              <img src={NextIcon} alt="next"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
