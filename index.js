const express = require('express');
const app = express();

app.get('/', function(req, res){
	res.send("Hello World! I'mma be a chatbot boiii");
});


app.listen(3000);
