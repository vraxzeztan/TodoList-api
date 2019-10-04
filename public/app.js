$(document).ready(function(){
    $.getJSON('/api/todos')
    .then(addTodos)
    .catch(function(err){
        console.log(err);
    });

    $('#todoInput').keypress(function(event){
        if(event.which == 13){
            createTodo();
        }
    });

    $('.list').on('click','span',function(){
        removeTodo($(this).parent());
    })
});


function addTodos(todos){
   todos.forEach(function(todo){
       addTodo(todo);
   });
}

function addTodo(todo){
    var newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
    newTodo.data('id', todo._id);
    if(todo.completed){
        newTodo.addClass('done');
    }
    $('.list').append(newTodo);
 }
function createTodo(){
    var usrInput = $('#todoInput').val();
    $.post('/api/todos',{name : usrInput})
    .then(function(newTodo){
        $('#todoInput').val('');
        addTodo( newTodo);
    })
    .catch(function(err){
        console.log(err);
    })
}

function removeTodo(todo){
    var clickedID = todo.data('id');
    var deleteURL = '/api/todos/' + clickedID;
    $.ajax({
        method: 'DELETE',
        url: deleteURL
    })
    .then(function(data){
        todo.remove();
    })
    .catch(function(err){
        console.log(err);
    });
}