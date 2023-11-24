const { getTodos,postTodos, deleteTodos, getTodo, updateTodo, updateTodoStatus } = require('../controller/todocontroller');

const router = require('express').Router();

router.get('/:userid/', getTodos)

router.post('/:userid/', postTodos)

router.delete('/:userid/:id',deleteTodos);

router.get('/:userid/:id',getTodo);

router.put('/:userid/:id',updateTodo);

router.put('/:userid/status/:id',updateTodoStatus);

module.exports = router;