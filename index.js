/**
 * @format
 */

import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import App from './src/App'
import boot from './boot/index'
const app = boot()
AppRegistry.registerComponent(appName, () => app)
