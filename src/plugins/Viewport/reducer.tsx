import {BrickView, ViewportStore} from 'brick-model';
import {Constants} from 'brick-define';

export function viewport(state:ViewportStore = new ViewportStore(), action){
    // state.brickView = test;
    switch (action.type) {
        case Constants.SET_VIEWPORT_ROOT:
            state.viewportRoot = action.payload;
            return state;
        case Constants.LOAD_VIEWPORT:
            return Object.assign({}, state,{
                brickView:action.payload
            });
        case Constants.SET_NEW_INSTANCE:

            return state;
        case Constants.SET_HOVER_INSTANCE:
            state.currentHoverId = action.value;
            return Object.assign({}, state);
        case Constants.SET_DRAG_INSTANCE:
            state.currentDrag = action.value;
            return Object.assign({}, state);
        default:break;
    }
    return state;
}