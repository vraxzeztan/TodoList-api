var express = require('express');
app = express();

app.get('/',function (req,res) {
    res.send({message: "hi!"});
})

app.listen(3000,function () {
    console.log('server running');
});



