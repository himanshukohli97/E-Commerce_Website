var http = require('http');
var url = require('url');
var fs = require('fs');


function readAndServe(path, contentType, response) 
{
  fs.readFile(path, function(error, data) {
    if (error) {
      throw error;
    }

    response.writeHead(200, {'Content-type': contentType});
    response.write(data);
    response.end();
  });
}




function readTasks(callback) 
{
  fs.readFile('product', function(error, contents) 
  {
    if (error) 
	{
      throw error;
    }

    var products;
    if (contents.length === 0) 
	{
      products = []; 
    } 
	else 
	{
      products = JSON.parse(contents);
    }
    callback(products);
  });
}






http.createServer(function(request, response) 
{
  var pathname = url.parse(request.url).pathname;

  if (request.method === "GET") {
    if (pathname === "/") {
      readAndServe('abc.html', 'text/html', response);
    }  else if (pathname === "/abc.js") {
      readAndServe('.' + pathname, 'text/javascript', response);
    }  else if (pathname === "/product") {
      readTasks(function(tasks) {
        response.writeHead(200, {'Content-type': 'application/json'});
        response.write(JSON.stringify(tasks));
        response.end();
      });
    } else {
      response.end();
    }
  }  
  else {
    response.end();
  }
}).listen(8000, '127.0.0.1');

console.log('Running on 127.0.0.1:8000');
