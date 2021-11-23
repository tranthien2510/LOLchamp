import React, { useRef } from "react";
import * as actions from "../actions";
import { useChampionContext } from "./../common/ChampionContext";
import Button from "./Button";
import { getChampRequest } from "../apis/champApis";
import "regenerator-runtime/runtime";

function SearchBar() {
  const { state, dispatch } = useChampionContext();

  const inputRef = useRef();

  const delay = (time = 1500) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const findChampion = async () => {
    const name = inputRef.current.value.toLowerCase().trim();
    try {
      const res = await getChampRequest();
      if (res) {
        dispatch(actions.showLoading());
        await delay(500);
        dispatch(actions.findChamp(name, res.data));
        dispatch(actions.hideLoading());
      }
    } catch (error) {
      dispatch(actions.showLoading());
      await delay(500);
      dispatch(actions.fetchAllChampFailed());
      dispatch(actions.hideLoading());
    }
  };

  const fetchChampions = async () => {
    try {
      const res = await getChampRequest();
      if (res) {
        dispatch(actions.showLoading());
        await delay(100)
        dispatch(actions.fetchAllChampSuccess(res.data));
        dispatch(actions.hideLoading());
      }
    } catch (error) {
      dispatch(actions.showLoading());
      dispatch(actions.fetchAllChampFailed());
      dispatch(actions.hideLoading());
    }
  };

  const handleInputChange = () => {
    if (inputRef.current.value === "") {
      fetchChampions();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        name=""
        onChange={handleInputChange}
        placeholder="Write something"
        ref={inputRef}
        id="txtSearch"
      />
      <Button handleClick={findChampion}>Search</Button>
    </div>
  );
}

export default SearchBar;
