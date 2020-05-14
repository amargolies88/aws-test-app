import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import FileContext from './components/FileContext';

function App() {

  const [fileState, setFileState] = useState({
    selectedFile: null,
    selectedFiles: null
  });

  return (
    <div className="MainThang">
      <FileContext.Provider value={[fileState, setFileState]}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </FileContext.Provider>
    </div>
  );
}

export default App;
