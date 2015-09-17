import React from 'react';
import {Link} from 'react-router-component';

import CollapseControl from './CollapseControl.js';
import ToDoCreator from './ToDoCreator.js';

const styles = {
  wrap: {
    display: 'flex',
    height: 60,
    lineHeight: '60px',
    borderBottom: '1px solid #aaa'
  }
};

const TodoHeader = React.createClass({
  render() {
    return (
      <div style={styles.wrap}>
        <CollapseControl isCollapsed={this.props.isCollapsed} toggleCollapse={this.props.toggleCollapse} />
        <ToDoCreator />
      </div>
    )
  }
});

module.exports = TodoHeader;
