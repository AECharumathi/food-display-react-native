import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

import App from './App';
import store from "./app/redux/store"

const ReduxProvider = () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}

//AppRegistry.registerComponent(appName, () => ReduxProvider);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(ReduxProvider);
