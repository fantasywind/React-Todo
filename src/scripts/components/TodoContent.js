import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router-component';

const styles = {
  wrap: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    padding: '0 0 0 16px',
    boxSizing: 'border-box'
  },
  text: {
    fontSize: '1.25rem',
    textAlign: 'left'
  }
};

const TodoChcker = React.createClass({
  render() {
    return (
      <div style={styles.wrap}>
        <span style={styles.text}>{this.props.content}</span>
      </div>
    )
  }
});

module.exports = Radium(TodoChcker);
