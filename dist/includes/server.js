const http = require('http');
const port = 3000;
const path = require('path');
const fs = require('fs');

http.createServer(function(request, response) {
	console.log('request - ', request.url);

	let filePath = '.' + request.url;
	if(filePath == './') filePath = './index.html';

	const extname = String(path.extname(filePath)).toLowerCase();
	const mimeTypes = {
		'.html': 'text/html'
	};

	const contentType = mimeTypes[extname] || 'text/plain';

	fs.readFile(filePath, function(error, content)
	{
		if(error) {
			if(error.code == 'ENOENT')
			{

			}
			else {

			}
		} else {
			response.setHeader('Access-Control-Allow-Origin', '*');
			response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
			response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
			response.setHeader('Access-Control-Allow-Credentials', true);
			response.setHeader('Content-Type', contentType)
			response.end(content, 'utf-8');
		}
	});

}).listen(port);

console.log("Server running at localhost:" + port);
