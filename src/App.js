import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Site from './components/site/Site';

function App() {
  return (
    <BrowserRouter>
        <Site />
    </BrowserRouter>
 
  );
}

export default App;