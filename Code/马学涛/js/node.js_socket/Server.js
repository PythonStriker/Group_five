const net = require('net');
// 创建服务器
let clientArr = [];
let nameList = [];
const server = net.createServer();
// 绑定链接事件
server.on('connection',(person)=>{
    var name = '';
    let data = '';
    let count = 0;
    let time = '';
    //console.log(clientArr.length);
    // 记录链接的进程
    person.id = clientArr.length;
    clientArr.push(person);
    //console.log(clientArr);
    person.setEncoding('utf8');
    // 客户socket进程绑定事件
    person.on('data',(chunk)=>{
        // 数据写入全部客户进程中\
        if (name == ''){
            name = chunk;
            if (nameList.includes(name)){
            person.write("该用户名已被注册！");
            name = '';
            }else{
            nameList.push(name);
            clientArr.forEach((val)=>{
                val.write('欢迎'+name+'加入群聊!\n');
        })}}
        else{
            clientArr.forEach((val)=>{
            time = new Date();
            data = chunk.slice(name.length+3,chunk.length);
            //console.log(data);
            //console.log(time.toString());
            val.write(name+' '+time.toString().slice(16,24)+' : '+data);})
        }
    })
    person.on('close',(p1)=>{
        clientArr[p1.id] = null;
        clientArr.forEach((val)=>{
            val.write( name+'已退出群聊！');
        })
    })
    person.on('error',(p1)=>{
        clientArr[p1.id] = null;
    })
});
server.listen(8091);
