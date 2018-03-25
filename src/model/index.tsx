/*基础组件数据库如div等*/
import {BrickActions} from './action';
import {connect} from 'react-redux';
import * as AppActions from '../plugins/AppContainer/action';
import {Position} from '../define';

export class BaseBrick{
    /*真实类*/
    class:any;
    /*组件名*/
    name:string;
    /*类型*/
    type:'base'|'component'|'container';
    /*组件属性*/
    props:string;
    children:BaseBrick[];
}
export class BrickCategory{
    button:string = 'button';
    other:string = 'other';
    layout:string = 'layout';
}
/*组件数据库*/
export class Brick extends BaseBrick{
    brickId?:string;/*div等基础组件没有*/
    path?:any;/*自制组件才有*/
    namespace?:any;/*node_model 组件才有*/
    /*分类*/
    category:BrickCategory;
}

export class InstanceStore {
    instanceId:string;
    brickId:string;
    children:InstanceStore[] | BaseBrick[];
}

export interface BaseStore{
    tools:any
}

export interface BrickPlugins{
    Viewport:any,
    AppContainer:any,
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


