import AppDispatcher from '../dispatcher/AppDispatcher.js';
import ToDoConstants from '../constants/ToDoConstants.js';
import qs from 'querystring';

const ToDoActions = {
  fetch() {
    const req = new XMLHttpRequest();
    req.open('GET', '/api/todos');
    req.responseType = 'json';
    req.onreadystatechange = function () {
      if (req.readyState !== 4 || req.status !== 200) return;

      AppDispatcher.dispatch({
        todos: req.response,
        action: ToDoConstants.TODO_FETCHED,
      });
    };
    req.send();
  },

  add(content) {
    const data = qs.stringify({
      content: content
    });

    const req = new XMLHttpRequest();
    req.open('POST', '/api/todos');
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    req.responseType = 'json';
    req.onreadystatechange = function () {
      if (req.readyState !== 4 || req.status !== 201) return;

      AppDispatcher.dispatch({
        id: req.response.id,
        content: content,
        action: ToDoConstants.TODO_ADDED,
      });
    };
    req.send(data);
  },

  remove(todoId) {
    const req = new XMLHttpRequest();
    req.open('DELETE', '/api/todos/' + todoId);
    req.responseType = 'json';
    req.onreadystatechange = function () {
      if (req.readyState !== 4 || req.status !== 204) return;

      AppDispatcher.dispatch({
        todoId: todoId,
        action: ToDoConstants.TODO_REMOVED,
      });
    };
    req.send();
  },

  toggleCheck(todoId) {
    const req = new XMLHttpRequest();
    req.open('PATCH', '/api/todos/' + todoId + '/toggleCheck');
    req.responseType = 'json';
    req.onreadystatechange = function () {
      if (req.readyState !== 4 || req.status !== 204) return;

      AppDispatcher.dispatch({
        todoId: todoId,
        action: ToDoConstants.TODO_TOGGLE_CHECK,
      });
    };
    req.send();
  }
};

export default ToDoActions;
