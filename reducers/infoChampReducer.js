import * as actionTypes from "../constants";

export const initState = {
  info: {},
  showModal: false,
  showLoading: true,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL: {
      return { ...state, showModal: true };
    }

    case actionTypes.HIDE_MODAL:
      return { ...state, showModal: false };

    case actionTypes.FETCH_CHAMP_SUCCESS: {
      const { data, id } = action.payLoad;
      const info = processData(data.data[id]);
      console.log(info)
      return { ...state, info };
    }
    case actionTypes.SHOW_LOADING: {
      return { ...state, showLoading: true };
    }

    case actionTypes.HIDE_LOADING: {
      return { ...state, showLoading: false };
    }
    case actionTypes.FETCH_CHAMP_FAILED: {
      return state;
    }
    default:
      return state;
  }
};

const processData = (data) => {
  let info = {};
  const { id, name, title, image, lore, tags, spells } = data;
  info.id = id;
  info.name = name;
  info.title = title;
  (info.splash = image.full.replace(".png", "") + "_0" + ".jpg"),
    (info.avatar = image.full.replace(".png", "") + "_0" + ".jpg"),
    (info.square = image.full),
    (info.lore = lore);
  info.tags = tags;
  info.skills = [];
  spells.forEach((spell) => {
    let skill = {
      id: spell.id,
      name: spell.name,
      description: spell.description,
      image: spell.image.full,
    };
    info.skills.push(skill);
  });
  return info;
};
