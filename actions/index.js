import AxiosService from "../common/AxiosService";
import * as actionTypes from "../constants";

export const fetchAllChampSuccess = (data) => {
  return { type: actionTypes.FETCH_ALL_CHAMP_SUCCESS, payLoad: { data } };
};

export const fetchAllChampFailed = () => {
  return { type: actionTypes.FETCH_ALL_CHAMP_FAILED };
};

export const findChamp = (pattern, data) => {
  return { type: actionTypes.FIND_CHAMP, payLoad: { pattern, data } };
};

export const showLoading = () => {
  return { type: actionTypes.SHOW_LOADING };
};

export const hideLoading = () => {
  return { type: actionTypes.HIDE_LOADING };
};
