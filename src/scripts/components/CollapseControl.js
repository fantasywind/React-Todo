import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router-component';

const styles = {
  wrap: {
    width: 60
  },
  button: {
    backgroundColor: 'transparent',
    color: '#AAA',
    width: '100%',
    border: 1,
    height: '100%',
    outline: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    ':hover': {
      color: '#777'
    }
  }
};

const CollapseControl = React.createClass({
  render() {
    return (
      <div style={styles.wrap}>
        <button onClick={this.props.toggleCollapse} type='button' style={styles.button}>
          <span className={'fa ' + (this.props.isCollapsed ? 'fa-chevron-up' : 'fa-chevron-down')}></span>
        </button>
      </div>
    )
  }
});

module.exports = Radium(CollapseControl);
