#include<stdio.h>
#include"max.h"
#include"min.h"
int main(){
int a=9,b=8;
int c=max(a,b);
int d=min(a,b);

printf("max:%d\nmin:%d\n",c,d);
return 0;
}
