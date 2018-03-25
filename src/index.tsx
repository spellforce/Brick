import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {PluginClasses,BrickMain} from './Main';
import {Provider} from 'react-redux';

export default class BrickEditor extends React.Component{
    private brickMain;
    componentWillMount() {
        BrickMain.setInstance();
        this.brickMain = BrickMain.instance;
        // console.log(PluginClasses)
    }
    render(){
        const BrickContainer:any = PluginClasses.AppContainer;
        return (
            <Provider store={this.brickMain.store}>
                <BrickContainer />
            </Provider>
        )
    }
}

ReactDOM.render(
  <BrickEditor />,
  document.getElementById('brick-root') as HTMLElement
);
registerServiceWorker();
