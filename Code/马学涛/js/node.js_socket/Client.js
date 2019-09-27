const net = require('net');
const readline = require('readline');
// 创建套接字和输入输出命令行
let rl = readline.createInterface({
// 调用std接口
    input:process.stdin,
    output:process.stdout
})
let username = '';
let client = new net.Socket();
console.log('-----------------------欢迎来到清纯女大学生XX群----------------------（可输入.exit退出）');
console.log('请输入用户名:');
// 链接
client.connect(8091,'localhost');
client.setEncoding('utf8');
client.on('data',(chunk)=>{
    if (chunk == '该用户名已被注册！'){
        username = '';
    }
    console.log(chunk);
})
client.on('error',(e)=>{
    console.log(e.message);
})
// 绑定输io流事件,获取输入输出字符
rl.on('line',(mes)=>{
    if(mes == '.exit'){
        process.exit();
    }
    if (username == ''){
        username = mes;
        client.write(username);
    }
    else{
    client.write(username + ' : ' + mes);}
})
