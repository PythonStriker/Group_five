const fs = require("fs");
const http = require("http");
const url = require("url");
const path = require("path");


let server = http.createServer(function (req,res) {
    res.writeHead(200,{
    "Content-type":"text/html;charset=utf-8"
});
    let root = path.resolve(process.argv[2] || '.');
    console.log(root);
    let pathname = url.parse(req.url).pathname;
    console.log(pathname);
    let fileUrl = path.normalize(path.join(root,pathname));
    console.log(fileUrl);
    fs.readFile(fileUrl,(err,data)=>{
        if (err){
            res.writeHead(404,{'Content-type':'text/html;charset=utf-8'});
            res.end("<h1>404 Not Found!</h1>")
        }
        else{
            res.end(data);
        }
    });
});
server.listen(8888,function () {
    console.log("Http Sever running on port 8888");
});