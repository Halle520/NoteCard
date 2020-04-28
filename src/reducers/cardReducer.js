import {SAVE, SET_LIST} from '../actions/card';
const initialState = {
  cardList: [],
  cardSaved: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      action.list.forEach((element) => {
        state.cardList.push(element);
      });
      return state;
    case SAVE:
      const card = state.cardList.find((item) => item.id == action.itemId);
      card.isSaved = !card.isSaved;
      return state;

    default:
      return state;
  }
};
