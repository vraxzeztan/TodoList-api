var express = require('express');
var router = express.Router();
var helpers = require('../helper/todos');

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo)

router.route('/:todoID')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

module.exports = router;