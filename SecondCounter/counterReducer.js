const counterReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + state.step };
      case 'DECREMENT':
        return { ...state, count: state.count - state.step };
      case 'SET_STEP':
        return { ...state, step: action.payload };
      default:
        return state;
    }
  };
  
  export default counterReducer;
  