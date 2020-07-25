import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import App from './App';

if(process.env.NODE_ENV === "production"){
    render(<App />, document.getElementById('root'));
} else if(process.env.NODE_ENV === "development"){
    const DevApp = hot(module)(App);
    render(<DevApp />, document.getElementById('root'));
}

