'use strict';
const pict = require("./pic.js");
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let input = '';
let n = '';
let p = '';

function show() {
    console.log('1.正方形');
    console.log('2.三角形');
    console.log('3.菱形');
    console.log('4.回字');
    console.log('5.梯形');
    console.log('6.空心正方形');
    console.log('7.空心三角形');
    console.log('8.空心梯形');
}

// 输出选择界面
show();


var pic = new pict(0, 0);

rl.on('line', (content) => {
    input = content;
    if (!(input in num) || input == '.exit') {
        rl.close();
    }
    rl.question('请输入行数:', content => {
        n = content;
        rl.question('填充图案为:', content => {
            p = content
            pic.n = n;
            pic.p = p;
            switch (input) {
                case '1':
                    pic.Square();
                    break;
                case '2':
                    pic.Triangle();
                    break;
                case '3':
                    pic.Diamond();
                    break;
                case '4':
                    pic.Hui();
                    break;
                case '5':
                    pic.Trapezoid();
                    break;
                case '6':
                    pic.spanSquare();
                    break;
                case '7':
                    pic.spanTriangle();
                    break;
                case '8':
                    pic.spanTrapezoid();
                    break;
            }
            show();
        })
    })
}).on('close', () => {
    process.exit(0);
})