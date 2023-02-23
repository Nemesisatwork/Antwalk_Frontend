const fs = require('fs');

var myreads = fs.createReadStream(__dirname + '/read.txt','utf8');
var myWrites = fs.createReadStream(__dirname + '/read.txt','utf8');
myreads.pipe(myWrites);
myreads.on('data',function(chunk)
{
    console.log("new chunk received");
    console.log(chunk);
    myWrites.write(chunk);

});