import React, { useEffect, useReducer } from "react";
import AxiosService from "../common/AxiosService";
import { URL_GET_ALL_CHAMP } from "../constants";
import ListChampItem from "./ListChampItem";
import * as actions from "../actions";
import { initState, reducer } from './../reducers/index';
import 'regenerator-runtime/runtime'

function ListChamp() {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    const getAllChampRequest = async () => {
      try {
        const response = await AxiosService.get(URL_GET_ALL_CHAMP);
        dispatch(actions.getAllChampSuccess(response.data));
      } catch (error) {
        dispatch(actions.getAllChampFailed);
      }
    };
    getAllChampRequest();
  }, []);
  
  const renderListChampionItem = () => {
    let xhtml = [];
    xhtml = state.listChamp.map((champ) => {
      return <ListChampItem champion={champ}/>;
    });
    return xhtml;
  };

  return <div className="list-champion row">{renderListChampionItem()}</div>;
}

export default ListChamp;
