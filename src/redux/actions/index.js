import { GiphyFetch } from "@giphy/js-fetch-api";
export const GET_GIF = "GET_GIF";
export const GET_TRENDING_GIF = "GET_TRENDING_GIF";
export const CLEAN_SEARCH = "CLEAN_SEARCH";

const gf = new GiphyFetch(process.env.REACT_APP_API_KEY);

export function startGetGif(num) {
  let amount;
  if (num) {
    amount = num;
  } else {
    amount = 15;
  }
  return function (dispatch) {
    return gf.trending({ limit: amount }).then((data) => {
      dispatch({
        type: GET_GIF,
        payload: data,
      });
    });
  };
}

export function GetSearchGifs(name, num) {
  let amount;
  if (num) {
    amount = num;
  } else {
    amount = 15;
  }
  return function (dispatch) {
    return gf.search(name, { limit: amount }).then((data) => {
      dispatch({
        type: GET_TRENDING_GIF,
        payload: data,
      });
    });
  };
}

export function CleanSearch() {
  return {
    type: CLEAN_SEARCH,
  };
}
