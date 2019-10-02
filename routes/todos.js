var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/',function (req,res) {
    db.Todo.find()
    .then(function (todos) {
        res.json(todos); 
    })
    .catch(function(err) {
        res.send(err);
    })
});

router.post('/',function (req,res) {
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    })
})

router.get('/:todoID',function(req,res){
    db.Todo.findById(req.params.todoID)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    })
})

router.put('/:todoID',function(req,res){
    db.Todo.findByIdAndUpdate(req.params.todoID,req.body,{new:true})
    .then(function(updatedTodo){
        res.json(updatedTodo);
    })
    .catch(function (err) {
        res.send(err);
    })
})

module.exports = router;