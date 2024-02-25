import { useState } from "react";
import Button from "./Button";


const Counter = ({ initialCount = 0, initialStep = 1 }) => {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(initialStep);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      <div>
        <input
          type="range"
          min="0"
          max="20"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        
      </div>

      <div>
        <Button onClick={() => setStep((c) => c - 1)}>-</Button>
        <span>Step: {step}</span>
        <Button onClick={() => setStep((c) => c + 1)}>+</Button>
      </div>

      <div>
        <Button onClick={() => setCount((c) => c - step)}>-</Button>
        <span>Count: {count}</span>
        <Button onClick={() => setCount((c) => c + step)}>+</Button>
      </div>
    </div>
  );
};

export default Counter;