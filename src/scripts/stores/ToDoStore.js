import AppDispatcher from '../dispatcher/AppDispatcher.js';
import {EventEmitter} from 'events';
import ToDoConstants from '../constants/ToDoConstants.js';
import assign from 'object-assign';
import _ from 'lodash';

const CHANGE_EVENT = 'change';

let _todos = [];

const ToDoStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    return this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(listener) {
    return this.removeListener(CHANGE_EVENT, listener);
  },

  getTodos() {
    return _todos;
  }
});

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action) {
    case ToDoConstants.TODO_FETCHED:
      _todos = payload.todos;

      ToDoStore.emitChange();
      break;

    case ToDoConstants.TODO_ADDED:
      _todos.push({
        id: payload.id,
        content: payload.content,
        checked: false
      });

      ToDoStore.emitChange();
      break;

    case ToDoConstants.TODO_REMOVED:
      var todoIndex = _.findIndex(_todos, {
        id: payload.todoId
      });

      if (~todoIndex) {
        _todos.splice(todoIndex, 1);
        ToDoStore.emitChange();
      }
      break;

    case ToDoConstants.TODO_TOGGLE_CHECK:
      var todo = _.find(_todos, {
        id: payload.todoId
      });

      if (todo) {
        todo.checked = !todo.checked;
        ToDoStore.emitChange();
      }
      break;
  }

  return true;
});

export default ToDoStore;
