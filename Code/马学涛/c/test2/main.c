#include<stdio.h>
#include<stdlib.h>
#include<string.h>
int main(){
char *string;
string = (char *)malloc(40*sizeof(char));
if(string == NULL){
fprintf(stderr,"Error-can`t find memory\n");
}
else{
strcpy(string,"just a test!\n");
}
printf("%s",string);
free(string);
return 0;
}
