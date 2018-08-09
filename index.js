var express=require('express');
var app=express();
var cors=require('cors');

app.use(cors);
app.use(express.static('./public'));

setInterval(function(){ 
console.log('running')
 }, 10000);

app.listen(3000,function(){
	
	console.log('listening on port 3000');
});
