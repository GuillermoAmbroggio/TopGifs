import {
  GET_GIF,
  GET_TRENDING_GIF,
  CLEAN_SEARCH
   } from '../actions/index';

const initialState = {
    all_gifs: {},
    searching_gifs: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_GIF:
        return {
          ...state,
          all_gifs: action.payload
        }
      case GET_TRENDING_GIF:
        return {
          ...state,
          searching_gifs: action.payload
        };   
      case CLEAN_SEARCH:
        return {
          ...state,
          searching_gifs: {}
        };  
      default: return state;
    }
}
  
export default reducer;