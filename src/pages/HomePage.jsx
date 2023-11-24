// pages/HomePage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./compCSS.css";
import "./HomePage.css";

function HomePage() {
  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);
  const [formData, setFormData] = useState({
    mainHeading: "",
    totalPlay: "",
    oldBalance: "",
    selectedOption: "",
    ankValue: "",
    spValue: "",
    dpValue: "",
    jodiValue: "",
    totalPlaySelect: "",
    oldBalanceSelect: "",
    advanceMoneySelect: "",
    ankValueSelect: "",
    jodiValueSelect: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate("/result", { state: { formData } });
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/result", { state: { formData } });
  };
  const handleReset = () => {
    localStorage.removeItem("formData");

    setFormData({
      mainHeading: "",
      totalPlay: "",
      oldBalance: "",
      selectedOption: "",
      ankValue: "",
      spValue: "",
      dpValue: "",
      jodiValue: "",
      totalPlaySelect: "",
      selectedDate: "",
      oldBalanceSelect: "",
      advanceMoneySelect: "",
      ankValueSelect: "",
      jodiValueSelect: "",
    });
  };

  return (
    <div className='mainForm'>
      <h1>Generate Slip</h1>
      <button type='button' onClick={handleReset}>
        Reset
      </button>
      <form onSubmit={handleSubmit}>
        <label>
          Company:
          <input
            type='text'
            name='mainHeading'
            value={formData.mainHeading}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Select a Date:
          <input
            type='date'
            name='selectedDate'
            value={formData.selectedDate}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Total Play:
          <input
            type='number'
            name='totalPlay'
            value={formData.totalPlay}
            onChange={handleChange}
          />
          <select
            name='totalPlaySelect'
            value={formData.totalPlaySelect}
            onChange={handleChange}
          >
            <option value=''>Select an option</option>
            <option value='0'>0%</option>
            <option value='5'>5%</option>
            <option value='10'>10% </option>
          </select>
        </label>
        <br />
        <label>
          Old Balance:
          <input
            type='number'
            name='oldBalance'
            value={formData.oldBalance}
            onChange={handleChange}
          />
          <select
            name='oldBalanceSelect'
            value={formData.oldBalanceSelect}
            onChange={handleChange}
          >
            <option value=''>Select an option</option>
            <option value='1'>Balance Plus</option>
            <option value='0'>Balance Minus</option>
          </select>
        </label>
        <br />
        <br />

        <label>
          Advance Money:
          <input
            type='number'
            name='advanceMoney'
            value={formData.advanceMoney}
            onChange={handleChange}
          />
          <select
            name='advanceMoneySelect'
            value={formData.advanceMoneySelect}
            onChange={handleChange}
          >
            <option value=''>Select an option</option>
            <option value='1'>Advance Plus</option>
            <option value='0'> Advance Minus</option>
          </select>
        </label>

        <br />
        <hr />
        <br />
        <label>
          Ank:
          <input
            type='number'
            name='ankValue'
            value={formData.ankValue}
            onChange={handleChange}
          />
          <select
            name='ankValueSelect'
            value={formData.ankValueSelect}
            onChange={handleChange}
          >
            <option value=''>Select an option</option>
            <option value='9'>9%</option>
            <option value='9.5'>9.5%</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          SP:
          <input
            type='number'
            name='spValue'
            value={formData.spValue}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          DP:
          <input
            type='number'
            name='dpValue'
            value={formData.dpValue}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Jodi:
          <input
            type='number'
            name='jodiValue'
            value={formData.jodiValue}
            onChange={handleChange}
          />
          <select
            name='jodiValueSelect'
            value={formData.jodiValueSelect}
            onChange={handleChange}
          >
            <option value=''>Select an option</option>
            <option value='90'>90</option>
            <option value='95'>95</option>
          </select>
        </label>
        <br />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
