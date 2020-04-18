import {CARDS} from "../models/fakeData";

const initialState ={
    allCard: CARDS,
    cardSaved: CARDS.filter(card => card.isSaved === true)
}

export default (state = initialState, action) =>{
    switch(action.type){

        default:
            return state
    }
}
