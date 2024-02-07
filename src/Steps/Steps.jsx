/* eslint-disable react/prop-types */
import "./index.css";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Steps() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button className="close" onClick={() => setIsOpen((s) => !s)}>
        &times;
      </button>
      {isOpen && <Card />}
    </>
  );
}

function Card() {
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <StepMessage step={step}>{messages[step - 1]}</StepMessage>
      <div className="buttons">
        <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
          <span>👈</span> Previous
        </Button>
        <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
          Next <span>👉</span>
          <span>🤓</span>
        </Button>
        next
      </div>
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Steps;
