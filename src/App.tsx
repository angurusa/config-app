import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import IDSE from './components/IDSE';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <IDSE data={{}} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
