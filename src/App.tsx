import React from 'react';
import './App.css';
import {Router, View} from "react-navi";
import Routes from "./Routes/Routes";
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import {rrfProps} from "./Store/FirebaseStore";
import {Provider} from "mobx-react";
import MoStore from "./Store/MobxStore";

const App: React.FC = () => {
  return (
      <Provider store={MoStore}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Router routes={Routes}>
            <View/>
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
  );
}

export default App;
