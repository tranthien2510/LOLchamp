import AxiosService from '../common/AxiosService';
import * as actionTypes from '../constants'

export const getAllChampSuccess = (data)=>{
    return { type: actionTypes.GET_ALL_CHAMP_SUCCESS, payLoad: {data}}
}

export const getAllChampFailed = ()=>{
    return { type: actionTypes.GET_ALL_CHAMP_FAILED}

}

