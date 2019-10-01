var express = require('express');
app = express();

var TodoRoutes = require('./routes/todos');


app.get('/',function (req,res) {
    res.send({message: "hi!"});
})

app.use('/api/todos',TodoRoutes);

app.listen(3000,function () {
    console.log('server running');
});



