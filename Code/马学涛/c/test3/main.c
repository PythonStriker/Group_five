#include<stdio.h>
#include<stdlib.h>
#include<string.h>

int max(int a,int b){
if(a>b){
return a;}
else{
return b;}}


int main(){
int a,b;
scanf("%d %d",&a,&b);
int c = max(a,b);
printf("%d\n",c);
return 0;
}
