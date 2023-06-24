import React, { useState } from 'react';
import CircleSelection from './Steppane';
import './Maincard.css';
import Firststep from './Firststep';
import Secondstep from './Secondstep';
import Thirdstep from './Thirdstep';
import Summary from './Summary';
import Finalpage from './Finalpage';

const Maincard = () => {
  const [selectedCircle, setSelectedCircle] = useState(1);
  const [formData, setFormData] = useState({});
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null); // Initialize selectedPackage as null

  const handleNextClick = (data) => {
    setSelectedCircle(selectedCircle + 1);
    setFormData({ ...formData, ...data });
  };

  const handlePrevClick = () => {
    setSelectedCircle(selectedCircle - 1);
  };

  const handleServiceSelection = (selected) => {
    setSelectedServices(selected);
  };

  const renderStep = () => {
    switch (selectedCircle) {
      case 1:
        return <Firststep handleNextClick={handleNextClick} formData={formData}  />;
      case 2:
        return (
          <Secondstep
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
            setSelectedPackage={setSelectedPackage}
          />
        );
      case 3:
        return (
          <Thirdstep
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
            setSelectedServices={setSelectedServices}
            handleServiceSelection={handleServiceSelection}
          />
        );
      case 4:
        return (
          <Summary
            selectedPackage={selectedPackage}
            selectedServices={selectedServices}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        );
        case 5:
          return (
            <Finalpage/>
          );
      default:
        return null;
    }
  };

  return (
    <div className="mainCard">
      <div className="mainCard-grid">
        <div className="mainCard-grid-item">
          <CircleSelection selectedCircle={selectedCircle} />
        </div>
        <div className="mainCard-grid-item">{renderStep()}</div>
      </div>
    </div>
  );
};

export default Maincard;
