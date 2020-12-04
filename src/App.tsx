import React from 'react';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux'

import './App.css';
import {rootReducer} from './redux/rootReducer'
import Board from './components/Board';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import WeaponBar from './components/WeaponBar';


const store = createStore(rootReducer, composeWithDevTools(
  // other store enhancers if any
));

function App() {
  return (
    <Provider store={store}>
    <div>
      <table>
        <tr>
          <td></td>
          <td><TopBar/></td>
        </tr>
        <tr>
          <td><SideBar/></td>
          <td><Board/></td>
        </tr>
      </table>
      <WeaponBar/>
    </div>
    </Provider>
  );
}

export default App;
