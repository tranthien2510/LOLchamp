import AxiosService from "../common/AxiosService";
import { URL_GET_ALL_CHAMP } from "../constants";

export const getChampRequest = () => AxiosService.get(URL_GET_ALL_CHAMP);
