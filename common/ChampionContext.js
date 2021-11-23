import React from 'react'

const ChampionContext = React.createContext();

export const useChampionContext = ()=>{
    return React.useContext(ChampionContext);
}

export default ChampionContext
