/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import {Navigation} from 'react-native-navigation';
import App from './App';
import Poem from './Poem';

Navigation.registerComponent('Welcome', () => App);
Navigation.registerComponent('Poem', () => Poem);

Navigation.setDefaultOptions({
  //   statusBar: {
  //     backgroundColor: '#4d089a',
  //   },
  topBar: {
    visible: false,
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Welcome',
            },
          },
        ],
      },
    },
  });
});
