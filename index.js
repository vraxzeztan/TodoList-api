var express = require('express');
app = express();
var bodyParser = require('body-parser');
var TodoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/views'));
app.use('/api/todos',TodoRoutes);

app.get('/',function (req,res) {
    res.sendFile('index.html');
})

app.listen(3000,function () {
    console.log('server running');
});



