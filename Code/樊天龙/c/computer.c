
#include <stdio.h>

//加法
float add(float num1,float num2)
{
     return num1+num2;
}
//减法
float sub(float num1,float num2)
{
     return num1-num2;
}
//乘法
float mul(float num1,float num2)
{
    return num1*num2;
}
//除法
float div(float num1,float num2)
{
    return num1/num2;
}
//主函数
int main()
{
    //声明两个运算数
    float num1,num2;
    //声明运算符
    char op;
    //打印输入提示
    printf("只支持两个运算数的加减乘除四则运算!");
    printf("例:'50+50',按下回车即可得到运算结果\n");
    //用户输入
    scanf("%f%c%f",&num1,&op,&num2);
    //判断运算符，调用对应运算函数，并输出结果
    if(op == '+'){
       float result =  add(num1,num2);
       printf("运算结果为:%.2f",result);
    } else if (op == '-'){
       float result = sub(num1,num2);
       printf("运算结果为:%.2f",result);
    } else if (op == '*') {
       float result =  mul(num1,num2);
       printf("运算结果为:%.2f",result);
    } else {
       if(num2==0){
           printf("被除数不能为0!");
	   return 0;
       }
       float result = div(num1,num2);
       printf("运算结果为:%.2f",result);
    }
}
