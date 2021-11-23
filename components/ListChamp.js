import React, { useEffect, useReducer } from "react";
import { URL_GET_ALL_CHAMP } from "../constants";
import ListChampItem from "./ListChampItem";
import * as actions from "../actions";
import "regenerator-runtime/runtime";
import LoadingScreen from "./LoadingScreen";
import { useChampionContext } from "../common/ChampionContext";
import { getChampRequest } from "../apis/champApis";
import { hideLoading } from './../actions/index';

function ListChamp() {
  const { state, dispatch } = useChampionContext();

  const delay = (time = 1500) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const fetchChampions = async () => {
    try {
      const res = await getChampRequest();
      if (res) {
        dispatch(actions.showLoading());
        dispatch(actions.fetchAllChampSuccess(res.data));
        dispatch(actions.hideLoading());
      }
    } catch (error) {
      dispatch(action.showLoading());
      dispatch(actions.fetchAllChampFailed());
      dispatch(actions.hideLoading());
    }
  };

  useEffect(() => {
    fetchChampions();
  }, []);

  const renderListChampionItem = () => {
    let xhtml = null;

    if (state.showLoading) {
      return <LoadingScreen myFlag={true}/>;
    }
    if (!state.listChamp.length){
      return <LoadingScreen myFlag={false}/>
    }
    if (state.listChamp.length) {
      xhtml = state.listChamp.map((champ) => {
        return <ListChampItem champion={champ} />;
      });
    }

    return xhtml;
  };

  return <div className="list-champion row">{renderListChampionItem()}</div>;
}

export default ListChamp;
