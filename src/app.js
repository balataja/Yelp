import React from 'react'
import ReactDOM from 'react-dom'

import './app.css';
import styles from './styles.module.css';
import 'font-awesome/css/font-awesome.css';

import { browserHistory, Router } from 'react-router'

import makeRoutes from './routes';

const Home = React.createClass({
  render: function() {
    return (<div>Hello world</div>)
  }
})

const routes = makeRoutes();

const App = React.createClass({
  get content() {
        return (<Router 
            history={browserHistory} 
            routes={routes} />)
    },

  render: function() {
    return (
      /*<div className={styles.wrapper} >
        <h1><i className="fa fa-star"></i>
        Environment: {__NODE_ENV__}</h1>
      </div>*/
      <div style={ {height: '100%' } }>
        {this.content}
      </div>
    );
  }
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);