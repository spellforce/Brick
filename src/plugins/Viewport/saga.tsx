// main saga
import {call, fork, put, take} from 'redux-saga/effects';
import {Constants} from '../../define';
import {loadBrickView} from './action';

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
export function* getBrickView() {
    while (true){
        yield take([Constants.INIT_VIEWPORT,Constants.RELOAD_VIEWPORT]);
        console.log('INIT_VIEWPORT');
        // yield call()
        yield put(loadBrickView(test));
    }
}