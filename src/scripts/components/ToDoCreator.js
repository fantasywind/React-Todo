import React from 'react';
import {Link} from 'react-router-component';

// Flux
import ToDoActions from '../actions/ToDoActions.js';
import ToDoStore from '../stores/ToDoStore.js';

const styles = {
  wrap: {
    flex: 1
  },
  input: {
    height: 56,
    outline: 'none',
    fontSize: '1.25rem',
    width: '100%',
    border: 0,
    boxSizing: 'border-box'
  }
};

const ToDoCreator = React.createClass({
  getInitialState() {
    return {
      content: ''
    }
  },

  componentDidMount() {
    ToDoStore.addChangeListener(this.todoUpdate);
  },

  componentWillUnmount() {
    ToDoStore.removeChangeListener(this.todoUpdate);
  },

  todoUpdate() {
    this.setState({
      content: ''
    });
  },

  handleContent(e) {
    this.setState({
      content: e.target.value
    });
  },

  submit(e) {
    if (e.keyCode === 13 && this.state.content) {
      ToDoActions.add(this.state.content);
    }
  },

  render() {
    return (
      <div style={styles.wrap}>
        <input value={this.state.content} onKeyUp={this.submit} onChange={this.handleContent} type='text' style={styles.input} placeholder='What needs to db done?' />
      </div>
    )
  }
});

module.exports = ToDoCreator;
