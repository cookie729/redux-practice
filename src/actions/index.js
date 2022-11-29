export const increment = (number) => {
  return {
    type: 'INCREMENT',
    // data
    payload: number,
  };
};
export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};
export const login = () => {
  return {
    type: 'LOGIN',
  };
};
