import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router-component';

// Flux
import ToDoActions from '../actions/ToDoActions.js';

const styles = {
  wrap: {
    width: 60,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'transparent',
    color: 'green',
    border: '1px solid #DDD',
    outline: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    borderRadius: '36px',
    width: '36px',
    height: '36px'
  }
};

const TodoChecker = React.createClass({
  toggle() {
    ToDoActions.toggleCheck(this.props.todoId);
  },

  render() {
    return (
      <div style={styles.wrap}>
        <button type='button' onClick={this.toggle} style={styles.button}>
          {this.props.isChecked ? <span className='fa fa-check'></span> : null}
        </button>
      </div>
    )
  }
});

module.exports = Radium(TodoChecker);
