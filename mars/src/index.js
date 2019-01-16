import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './form.js'
import Form2 from './form2.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Form2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
