import {Constants} from 'brick-define';

export const setViewprotRoot = (rootNode:HTMLElement) => {
    return {type:Constants.SET_VIEWPORT_ROOT,payload:rootNode};
};
export const init:any = (rootNode) => (dispatch, getState) => {
    dispatch(setViewprotRoot(rootNode));
    dispatch({type:Constants.INIT_VIEWPORT});
};
export const loadBrickView:any = (brickView) => (dispatch, getState) => {
    dispatch({type:Constants.LOAD_VIEWPORT,payload:brickView});
};