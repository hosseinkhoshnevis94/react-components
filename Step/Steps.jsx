import './steps.css'
import StepHeader from './StepHeader';
import StepMessage from './StepMessage';
import Button from './components/Button';
import StepButtons from './StepButtons';
import { useState } from 'react';

export default function Steps({messages}) {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);
  
    function handlePrevious() {
      if (step > 1) setStep((s) => s - 1);
    }
  
    function handleNext(c) {
      if (step < messages.length) {
        setStep((s) => s + 1);
      }
    }
  
    return (
      <div>
        <button className="close" onClick={() => setIsOpen((is) => !is)}>
          &times;
        </button>
  
        {isOpen && (
          <div className="steps">
           
           <StepHeader messages={messages} step={step}/>
            <StepMessage step={step}>
              {messages[step - 1]}
              <div className="buttons">
                <Button
                  bgColor="#e7e7e7"
                  textColor="#333"
                  onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
                >
                  Learn how
                </Button>
              </div>
            </StepMessage>
  
            <div className="buttons">
            <StepButtons step={step} messages={messages} onNext={handleNext} onPrevious={handlePrevious} />
            </div>
          </div>
        )}
      </div>
    );
  }