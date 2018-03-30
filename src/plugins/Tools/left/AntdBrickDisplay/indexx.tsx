// import * as React from "react"
// import * as ReactDOM from "react-dom"
// // import {StoreState} from "../types";
// // import Helper from "./Helper";
// // import {Button} from 'antd'
// import {connect} from "react-redux";
// import './index.css';
// // import {Icon} from 'antd';
// import * as sagas from './saga';
// import * as reducers from './reducer';
// import * as actions from './action';
// import {BrickPlugin, BrickTool} from '../../../../model';
//
// export class AntdIcon extends React.Component{
//     render(){
//         return (
//             <Icon type="ant-design" />
//         )
//     }
// }
// export class AntdBrickDisplay extends React.Component<StoreState>{
//     private draggable = [];
//     componentDidMount(){
//         this.props.actions.registerOuterDrag(this.draggable as HTMLElement[]);
//     }
//     shouldComponentUpdate(next:StoreState){
//         if(next.tools.get(3)===this.props.tools.get(3)){
//             return false;
//         }
//         return true;
//     }
//     mapElement=()=>{
//
//     };
//     render(){
//         return <div>
//             Hello!
//         </div>
//     }
// }
//
// export default {
//     class: connect((state)=>{return state})(AntdBrickDisplay),
//     actions,
//     reducers,
//     sagas,
//     name:'AntdBrickDisplay',
//     info:{
//         icon:AntdIcon,
//         position:'left'
//     }
// } as BrickPlugin;