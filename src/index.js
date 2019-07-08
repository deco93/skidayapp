import React from 'react';
import {render} from 'react-dom';
// import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App'
// import Whoops404 from './components/Whoops404'
// import {Router,Route} from 'react-router'

// import {SkiDayList} from './components/SkiDayList'
// import Layout from './components/Layout'
// render(<SkiDayList days={[]}/>, document.getElementById('root'));

/*render( <Router>
            <Route path="/" component={App}/>
            <Route path="*" component={Whoops404}/>
        </Router>, document.getElementById('root'))*/
render( <App/>, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
