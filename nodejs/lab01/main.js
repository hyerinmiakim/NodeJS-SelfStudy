var http = require('http'); 
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    console.log(__dirname + url); //node main.js 실행했을 때, 로드한 html파일 경로 출력
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);