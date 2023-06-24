import React, { useState } from "react";
import "./Thirdstep.css";

const Thirdstep = ({
  handleNextClick,
  handlePrevClick,
  setSelectedServices,
}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const getGridItemClassName = (index) => {
    return selectedItems.includes(index)
      ? "selectable-grid-addons-items selected"
      : "selectable-grid-addons-items";
  };

  const getImgFluidClassName = (index) => {
    return selectedItems.includes(index) ? "img-fluid selected" : "img-fluid";
  };

  const getServiceName = (index) => {
    switch (index) {
      case 0:
        return "Online service";
      case 1:
        return "Larger Storage";
      case 2:
        return "Customizable Profile";
      default:
        return "";
    }
  };

  const getServicePrice = (index) => {
    return "1.99";
  };

  const handleNextStep = () => {
    const selectedServices = selectedItems.map((index) => ({
      name: getServiceName(index),
      price: getServicePrice(index),
    }));
    sessionStorage.setItem("selectedServices", JSON.stringify(selectedServices));
    setSelectedServices(selectedServices);
    handleNextClick();
  };

  return (
    <div className="container">
      <div className="card-third">
        <div className="card-body">
          <h1 className="card-title">Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
          <div className="selectable-grid-addons">
            <div
              className={getGridItemClassName(0)}
              onClick={() => handleItemClick(0)}
            >
              <img
                src={require("./images/icon-checkmark.svg").default}
                alt="checkmark icon"
                className={getImgFluidClassName(0)}
              />
              <div className="selectable-grid-addons-items-text">
                <span className="selectable-grid-item-title">Online service</span>
                <span className="selectable-grid-item-subtitle">
                  Access to multiplayer games
                </span>
              </div>
              <span className="selectable-grid-item-price">+$1.99/mo</span>
            </div>

            <div
              className={getGridItemClassName(1)}
              onClick={() => handleItemClick(1)}
            >
              <img
                src={require("./images/icon-checkmark.svg").default}
                alt="checkmark icon"
                className={getImgFluidClassName(1)}
              />
              <div className="selectable-grid-addons-items-text">
                <span className="selectable-grid-item-title">Larger Storage</span>
                <span className="selectable-grid-item-subtitle">
                  Extra 1TB of cloud save
                </span>
              </div>
              <span className="selectable-grid-item-price">+$1.99/mo</span>
            </div>

            <div
              className={getGridItemClassName(2)}
              onClick={() => handleItemClick(2)}
            >
              <img
                src={require("./images/icon-checkmark.svg").default}
                alt="checkmark icon"
                className={getImgFluidClassName(2)}
              />
              <div className="selectable-grid-addons-items-text">
                <span className="selectable-grid  -item-title">Customizable Profile</span>
                <span className="selectable-grid-item-subtitle">Custom theme on your profile</span>
              </div>
              <span className="selectable-grid-item-price">+$1.99/mo</span>
            </div>
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

export default Thirdstep;

