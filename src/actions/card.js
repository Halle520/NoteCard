export const SAVE = 'SAVE';
export const saveCardAction = (itemId) => {
  return {type: SAVE, itemId: itemId};
};
