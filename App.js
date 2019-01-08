/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Navigator from './src/routes/navigator';
import store from './src/store/configure-store';
import ErrorBoundary from "./src/components/error/error-boundary";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <ErrorBoundary>
          <Navigator/>
        </ErrorBoundary>
      </Provider>
    );
  }
}
