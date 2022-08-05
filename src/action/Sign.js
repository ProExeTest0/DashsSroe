import {SIGN_UP} from './Type';
export const Listaction = data => {
  console.log('data::', sign);
  return dispatch => {
    dispatch({
      type: SIGN_UP,
      payload: sign,
    });
  };
};
