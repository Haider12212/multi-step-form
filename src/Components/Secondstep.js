import React, { useState } from "react";
import "./Secondstep.css";

const Secondstep = ({ handleNextClick, handlePrevClick, setSelectedPackage }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const handleSwitchToggle = () => {
    setIsYearlyBilling(!isYearlyBilling);
  };

  const getCardClassName = (index) => {
    if (selectedCard === index) {
      return "selectable-grid-item selected";
    } else {
      return "selectable-grid-item";
    }
  };
  const getSubtitleText = (index) => {
    if (isYearlyBilling) {
      return "$" + ((index + 1) * 30 + 60) + "/yr";
    } else {
      return "$" + ((index + 1) * 3 + 6) + "/mo";
    }
  };

  const handleNextStep = () => {
    let selectedPackage;
    let packageName;
    let packageType;
  
    if (selectedCard !== null) {
      if (isYearlyBilling) {
        selectedPackage = (selectedCard + 1) * 30 + 60;
        packageType = "Yearly";
      } else {
        selectedPackage = (selectedCard + 1) * 3 + 6;
        packageType = "Monthly";
      }
  
      switch (selectedCard) {
        case 0:
          packageName = "Arcade";
          break;
        case 1:
          packageName = "Advanced";
          break;
        case 2:
          packageName = "Pro";
          break;
        default:
          packageName = "";
      }
    } else {
      selectedPackage = null;
      packageName = "";
      packageType = "";
    }
  
    sessionStorage.setItem(
      "selectedPackage",
      JSON.stringify({ price: selectedPackage, name: packageName, type: packageType })
    );
    setSelectedPackage(selectedPackage);
    handleNextClick();
  };
  
  


  return (
    <div className="container">
      <div className="card-second">
        <div className="card-body">
          <h1 className="card-title">Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
          <div className="selectable-grid">
            <div
              className={getCardClassName(0)}
              onClick={() => handleCardClick(0)}
            >
              <img
                src={require("./images/icon-arcade.svg").default}
                alt="arcade icon"
                className="img-fluid-second"
              />
              <span className="selectable-grid-item-title">Arcade</span>
              <span className="selectable-grid-item-subtitle">
                {getSubtitleText(0)}
                {isYearlyBilling && <span className="yearlySub"> 2 months free</span>}
              </span>
            </div>
            <div
              className={getCardClassName(1)}
              onClick={() => handleCardClick(1)}
            >
              <img
                src={require("./images/icon-advanced.svg").default}
                alt="advanced icon"
                className="img-fluid-second"
              />
              <span className="selectable-grid-item-title">Advanced</span>
              <span className="selectable-grid-item-subtitle">
                {getSubtitleText(1)}
                {isYearlyBilling && <span className="yearlySub"> 2 months free</span>}
              </span>
            </div>
            <div
              className={getCardClassName(2)}
              onClick={() => handleCardClick(2)}
            >
              <img
                src={require("./images/icon-pro.svg").default}
                alt="pro icon"
                className="img-fluid-second"
              />
              <span className="selectable-grid-item-title">Pro</span>
              <span className="selectable-grid-item-subtitle">
                {getSubtitleText(2)}
                {isYearlyBilling && <span className="yearlySub"> 2 months free</span>}
              </span>
            </div>
          </div>

          <div className="switch-strip">
            <span className="switch-strip-item">Monthly</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={isYearlyBilling}
                onChange={handleSwitchToggle}
              />
              <span className="slider round"></span>
            </label>
            <span className="switch-strip-item">Yearly</span>
          </div>
          <div className="button-strip">
            <button className="secondary-button" onClick={handlePrevClick}>
              Go Back
            </button>
            <button className="primary-button" onClick={handleNextStep}>
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondstep;