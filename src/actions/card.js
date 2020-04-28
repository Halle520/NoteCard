export const SAVE = 'SAVE';
export const SET_LIST = 'SET_LIST';
export const saveCardAction = (itemId) => {
  return {type: SAVE, itemId: itemId};
};

export const setListCardAction = (list) => {
  return {type: SET_LIST, list: list};
};
