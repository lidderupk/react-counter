import React from 'react';
import 'normalize.css';

// Import CSS and favicon
import './App.css';
import './favicon.ico';

export const DEBUG = false;

export const App = React.createClass({
    render() {
        return ( < div className = 'App' >
            < img src = 'https://facebook.github.io/react/img/logo.svg'
            alt = 'React Logo' / >
            < p > Big wins < /p>
              <Counter/>
            < /div>
        );
    },
});

export const Counter = React.createClass({

    getInitialState(){
      DEBUG && console.log('getInitialState');
      return {counter: 0};
    },
    render() {
      DEBUG && console.log('render');
        return (
          < div >
            <div>{this.state.counter}</div>
            <button type="button" onClick={this.increment}>+</button>
            <button type="button" onClick={this.decrement}>-</button>
          < /div>
        );
    },

    increment(){
      DEBUG && console.log('+clicked');
      this.setState({counter: this.state.counter + 1});
    },
    decrement(){
      DEBUG && console.log('-clicked');
      if(this.state.counter > 0)
        this.setState({counter: this.state.counter - 1});
    }
});
