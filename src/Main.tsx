import {Config} from './define';
declare const require: any;
import {createStore,combineReducers,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {BrickPlugin, BrickStore} from './model';
import thunk from 'redux-thunk';
import {fork} from 'redux-saga/effects';
import any = jasmine.any;
// let Actions:{[key:string]:BrickStore} = {};
export let PluginClasses:{[key:string]:BrickStore} = {};
export let Actions:{[key:string]:BrickStore} = {};
export class BrickMain {
    /*暴露给下面调用的*/
    // actions:{[key:string]:BrickStore} = {};
    // pluginClasses:{[key:string]:BrickStore} = {};
    toolsPlugins:BrickPlugin[] = [];

    private reducers:any = {};

    store:any;
    static instance = null;

    constructor(){
        this.init();
    }

    static setInstance() {
        if(BrickMain.instance===null) {
            this.instance = new BrickMain();
            return this.instance;
        }
    }

    private myMiddleware = store => next => action => {
        //console.log('Action: ' + action.type);
        return next(action);
    };

    private sagaMiddleware = createSagaMiddleware();
    private init(){
        BrickMain.log("BrickMain init start");
        let sagas:any={};
        const context = require.context("./plugins", true, /index.tsx/);
        context.keys().forEach((key: string,i) => {
            // this.plugins.set(i,context(key).default[i]);
            // this.plugins[i] = context(key).default[i];
            // this.plugins.push(context(key).default);
            let plugin:BrickPlugin = context(key).default;
            // console.log(plugin)
            if(plugin) {
                if(plugin.actions) {
                    Actions[plugin.name] = plugin.actions;
                }

                PluginClasses[plugin.name] = plugin.class;
                if (plugin.info) {
                    if (plugin.info.type === 'tool') {
                        this.toolsPlugins.push(plugin);
                    }
                }
                if(plugin.reducers) {
                    this.reducers = {...this.reducers, ...plugin.reducers};
                }

                if(plugin.sagas) {
                    sagas = {...sagas, ...plugin.sagas}
                }
            }
            // console.log(context(key));
        });
        console.log('reducers',this.reducers);
        console.log('sagas',sagas);
        console.log('actions',Actions);
        // Terminator.log(this.plugins);
        // this.addRenders();
        function* mainSaga(){
            // console.log(sagas);
            for(let saga of sagas){
                yield fork(saga);
            }
        }

        this.store = createStore<any>(combineReducers(
            {...this.reducers}
        ),applyMiddleware(this.myMiddleware,this.sagaMiddleware,thunk));

        this.sagaMiddleware.run(mainSaga);

        BrickMain.log("BrickMain init end");

    }

    static log(message?: any, ...optionalParams: any[]){
        if(Config.debug){
            console.log(message,...optionalParams);
        }
    }
}


