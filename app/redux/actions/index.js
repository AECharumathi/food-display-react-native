import {getFoodList} from "../services/getData";

export const foodListAction = {
  PENDING: "FETCH_FOODLIST_PENDING",
  FULFILLED: "FETCH_FOODLIST_FULFILLED",
  REJECTED: "FETCH_FOODLIST_REJECTED",
};

export const fetchFoodList = () => (dispatch) => {
  
    dispatch({ type: foodListAction.PENDING });

  getFoodList()
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch({
        type: foodListAction.FULFILLED,
        payload: responseJson,
      })
    })
    .catch((error) => {
      dispatch({
        type: foodListAction.REJECTED,
        payload: error,
      })
    });

};
