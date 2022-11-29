// ログインしてるかどうか
const isLoginReducer = (state = false, action) => {
  switch (action.type) {
    // ログインだったら今の状態を反転させる
    // ログインしていたら、ログインさせなくする
    // ログインしてなかったらログインする
    case 'LOGIN':
      return !state;
    default:
      return state;
  }
};

export default isLoginReducer;