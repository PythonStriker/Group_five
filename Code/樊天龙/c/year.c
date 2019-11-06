#include <stdio.h>
int main()
{
    //初始化年份变量
    int year;
    //提示语
    printf("请输入四位年份:");
    //用户输入
    scanf("%d",&year);
    //判断
    if(year%4==0 && year%400==0){
       printf("%d年是闰年\n",year);
    }else{
       printf("%d年不是闰年\n",year);
    }
    return 0;
}
