import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseChangePuzzle from './BaseChangePuzzle'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BaseChangePuzzle width = { 3 } singlePlayer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes zwith some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
