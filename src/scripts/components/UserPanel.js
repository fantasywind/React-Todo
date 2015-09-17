import React from 'react';
import Radium from 'radium';

const styles = {
  wrap: {
    width: '80px',
    textAlign: 'right',
    position: 'relative'
  },
  wrapLogined: {
    width: '180px'
  },
  button: {
    border: '1px solid #DDD',
    backgroundColor: '#FFF',
    outline: 'none',
    boxSizing: 'border-box',
    padding: '0.2em 1.2em',
    fontSize: '1em',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#FBFCFC'
    }
  },
  name: {
    color: '#515151',
    margin: '0 10px 0 0'
  }
};

const UserPanel = React.createClass({
  getInitialState() {
    return {

    };
  },

  componentDidMount() {

  },

  componentWillUnmount() {

  },

  render() {
    return (
      <div style={[styles.wrap, styles.wrapLogined]}>
      </div>
    );
  }
});

module.exports = Radium(UserPanel);
