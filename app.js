var express = require('express');
var app = express();
var path = require('path');

// ตั้งค่า เพื่อให้ express ทำการ render view ที่โฟลเดอร์ views
// และใช้ template engine เป็น jade
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(5555, function() {
	console.log('Program running on port : 5555');
});