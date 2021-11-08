/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import Navigations from './src/navigations';

AppRegistry.registerComponent(appName, () => Navigations);
