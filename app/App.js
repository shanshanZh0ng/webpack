// var config = require('./config.json');

// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = config[0].text;
//   return greet;
// }

import React, {Component} from 'react'
import config from './config.json';

import styles from './App.css'; // 导入

class App extends Component{
  render(){
    return (
      <div  className={styles.root}>
        <p>{config[0].text}</p>
        <span>{config[1].name}</span>
      </div>
    )
  }
}
export default App