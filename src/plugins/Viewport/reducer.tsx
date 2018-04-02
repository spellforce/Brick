import {BrickView, ViewportStore} from 'brick-model';
import {Constants} from 'brick-define';
const test = {
    class:'div',
    type:'base',
    props:{
        "className":"viewport_root"
    },
    children:[
        {
            viewId:[0],
            "class": "a",
            "type": "base",
            "props": {
                "href": "#"
            },
            "children": [
                {
                    viewId:[0,0],
                    "class": "span",
                    "type": "base",
                    "props": {},
                    "children": "Link text"
                }
            ]
        },
        {
            viewId:[1],
            "class": "a",
            "type": "base",
            "props": {
                "href": "#"
            },
            "children": [
                {
                    viewId:[1,0],
                    "class": "span",
                    "type": "base",
                    "props": {},
                    "children": "Link text"
                }
            ]
        }
    ]} as any;
export function viewport(state:ViewportStore = new ViewportStore(), action){
    state.brickView = test;
    switch (action.type) {
        case Constants.SET_VIEWPORT_ROOT:
            state.viewportRoot = action.value;
            return state;
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