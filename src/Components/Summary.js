import React, { useState } from "react";
import "./Summary.css";
import Decimal from "decimal.js";

const Summary = ({ handlePrevClick, handleNextClick }) => {
  const selectedPackage = JSON.parse(sessionStorage.getItem("selectedPackage"));
  const parsedPackage = selectedPackage ? parseFloat(selectedPackage.price) : null;
  const packageType = selectedPackage ? selectedPackage.type : "";
  const selectedServices = JSON.parse(sessionStorage.getItem("selectedServices"));
  const [totalCost, setTotalCost] = useState(calculateTotalCost());

  function calculateTotalCost() {
    let cost = new Decimal(parsedPackage || 0);
  
    if (selectedServices) {
      selectedServices.forEach((service) => {
        cost = cost.plus(new Decimal(service.price));
      });
    }
  
    return cost.toNumber();
  }

  return (
    <div className="container">
      <div className="card-fourth">
        <div className="card-body">
          <h1 className="card-title">Finishing Up</h1>
          <p>Double-check everything looks OK before confirming.</p>
          <div className="summary-section-main">
            <div className="summary-section">
              {parsedPackage && (
                <div className="selected-package">
                  <span className="package-Name">{selectedPackage.name} <span className="package-type">({packageType})</span></span>
                  <span className="package-price"> {selectedPackage.price} $</span>
                  
                </div>
              )}
            </div>
            <div className="summary-section-service">
              {selectedServices &&
                selectedServices.map((service) => (
                  <div key={service.id} className="selected-service">
                    <span className="service-name">{service.name}</span>
                    <span className="service-price"> {service.price} $</span>
                  </div>
                ))}
            </div>
          </div>
          <div className="summary-section-total">
            <span className="total-cost" >
                Total <span className="package-type">({packageType})</span>
            </span>
            {totalCost.toFixed(2)} $
          </div>
          <div className="button-strip">
            <button className="secondary-button" onClick={handlePrevClick}>
              Go Back
            </button>
            <button className="primary-button" onClick={handleNextClick}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
