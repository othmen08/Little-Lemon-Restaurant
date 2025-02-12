import { timesReducer } from "./components/Main";


describe('initializeTimes',()=>{
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  test('should return the initial state when no action is provided', () => {
    const state = timesReducer(initialState, {}); // No action passed
    expect(state).toEqual(initialState);
  });

 }

)

describe('updateTimes ',()=>{
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  
  test('should handle REMOVE_TIME action',()=>{
    const action = {type : 'REMOVE_TIME', payload:'19:00'};
    const state = timesReducer(initialState,action);
    expect(state).toEqual(["17:00", "18:00", "20:00", "21:00", "22:00"])
  }

  )
}

)