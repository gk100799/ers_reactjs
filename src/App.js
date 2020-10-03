import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'antd/dist/antd.css';
import './Css/normalize.css'
import './Css/simple-grid.css'

import Homepage from './Components/Homepage/Homepage'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/" component={Homepage} />
    </Router>
  );
}

export default App;
