import React from 'react';
import {Link} from 'react-router-component';

// Components
import Todo from './Todo.js';

const styles = {
  wrap: {
    margin: '0 auto',
    width: '1200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px 0 0 0',
    boxSizing: 'border-box'
  }
};

const WelcomePage = React.createClass({
  render() {
    return (
      <div style={styles.wrap}>
        <Todo />
      </div>
    )
  }
});

module.exports = WelcomePage;
