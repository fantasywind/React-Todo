var express = require('express');
var router = express.Router();
var _ = require('lodash');

var todos = [{
  id: 1,
  content: 'test todo 1',
  checked: true
}, {
  id: 2,
  content: 'test todo 2',
  checked: false
}];

router.get('/', function (req, res) {
  res.json(todos);
});

router.post('/', function (req, res) {
  if (!req.body.content) {
    res.status(401);
    return res.json({
      message: 'Parameter Error'
    });
  }

  var todoId = Math.random();

  todos.push({
    id: todoId,
    content: req.body.content,
    checked: false
  });

  res.status(201);
  res.json({
    id: todoId
  });
});

router.patch('/:todoId/toggleCheck', function (req, res) {
  var todo = _.find(todos, {
    id: parseFloat(req.params.todoId)
  });

  if (todo) {
    todo.checked = !todo.checked;
    res.status(204);
    res.end();
  } else {
    res.status(404);
    res.end();
  }
});

router.delete('/:todoId', function (req, res) {
  var todoIndex = _.findIndex(todos, {
    id: parseFloat(req.params.todoId)
  });

  if (~todoIndex) {
    todos.splice(todoIndex, 1);
    res.status(204);
    res.end();
  } else {
    res.status(404);
    res.end();
  }
});

module.exports = router;
