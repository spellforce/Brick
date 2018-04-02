import * as React from "react"
import * as ReactDOM from "react-dom"
// import {StoreState} from "../types";
// import Helper from "./Helper";
// import {Button} from 'antd'
import {connect} from "react-redux";
import {Constants} from "../../define";
import './index.css';
import * as sagas from './saga';
import * as reducers from './reducer';
import * as actions from './action';
import {BrickPlugin} from '../../model';
import ConnectedEditHelper from './editHelper';
import {bindActionCreators} from 'redux';

class Viewport extends React.Component<any> {
    // helper = null;
    constructor(props){
        super(props);
        // this.helper = new Helper({...this.props,...this.state});
    }

    /**
     * 获取自己的实例
     */
    public getRef = (ref: React.ReactInstance) => {
        this.props.setViewprotRoot(ReactDOM.findDOMNode(ref) as HTMLElement);
        // console.info('ref',ref);
        // this.props.actions.registerInnerDrag(ref)
    };
    /**
     * 鼠标移开视图区域
     */
    public handleMouseLeave = (event) => {
        event.stopPropagation();
        // console.log('handleMouseLeave')
        // 触发事件
        // this.props.actions.EventAction.emit(this.props.stores.EventStore.mouseLeaveViewport)

        // 设置当前 hover 的元素为 null
        // this.props.actions.setCurrentHover(null);
    };

    public componentDidMount() {
        console.log('Viewport componentDidMount');
        // console.log(new Button({type:'danger'}))
        // console.log((
        //     <Button />
        // ))
    }

    render(){
        return (
            <div className="viewport" onMouseLeave={this.handleMouseLeave} ref={this.getRef}>
                    <ConnectedEditHelper brickViewId={[0]} />
                {/*{this.props.actions.loadNoPositionPlugins()}*/}
            </div>
        )
    }
}

function mapStateToProps(state) :any{
    return state;
}
const containerActions = (dispatch) => bindActionCreators({
    ...actions,
}, dispatch);

export default {
    class: connect(mapStateToProps,containerActions)(Viewport),
    actions,
    reducers,
    sagas,
    name:'Viewport'
} as BrickPlugin;