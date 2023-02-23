const http  =require('http');
const url  =require('url');
const fs  =require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server=http.createServer((request,response)=> {
    
    var pathname=url.parse(request.url).pathname;
    
    console.log('request was made by '+pathname+' received');
    fs.readFile(pathname.substring(1),function(err,data)
                                    {
                                        if(err)
                                        {
                                            console.log(err);
                                            response.writeHead(404,{'Content-Type':'text/html'});
                                        }
                                        else
                                        {
                                            response.writeHead(200,{'Content-Type':'text/html'});
                                            response.write(data.toString());
                                        }
                                        response.end();
                                    });
    
}).listen(port);
console.log(`Server is running at http://${hostname}:${port}/`);