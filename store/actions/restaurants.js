export const SET_RESTAURANTS = "SET_RESTAURANTS";

export const fetchRestaurants = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://hatch-5ae58.firebaseio.com/restaurants.json"
    );
    const resData = await response.json();
    const loadedRestaurants = [];
    for (const key in resData) {
      loadedRestaurants.push({
        key: key,
        name: resData[key].name,
        distance: resData[key].distance,
        rating: resData[key].rating,
        image: resData[key].image,
      });
    }
    dispatch({ type: SET_RESTAURANTS, restaurants: loadedRestaurants });
  };
};
