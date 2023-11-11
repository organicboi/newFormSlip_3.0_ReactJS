// pages/ResultPage.jsx

import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./compCSS.css";

function ResultPage() {
  const location = useLocation();
  const formData = location.state.formData;
  // console.log(formData);

  const [mainHeading, setMainHeading] = useState("Group Name");
  const [currentDate, setCurrentDate] = useState("Group Name");

  //   From start
  const [totalPlayValue, setTotalPlayValue] = useState(0);
  const [oldValue, setOldValue] = useState(0);
  let [totalPlaySelect, setTotalPlaySelectt] = useState("");
  let [oldBalanceSelect, setOldBalanceSelect] = useState("");
  let [advanceMoneySelect, setAdvanceMoneySelect] = useState("");
  // let []
  let [advanceMoney, setadvanceMoney] = useState("");
  //Form ends
  // section_2 starts
  const [ankValue, setAnkValue] = useState(0);
  const [spValue, setspValue] = useState(0);
  const [dpValue, setdpValue] = useState(0);
  const [jodiValue, setjodiValue] = useState(0);
  // retriveing data from form
  // retriveing data from form
  // retriveing data from form
  const selectedDate = new Date(formData.selectedDate).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    }
  );
  const dayOfWeek = new Date(formData.selectedDate).toLocaleDateString(
    "en-GB",
    { weekday: "long" }
  );

  console.log(formData);

  useEffect(() => {
    if (formData) {
      // Parsing to integer using parseInt
      setTotalPlayValue(parseInt(formData.totalPlay, 10));
      setMainHeading(formData.mainHeading);
      setadvanceMoney(formData.advanceMoney);

      setCurrentDate(selectedDate);
      setTotalPlaySelectt(formData.totalPlaySelect);
      // Assuming formData.oldValue is a string; you can parse it if needed
      setOldValue(parseInt(formData.oldBalance));
      setAnkValue(parseInt(formData.ankValue));
      setspValue(parseInt(formData.spValue));
      setdpValue(parseInt(formData.dpValue));
      setjodiValue(parseInt(formData.jodiValue));
      setOldBalanceSelect(formData.oldBalanceSelect);
      setAdvanceMoneySelect(formData.advanceMoneySelect);

      console.log(formData.oldBalanceSelect);
    }
  }, [formData]);

  // retriveing data from form
  // retriveing data from form
  // retriveing data from form

  // the logic 1
  const ankTotal = ankValue * 9;
  const spTotal = spValue * 150;
  const dpTotal = dpValue * 300;
  const jodiTotal = jodiValue * 90;
  // the logic 2
  const grandTotalWining = ankTotal + spTotal + dpTotal + jodiTotal;
  // section_ ends
  // section_1 starts
  // const totalPlayPercent = Math.floor(totalPlayValue / 10) * 1;
  let totalPlayPercent = 0;
  totalPlayPercent = Math.floor(totalPlayValue * (totalPlaySelect / 100));

  // switch (totalPlaySelect) {
  //   case "0":
  //     totalPlayPercent = Math.floor(totalPlayValue);
  //     console.log("5%done");

  //     break;
  //   case "5":
  //     console.log("5%done");

  //     break;
  //   case "10":
  //     totalPlayPercent = Math.floor(totalPlayValue / 10) * 1;
  //     console.log("10%done");

  //     break;
  //   default:
  // }
  const balance = totalPlayValue - totalPlayPercent;
  let bal_win = 0;
  if (balance > grandTotalWining) {
    bal_win = balance - grandTotalWining;
  } else {
    bal_win = grandTotalWining - balance;
  }
  let TotalCalc = 0;

  switch (oldBalanceSelect) {
    case "0":
      TotalCalc = parseFloat(bal_win) + parseFloat(oldValue);
      console.log("It was minus selected and plus done");

      break;
    case "1":
      TotalCalc = parseFloat(bal_win) - parseFloat(oldValue);
      console.log("It was plus selected and minus done");

      break;
    default:

    // Handle invalid operator
  }
  let afterAdvanceTotal = 0;
  switch (advanceMoneySelect) {
    case "0":
      afterAdvanceTotal = parseFloat(TotalCalc) + parseFloat(advanceMoney);
      console.log("It was minus selected and plus done");

      break;
    case "1":
      afterAdvanceTotal = parseFloat(TotalCalc) - parseFloat(advanceMoney);
      console.log("It was plus selected and minus done");

      break;
    default:

    // Handle invalid operator
  }
  // section_1 ends

  ////new code here
  ////new code here
  ////new code here

  // console.log(T);

  useEffect(() => {
    if (formData && formData.totalPlay !== undefined) {
      // Parsing to integer using parseInt
      setTotalPlayValue(parseInt(formData.totalPlay, 10));
    }
  }, [formData]);

  ////new code here
  ////new code here
  ////new code here

  return (
    <div className="main_container">
      <div className="date">
        <h1>{mainHeading}</h1>
        <div className="dateAndDay">
          <h3>{currentDate}</h3>
          <h3>{dayOfWeek}</h3>
        </div>
      </div>
      <div className="divideFreeText">
        <div className="date freeText">
          <label htmlFor="">
            Total Play:-
            <b>{totalPlayValue}</b>
          </label>
          <label htmlFor="">
            Old Balance:-
            <b>{advanceMoney}</b>
          </label>
        </div>
        <div className="date freeText">
          <label htmlFor="">
            Advace Money:-
            <b>{oldValue}</b>
          </label>
          <label htmlFor="">
            Winning :-
            <b>{grandTotalWining}</b>
          </label>
        </div>
      </div>
      <div className="container">
        <div className="section_2 box">
          <label htmlFor="Ank">Ank :- </label>
          {/* <input type="number" onChange={(e) => setAnkValue(e.target.value)} /> */}
          <span>{ankValue}</span>
          <span> = {ankTotal}</span>

          <hr />
          <label htmlFor="SP">SP :- </label>
          {/* <input type="number" onChange={(e) => setspValue(e.target.value)} /> */}
          <span> {spValue}</span>
          <span> = {spTotal}</span>
          <hr />

          <label htmlFor="DP">DP :- </label>
          {/* <input type="number" onChange={(e) => setdpValue(e.target.value)} /> */}
          <span>{dpValue}</span>
          <span> = {dpTotal}</span>
          <hr />
          <label htmlFor="Jodi">Jodi :- </label>
          {/* <input type="number" onChange={(e) => setjodiValue(e.target.value)} /> */}
          <span>{jodiValue}</span>
          <span> = {jodiTotal}</span>
          <hr />
          <label htmlFor="GrandTotal">Total Wining </label>

          <h4 className="totalSpecialStyling ">{grandTotalWining}/-</h4>
        </div>
        <div className="section_1 box">
          <label htmlFor="totalPlay">Total Play = </label>
          <span>{totalPlayValue}</span>
          <label htmlFor="%value"> % </label>
          <span>{totalPlayPercent}</span>
          <hr />
          <label htmlFor="Balance">Balance = </label>
          <span>{balance}</span>
          <hr />
          <label htmlFor="wining">Wining = </label>
          <span>{grandTotalWining}</span>
          <hr />
          <label htmlFor="winTotal">bal-win = </label>
          <span>{bal_win}</span>
          <hr />
          <label htmlFor="oldBal">Old-Balance = </label>
          <span>{oldValue}</span>
          <hr />
          <label htmlFor="Total">Grand Total = </label>
          <h4 className="totalSpecialStyling">{TotalCalc}/-</h4>
          <hr />
          <label htmlFor="FinalReusltText">
            Result:-
            <select>
              <option value="none">None</option>
              <option value="1" className="postiveColor">
                मी देणे 🟢
              </option>
              <option value="0" className="negativeColor">
                तुम्ही देणे 🔴
              </option>
            </select>
          </label>
        </div>
      </div>
      <div className="date freeText">
        <label htmlFor="FinalReusltText">Suresh Bahi</label>
      </div>
    </div>
  );
}

export default ResultPage;
