const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port= 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    var myreads = fs.createReadStream(__dirname+'/index.txt','utf8');
    myreads.pipe(res);
})

server.listen(port,hostname,()=>{
    console.log("server is running");
});