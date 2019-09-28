'use strict';
let str = '';
var i,j,k,z;
console.log("正方形:")
for ( i = 0;i<5;i++){
    for ( j=0;j<5;j++) {
        str+='* ';
    }
    str+='\n';
}
console.log(str);
str='';
console.log("三角形:");
for ( i=0;i<=5;i++){
    for( j=0;j<=5-i;j++){
        str+=' ';
    }
    if(i==0){z=0;}
    else{z=2*i;}
    for ( k=0;k<=z;k++){
        str+='#';
    }
    str+='\n';
}
console.log(str);
str = '';
console.log('菱形:');
for(i=0;i<=5;i++){
    for( j=0;j<=5-i;j++){
        str+=' ';
    }
    if(i==0){z=0;}
    else{z=2*i;}
    for ( k=0;k<=z;k++){
        str+='#';
    }
    str+='\n';
}
for(i=0;i<=5;i++){
    z=i;
    for( j=0;j<=z;j++){
        str+=' ';
    }
    if (5-i==0){z=5-i;}
    else{z=2*(5-i);}
    for ( k=0;k<=z;k++){
        str+='#';
    }
    str+='\n';
}
console.log(str);
str = '';

console.log("回字:");
z = Math.floor(7/4);
for(i=0;i<7;i++){
    if(i==0||i==6){
        for (j=0;j<7;j++){
            str+='# '
        }
    }else if(i==(z+1)||i==2*(z+1)){
    for(j=0;j<7;j++){
        if (j==0||(j>=(z+1)&&j<=2*(z+1))||j==6){
            //console.log(j);
            str+='# ';
            }
        else{str+='  ';}
    }}
    else if(i>(z+1)&&i<2*(z+1)){
        for(j=0;j<7;j++){
            if (j==0||j==6||j==(z+1)||j==2*(z+1)){
                str+='# ';
            }
            else{str+='  ';}
    }}
    else{
        for(j=0;j<7;j++){
            if(j==0||j==6){
                str+='# ';
            }
            else{str+='  ';}
        }
    }
    str+='\n';
}
console.log(str);
str = '';

console.log('梯形:');
for ( i=0;i<8;i++){
    if (i>=3){
    for( j=0;j<8-i;j++){
        str+=' ';
    }
    if(i==0){z=0;}
    else{z=2*i;}
    for ( k=0;k<=z;k++){
        str+='#';
    }
    str+='\n';}
    else{continue;}
}
console.log(str);
str = '';