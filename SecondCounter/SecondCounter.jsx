import { useReducer } from "react";
import Button from "../Counter/Button";
import counterReducer from './counterReducer'

const SecondCounter = ({ initialCount = 0, initialStep = 1 }) => {
  const initialState = {
    count: initialCount,
    step: initialStep
  };

  const [state, dispatch] = useReducer(counterReducer, initialState);

  const date = new Date();
  date.setDate(date.getDate() + state.count);

  const handleStepChange = (e) => {
    dispatch({ type: 'SET_STEP', payload: Number(e.target.value) });
  };

  return (
    <div>
      <p>
        <span>
          {state.count === 0
            ? "Today is "
            : state.count > 0
            ? `${state.count} days from today is `
            : `${Math.abs(state.count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      <div>
        <input
          type="range"
          min="0"
          max="20"
          value={state.step}
          onChange={handleStepChange}
        />
        
      </div>

      <div>
        <Button onClick={() => dispatch({ type: 'DECREMENT' })}>-</Button>
        <span>Step: {state.step}</span>
        <Button onClick={() => dispatch({ type: 'INCREMENT' })}>+</Button>
      </div>

      <div>
        <Button onClick={() => dispatch({ type: 'DECREMENT' })}>-</Button>
        <span>Count: {state.count}</span>
        <Button onClick={() => dispatch({ type: 'INCREMENT' })}>+</Button>
      </div>
    </div>
  );
};

export default SecondCounter;
