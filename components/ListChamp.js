import React, { useEffect, useState } from "react";
import "regenerator-runtime/runtime";
import { getAllChampRequest, getChampRequest } from "../apis/champApis";
import { useListChampContext } from "../common/Context";
import ListChampItem from "./ListChampItem";
import LoadingScreen from "./LoadingScreen";
import * as actions from "../actions";
import { useInfoChampContext } from "../common/Context";
import axios from "axios";

function ListChamp() {
  const { stateListChamp, dispatchListChamp } = useListChampContext();
  const { stateInfoChamp, dispatchInfoChamp } = useInfoChampContext();

  const handleFetchInfoChamp = React.useCallback(async (id) => {
    try {
      const res = await getChampRequest(id);
      dispatchInfoChamp(actions.fetchChampSuccess(res.data, id));
      dispatchInfoChamp(actions.showModal());
      dispatchInfoChamp(actions.showLoading());
      await delay(1200);
      dispatchInfoChamp(actions.hideLoading());
    } catch (error) {}
  }, []);

  const delay = (time = 1500) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const handleFetchChampions = async () => {
    try {
      const res = await getAllChampRequest();
      if (res) {
        dispatchListChamp(actions.showLoading());
        dispatchListChamp(actions.fetchAllChampSuccess(res.data));
        dispatchListChamp(actions.hideLoading());
      }
    } catch (error) {
      console.log(error);
      dispatchListChamp(actions.showLoading());
      dispatchListChamp(actions.fetchAllChampFailed());
      dispatchListChamp(actions.hideLoading());
    }
  };

  useEffect(() => {
    axios
      .get(
        "http://ddragon.leagueoflegends.com/cdn/11.23.1/data/en_US/champion/Aatrox.json"
      )
      .then((data)=>{console.log(data)});
    handleFetchChampions();
  }, []);

  const renderListChampionItem = () => {
    let xhtml = null;

    if (stateListChamp.showLoading) {
      return <LoadingScreen myFlag={true} />;
    }
    if (!stateListChamp.listChamp.length) {
      return <LoadingScreen myFlag={false} />;
    }
    if (stateListChamp.listChamp.length) {
      xhtml = stateListChamp.listChamp.map((champ) => {
        return (
          <ListChampItem
            champion={champ}
            handleFetchInfoChamp={handleFetchInfoChamp}
          />
        );
      });
    }

    return xhtml;
  };

  return <div className="list-champion row">{renderListChampionItem()}</div>;
}

export default ListChamp;
