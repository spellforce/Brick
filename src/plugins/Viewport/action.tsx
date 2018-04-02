import {Constants} from 'brick-define';

export const setViewprotRoot = (rootNode:HTMLElement) =>(dispatch, getState) => {
    dispatch({type:Constants.SET_VIEWPORT_ROOT,value:rootNode});
};