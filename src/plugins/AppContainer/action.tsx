import {Constants} from '../../define';

export const setTool:any = (index, value) => (dispatch, getState) => {
    dispatch({type: Constants.SET_TOOL, index, value});
};