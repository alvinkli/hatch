import { SET_RESTAURANTS } from "../actions/restaurants";

const initialState = {
  restaurantsData: [],
  filteredRestaurants: [],
};

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return {
        restaurantsData: action.restaurants,
        filteredRestaurants: [],
      };
    default:
      return state;
  }
};

export default restaurantsReducer;
