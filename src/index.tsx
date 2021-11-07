import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'app';
import {Provider} from "react-redux";
import {store} from "store";
import {Global, Wrapper} from "./Global";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Wrapper>
              <Global />
              <App />
          </Wrapper>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
