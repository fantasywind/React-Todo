import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router-component';

import TodoChecker from './TodoChecker.js';
import TodoContent from './TodoContent.js';
import TodoRemover from './TodoRemover.js';

const styles = {
  wrap: {
    width: '100%',
    height: 60,
    display: 'flex',
    borderBottom: '1px solid #DDD'
  }
};

const T = React.PropTypes;

const ToDoElement = React.createClass({
  propTypes: {
    todo: T.object.isRequired
  },

  render() {
    return (
      <div style={styles.wrap}>
        <TodoChecker isChecked={this.props.todo.checked} todoId={this.props.todo.id} />
        <TodoContent content={this.props.todo.content} />
        <TodoRemover todoId={this.props.todo.id} />
      </div>
    )
  }
});

module.exports = Radium(ToDoElement);
