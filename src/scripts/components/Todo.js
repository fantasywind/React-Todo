import React from 'react';
import {Link} from 'react-router-component';

// Components
import TodoHeader from './TodoHeader.js';
import ToDoElement from './ToDoElement.js';

// Flex
import ToDoActions from '../actions/ToDoActions.js';
import ToDoStore from '../stores/ToDoStore.js';

const styles = {
  wrap: {
    width: 600,
    border: '1px solid #DDD',
  }
};

const Todo = React.createClass({
  getInitialState() {
    return {
      todos: ToDoStore.getTodos(),
      collpased: false
    }
  },

  componentDidMount() {
    ToDoStore.addChangeListener(this.todoUpdate);

    ToDoActions.fetch();
  },

  componentWillUnmount() {
    ToDoStore.removeChangeListener(this.todoUpdate);
  },

  todoUpdate() {
    this.setState({
      todos: ToDoStore.getTodos()
    });
  },

  toggleCollapse() {
    this.setState({
      collpased: !this.state.collpased
    });
  },

  render() {
    const list = this.state.collpased ? [] : this.state.todos;

    return (
      <div style={styles.wrap}>
        <TodoHeader isCollapsed={this.state.collpased} toggleCollapse={this.toggleCollapse} />
        {list.map((todo) => {
          return <ToDoElement todo={todo} />
        })}
      </div>
    )
  }
});

module.exports = Todo;
