/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import configureStore from './src/services/reducers';

const store = configureStore()
const ReduxApp = ()=>{
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => ReduxApp);
