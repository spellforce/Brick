import * as _ from "lodash"
import * as React from "react"
import * as ReactDOM from "react-dom"
/// <reference path="../../Util.ts" />
import { addClass, hasClass, removeClass } from "brick-utils"

import {connect} from "react-redux";
// class Props extends StoreState{
//     instanceId:string;
// }
/**
 * 一个辅助编辑状态的外壳，内部包裹实际渲染的组件
 */
class EditHelper extends React.Component<any> {
    /**
     * 暴露内层组件实例
     */
    public wrappedInstance: React.ReactInstance

    /**
     * 组件的类
     */
    private componentClass: React.ComponentClass<any>

    /**
     * 组件实例的信息
     */
    private instanceInfo: any

    /**
     * 当前组件 dom 对象
     */
    private domInstance: HTMLElement

    /**
     * 当前实例设置信息
     */
    private setting: any

    /**
     * 当前实例默认配置
     */
    private defaultProps: any

    getInstanceInfo=(arr,viewId,index=0)=>{
        console.log('arr',arr[viewId[index]],viewId,index);
        if(index!==viewId.length-1){
            return this.getInstanceInfo(arr[viewId[index]].children,viewId,index+1);
        }else {
            return arr[viewId[index]];
        }
    };
    public componentWillMount() {
        this.instanceInfo = this.getInstanceInfo(this.props.viewport.brickView.children,this.props.brickViewId);
        console.log(this.instanceInfo)
        // this.componentClass = this.props.actions.ApplicationAction.getComponentClassByKey(this.instanceInfo.gaeaKey)
    }

    public componentDidMount() {
        this.domInstance = ReactDOM.findDOMNode(this.wrappedInstance) as HTMLElement
        // 绑定监听
        // this.domInstance.addEventListener("mouseover", this.handleMouseOver)
        // this.domInstance.addEventListener("click", this.handleClick)


        // addClass(this.domInstance, "gaea-draggable")

        // 设置此实例的 dom 节点
        // this.props.actions.ViewportAction.setDomInstance(this.props.instanceId, this.domInstance)
        //
        // // 如果自己是布局元素, 给子元素绑定 sortable
        // if (this.setting.isContainer) {
        //     // 添加可排序拖拽
        //     this.props.actions.ViewportAction.registerInnerDrag(this.props.instanceId, this.domInstance, {
        //         draggable: ".gaea-draggable"
        //     })
        // }

        // 当组件 props 设置改变时，会触发，强制刷新
        // this.props.actions.EventAction.on(`${this.props.stores.EventStore.instanceUpdate}.${this.props.instanceId}`, this.forceRender)
    }

    public componentWillUnmount() {
        // this.props.actions.EventAction.off(`${this.props.stores.EventStore.instanceUpdate}.${this.props.instanceId}`, this.forceRender)
    }

    public forceRender = () => {
        this.forceUpdate()
    }

    public handleMouseOver = (event: MouseEvent) => {
        event.stopPropagation()
        //
        // this.props.actions.EventAction.emit(this.props.stores.EventStore.mouseHoveringComponent, {
        //     instanceId: this.props.instanceId,
        //     type: "instance"
        // })

        this.props.actions.setCurrentHover(this.props.instanceId)
    }

    public handleClick = (event: MouseEvent) => {
        event.stopPropagation()

        const setting = this.props.actions.ApplicationAction.getSettingByInstance(this.instanceInfo)

        // 将当前组件设置为正在编辑状态
        this.props.actions.setCurrentEditId(this.props.instanceId)
    }


    public render() {
        // 子元素
        let childs: Array<React.ReactElement<any>> = null;
        if(typeof this.instanceInfo.children === 'string'){
            childs = this.instanceInfo.children;
        }else {
            childs = this.instanceInfo.children.map(item => {
                return (
                    <ConnectedEditHelper key={item.viewId} brickViewId={item.viewId} />
                )
            });
        }

        console.log('childs',childs);
        // const wrapProps: any = _.merge({}, this.defaultProps, { ...this.instanceInfo.data.props }, {
        //     ref: (ref: React.ReactInstance) => {
        //         this.wrappedInstance = ref
        //     }
        // });

        return React.createElement(this.instanceInfo.class, this.instanceInfo.props, childs)
    }
}

const ConnectedEditHelper = connect((state)=>state)(EditHelper) as any;
export default ConnectedEditHelper
