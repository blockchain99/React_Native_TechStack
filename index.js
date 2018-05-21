
// import { AppRegistry } from 'react-native';
//for animation in LIstItem, add UIManager
import { AppRegistry, UIManager } from 'react-native';
import App from './src/app';

UIManager.setLayoutAnimationEnabledExperimental(true);//for animation
AppRegistry.registerComponent('tech_stack', () => App);
