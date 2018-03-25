import {connect} from 'react-redux';
import * as React from 'react'
import {createElement} from 'react';
import {Position} from '../../define/index';
import {BrickMain, PluginClasses} from '../../Main';
import * as actions from './action';
import * as reducers from './reducer';
import * as sagas from './saga';
import {bindActionCreators} from 'redux';
import {BrickPlugin} from '../../model';
import './index.css';
class AppContainer extends React.PureComponent<any>{
    constructor(props){
        super(props)
    }
    loadIcons(position:string){
        const brickTools = BrickMain.instance.toolsPlugins;
        let flag;
        switch (position){
            case Position.TOP:flag=0;break;
            case Position.RIGHT:flag=1;break;
            case Position.Bottom:flag=2;break;
            case Position.LEFT:flag=3;break;
        }
        // console.log('brickTools',brickTools)
        let Icons = brickTools
            .filter((plugin)=>plugin.info.position === position)
            .map((plugin,value)=>{
                return (
                    <div className="brickContainer-icons" key={value} onClick={()=>this.props.setTool(flag,value)}>
                        {createElement(plugin.info.icon)}
                    </div>
                )
            });
        if(Icons.length){
            return (<div className="icons">{Icons}</div>);
        }else {
            return '';
        }
    };
    loadPlugins(position:string){
        const {tools} = this.props;
        const brickTools = BrickMain.instance.toolsPlugins;

        let flag;
        switch (position){
            case Position.TOP:flag=0;break;
            case Position.RIGHT:flag=1;break;
            case Position.Bottom:flag=2;break;
            case Position.LEFT:flag=3;break;
        }

        let componentClasses = brickTools
            .filter((plugin:BrickPlugin,index)=>(plugin.info.position === position && tools[flag]===index))
            .map((plugin:BrickPlugin,index)=>{
                if(plugin.class!==null)
                    return (
                        <div className="one-plugin" key={index}>
                            {createElement(plugin.class)}
                        </div>
                    )
            });
        if(componentClasses.length){
            return (<div className="plugins">{componentClasses}</div>);
        }else {
            return '';
        }
    };
    public render(){
        console.log(this);
        const Viewport:any = PluginClasses.Viewport;
        return (
            <div className="brickContainer">
                {/*{this.loadPlugins(Position.TOP)}*/}
                <div className="top">
                    {this.loadIcons(Position.TOP)}
                    {this.loadPlugins(Position.TOP)}
                </div>
                <div className="content">
                    <div className="left">
                        {this.loadIcons(Position.LEFT)}
                        {this.loadPlugins(Position.LEFT)}
                    </div>
                    <Viewport />
                    <div className="right">
                        {this.loadPlugins(Position.RIGHT)}
                        {this.loadIcons(Position.RIGHT)}
                    </div>
                </div>
                <div className="bottom">
                    {this.loadPlugins(Position.Bottom)}
                    {this.loadIcons(Position.Bottom)}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) :any{
    return state;
}
const containerActions = (dispatch) => bindActionCreators({
    ...actions,
}, dispatch);

export default {
    class: connect(mapStateToProps,containerActions)(AppContainer),
    actions,
    reducers,
    sagas,
    name:'AppContainer'
} as BrickPlugin;