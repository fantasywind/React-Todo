import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router-component';

// Flux
import ToDoActions from '../actions/ToDoActions.js';
import ToDoStore from '../stores/ToDoStore.js';

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
    color: '#AAA',
    border: 0,
    outline: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    borderRadius: '36px',
    width: '36px',
    height: '36px',
    opacity: .1,
    ':hover': {
      opacity: 1
    }
  }
};

const TodoRemover = React.createClass({
  remove() {
    ToDoActions.remove(this.props.todoId);
  },

  render() {
    return (
      <div style={styles.wrap}>
        <button onClick={this.remove} type='button' style={styles.button}>
          <span className='fa fa-times'></span>
        </button>
      </div>
    )
  }
});

module.exports = Radium(TodoRemover);
