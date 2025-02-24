
import { initializeTimes, updateTimes } from './pages/Bookings'; // Ensure the path is correct


// 
// Mock fetchAPI function to return predefined times
jest.mock('./api', () => ({
  fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00']) // Mocked return value
}));


describe('initializeTimes', () => {
  it('should return the correct initial available times', () => {
    // Call initializeTimes and check the result
    const result = initializeTimes();
    expect(result).toEqual(['17:00', '18:00', '19:00']);
  });
});

describe('updateTimes', () => {
  it('should update the available times when action type is "UPDATE_TIMES"', () => {
    const initialState = ['17:00', '18:00'];
    const action = { type: 'UPDATE_TIMES', payload: ['19:00', '20:00'] };

    const result = updateTimes(initialState, action);
    expect(result).toEqual(['19:00', '20:00']);
  });

  it('should remove a time when action type is "REMOVE_TIME"', () => {
    const initialState = ['17:00', '18:00', '19:00'];
    const action = { type: 'REMOVE_TIME', payload: '18:00' };

    const result = updateTimes(initialState, action);
    expect(result).toEqual(['17:00', '19:00']);
  });

  it('should return the current state for unknown action types', () => {
    const initialState = ['17:00', '18:00'];
    const action = { type: 'UNKNOWN_ACTION' };

    const result = updateTimes(initialState, action);
    expect(result).toEqual(['17:00', '18:00']);
  });
});