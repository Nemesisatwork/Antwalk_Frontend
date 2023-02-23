const http = require('http');

var reqOption1={
    host:'localhost',
    port:3000,
    path:'/index.html'
}

var reqOption2={
    host:'localhost',
    port:3000,
    path:'/index.json'
}

var callback=function(res){
    var info='';
    res.on('date',function(data){
        info += data;
    });
    res.on('end',function(){
        console.log(info);
    })
}

var req = http.request(reqOption2,callback);
req.end();