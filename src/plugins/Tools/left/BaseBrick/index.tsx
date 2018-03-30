import * as React from 'react'
import * as ReactDOM from "react-dom"
// import {StoreState} from "../types";
// import Helper from "./Helper";
// import {Button} from 'antd'
import {connect} from 'react-redux';
import {createElement} from "react";
import './index.css';
import Icon from 'antd/lib/icon';
import * as sagas from './saga';
import * as reducers from './reducer';
import * as actions from './action';
import {Brick, BrickPlugin, BrickTool} from '../../../../model';
import {brickCreateElement} from '../../../../Utils';
const a:Brick = require('../../../Brick/base/a.json');

export class AntdIcon extends React.Component{
    render(){
        return (
            <Icon type="ant-design" />
        )
    }
}
export class BaseBrickDisplay extends React.Component<any>{
    private draggable = [];
    componentDidMount(){
        console.log(a);
        // this.props.actions.registerOuterDrag(this.draggable as HTMLElement[]);
    }

    // shouldComponentUpdate(next:any){
    //     if(next.tools.get(3)===this.props.tools.get(3)){
    //         return false;
    //     }
    //     return true;
    // }
    mapElement=()=>{

    };
    create=()=>{
        return createElement('a',{href:'#'},['xxxx','xx',<div key={1}>div</div>]);
    };
    render(){
        // let M:any = brickCreateElement(a[0]);
        // console.log('em',M);
        return <div style={{width:300}}>
            {brickCreateElement(a[0])}
            {/*{this.create()}*/}
        </div>
    }
}

export default {
    class: connect((state)=>{return state})(BaseBrickDisplay),
    actions,
    reducers,
    sagas,
    name:'BaseBrickDisplay',
    info:{
        icon:AntdIcon,
        position:'left',
        type:'tool'
    }
} as BrickPlugin;