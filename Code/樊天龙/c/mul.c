#include <stdio.h>
int main()
{
    //外层循环循环行
    for(int i=1;i<=9;i++){
	//内层循环循环列
        for(int j=1;j<=i;j++){
	    //输出
	    printf("%d*%d=%d\t",i,j,i*j);
	}
	//换行
	printf("\n");
    }
    return 0;
}
