import {Constants} from '../../define';

export function tools(state = [-1,-1,-1,-1] as any, action:any) {
    // console.log('tools')
    switch (action.type) {
        case Constants.SET_TOOL:
            if(action.index!==-1) {
                if (state[action.index] === action.value) {
                    state[action.index]  = -1;
                    return Object.assign({},state);
                } else {
                    state[action.index] = action.value;
                    return Object.assign({},state);
                }
            }
            break;
    }
    return state;
}