#include<stdio.h>
#include<stdlib.h>
#include"calculat.h"
int main(){
int a=1,b,c,d;
float e;
while (a){
	printf("-----------------------\n");
	printf("1.加法\n");
	printf("2.减法\n");
	printf("3.乘法\n");
	printf("4.除法\n");
	printf("0.退出\n");
	printf("-----------------------\n");
	scanf("%d",&a);
	switch(a){
		case 1:
			scanf("%d%d",&b,&c);
			d = add(b,c);
			printf("%d+%d=%d\n",b,c,d);
			break;
		case 2:
			scanf("%d%d",&b,&c);
			d = sub(b,c);
			printf("%d-%d=%d\n",b,c,d);
			break;
		case 3:
			scanf("%d%d",&b,&c);
			d = mul(b,c);
			printf("%d*%d=%d\n",b,c,d);
			break;
		case 4:
			scanf("%d%d",&b,&c);
			e = div1(b,c);
			printf("%d/%d=%.2f\n",b,c,e);
			break;
		default:
			a = 0;break;
		}	
}

return 0;}
