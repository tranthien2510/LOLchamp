import * as actionTypes from "../constants";

export const initState = { listChamp: [] };

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CHAMP_SUCCESS:
      const { data } = action.payLoad;
      const listChamp = [];
      for (let champ in data.data) {
        const { name, tags, image } = data.data[champ];
        listChamp.push({
          name: name,
          tags: tags,
          avatar: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${modifyFileSuffix(
            image.full
          )}_0.jpg`,
        });
      }
      return { ...state, listChamp };
    case actionTypes.GET_ALL_CHAMP_FAILED:
      return state;
    default:
      break;
  }
};

const modifyFileSuffix = (img) => {
  return img.replace(".png", "");
};
