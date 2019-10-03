var express = require('express');
app = express();
var bodyParser = require('body-parser');

var TodoRoutes = require('./routes/todos');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function (req,res) {
    res.send({message: "hi!"});
})

app.use('/api/todos',TodoRoutes);

app.listen(8000,function () {
    console.log('server running');
});



