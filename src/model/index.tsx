/*基础组件数据库如div等*/
import {BrickActions} from './action';
import {connect} from 'react-redux';
import * as AppActions from '../plugins/AppContainer/action';
import {Position} from '../define';

export class BaseBrick{
    /*真实类*/
    class:any;
    /*组件名*/
    type:string;
    /*组件属性*/
    props:string;
    children:BaseBrick[];
}
/*组件数据库*/
export class Brick extends BaseBrick{
    brickId?:string;
    path?:any;
    namespace?:any;
}

export class InstanceStore {
    instanceId:string;
    brickId:string;
    children:InstanceStore[] | BaseBrick[];
}


export interface BrickStore{
    Viewport:any,
    AppContainer:any
}

export interface BrickPlugin{
    info?: BrickTool,
    class: any,
    actions?: any,
    reducers?: any,
    sagas?:any,
    name:string
}

export interface BrickTool{
    position:any,
    type:any,
    icon:any
}


