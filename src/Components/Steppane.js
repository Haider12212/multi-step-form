import React from 'react';
import './Steppane.css';

const CircleSelection = ({ selectedCircle }) => {
  return (
    <div className='container'>
      <div className="circle-container">
        <div className={`circle ${selectedCircle === 1 ? 'selected' : ''}`}>
            
          <span className="circle-label" >1</span>
          <div className="steplabelwrapper">
            <span className="step-label">Step 1</span>
            <span className="steplabel1">YOUR INFO</span>
          </div>
        </div>
        <div className={`circle ${selectedCircle === 2 ? 'selected' : ''}`}>
          <span className="circle-label">2</span>
          <div className="steplabelwrapper">
            <span className="step-label">Step 2</span>
            <span className="steplabel1">SELECT PLAN</span>
          </div>
        </div>
        <div className={`circle ${selectedCircle === 3 ? 'selected' : ''}`}>
          <span className="circle-label">3</span>
          <div className="steplabelwrapper">
            <span className="step-label">Step 3</span>
            <span className="steplabel1">ADD-ONS</span>
          </div>
        </div>
        <div className={`circle ${selectedCircle === 4 ? 'selected' : ''}`}>
          <span className="circle-label">4</span>
          <div className="steplabelwrapper">
            <span className="step-label">Step 4</span>
            <span className="steplabel1" id='summary'>SUMMARY</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleSelection;
