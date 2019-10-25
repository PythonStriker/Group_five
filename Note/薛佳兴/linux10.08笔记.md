[TOC]
### linux 基本命令
1.[-选项]，[命令],[参数]
>ls -a可以看到所有文件包括隐藏的(文件名带点的)
>ls -l所有信息(有修改的时间 操作性等等)
>ls -lh人性化的所有信息(文件的大小用更简便的方式呈现出来)
>''-'' 代表文件    d  代表目录     l   代表软链接
>ls -l /etc查询的是这个目录下的所有信息
>ls -ld /etc 查询的是这个目录的信息
>ls -i 查看他的id
>mkdir  /home/xuejiaxing/asd （此处有空格）/home/xuejiaxing/dsa 可以同时创建多个文件
>查看当前所在目录
>pwd
>2.删除
>rm  文件名  可以直接删除
>rm -f 强制删除
>rm -r删除目录
>rm -rf强制删除目录
>3.复制
>复制文件
>
>>cp /home/xuejiaxing/asd/1.txt (此处有空格) /home/xuejiaxing     把1.txt文件复制到了xuejiaxing的目录下
>>cp /home/xuejiaxing/asd/1.txt (此处有空格) /home/xuejiaxing /2.txt    把1.txt文件复制到了xuejiaxing的目录下并且把名字改成了2.txt
>>cp -r 不仅会复制还会覆盖他的修改时间 就是和他一模一样
>复制目录
>>cp -r 和上面同理只不过是他复制的是目录而不是文件
>>cp -rp 不仅会复制还会覆盖他的修改时间 就是和他一模一样
>>cp -rp /home/xuejiaxing/asd      /home xuejiaxing/dsa   可以把他复制过来但是文件名却改成了dsa
>4.剪切
>mv   
>可以修改文件名 或者是  目录的名称 mv cangjing  boduo
>剪切无论是对于文件 或者目录都是mv
>

### linux 文件处理命令
1.touch可以创建一个文件    touch 1.txt
2.看一个文件的前7行 head -n 7 文件名 
3.看一个文件的后几行  service -n 7  文件名
4.cat -n 文件名   可以看到显示行号的文件
5.如果你想看的文件比较大的时候 用more或者less
> more /less+ 文件名 用空格或者f来往下看   但是more不能往上看所以我们用less可以选用pgup   pgdown 往上看
> 

### linux 链接命令
1.包括软链接(实则就是生成一个快捷方式)和硬链接(设则就是对他就行了拷贝而且还会和源文件一起进行实时的更新硬链接只能指向文件但是软链接却可以指向文件或者目录)
2.软链接的特点:(ln -s 你想操作的文件 放到你想要的位置可以生成软链接)
>>可以跨分区用l来标记权限 而且权限为3个rwx
>>本身很小仅仅是符号进行的连接
>>箭头指向源文件
3.硬链接的特点(ln 你想操作的文件 放到你想要的位置可以生成硬链接)切记只能操作目录:
>>不能跨分区
>>不能针对目录使用 也就是说只能对文件进行的使用
>>源文件丢失并不影响它所生成的硬链接
>>和源文件可以进行同步的更换新
>>

### linux 权限管理命令
1.权限 有三种   所有者(u)   所属组(g)   其他人(o)  要想更改权限 只有管理员或者所有者来改变他
2.第一个命令 chmod u+x 文件名  就是给你的所有者选项加上了一个x的权限
3.chmod g+x,o-r
4.chmod g=rwx
| 代表字符 | 权限 | 对文件的含义 | 对目录的含义 | 所代表的值|
| :---:| :---: | :---: | :---: | :---: |
| r | 读权限 | 可以查看文件内容 | 可以列出目录的内容 | 4 |
| w | 写权限 | 可以修改文件内容 | 可以在目录中创建删除文件 | 2 |
| x | 执行权限 | 可以执行文件 | 可以进入目录 | 1 |
所以也可以用不同的数值来进行权限的操作
chmod 777 -->   rwx-rwx-rwx
5.

| 类型 | r | w | x |
| :---:| :---: | :---: | :---: |
| 文件 | 像cat/more/head/tail | vim 可以修改内容 | 像script 命令 |
| 目录 | ls查看目录 | 创建删除文件必须对文件目录有着写的权限 | cd进去 |
有一点要注意的是你要想删除某个文件  必须对它所在的 ！！ 目录 ！！  有着写权限才可以，对那个文件本身有着写权限不是可以删掉他的基础！！！

6.改变文件的所有者  chown xjx 文件名        把文件的所有者改为xjx
7.改变文件的所属组  chgrp 组名   用户  把用户的所有祖改成祖名


### linux 文件搜索命令
1.语法   find [搜索范围] [匹配条件] （最好是根目录）
2.匹配条件 
>>  -name  (以姓名进行查找)   -iname  (以姓名进行查找，并且不区分大小写)    -size(以文件大小进行查找 )
>>  * XXX * 只要是包含XXX的东西都查找出来      *XX 要以xx结尾       XX* 要以xx开头   xx??? 文豪代表三个单字府并且以xx开头
>>  -amin  访问时间    -cmin文件属性    -mmin 文件内容
>>  -a  两个条件都要满足   -o   两个条件满足一个 (例：find    /home   -size  +16862  -a   -size   -554567  查找大于16862小于55467的文件)  +代表大于   -代表小于    = 就是等于
>>  	-type   -f 文件 /  -d目录  /-l  软连接     (find 	/home   -name  init*  -a  -type   -d )
>>  	-exec  / -ok   (并且)    例：   find  /home		-name	init*	-exec	ls	-l    {}    \;（注意     -exec   .....      {} 	\;是固定格式）

3.locate寻找
>>他是一个文件资料库   会很快的寻找和windows下的everything的软件一样   只是你再用他的时候最好进行一个更新(updatedb)

4.grey寻找
>> grep  搜寻的东西    位置



### linux 用户管理命令

1.useradd 添加一个用户 顺便给他一个密码  不然别人登你的主机时没有密码无法连接  passwd 用户名  在填写密码
>>useradd   -u  (增加他的组id)   -g(所属组)   -G(附加组)   -c ''(说明)   -d(指定家目录)     用户名
>>usermod   -g    你想要改的祖名   用户名(usermod和useradd用法一样可以自己多敲敲)

2.groupadd  添加一个组
>>groupmod -n 你想要的组名    现在的组名
>>__gpasswd    -a   用户   组   (改变这个用户的组)  很重要!!!__

这里有一个问题就是你如果身份是useradd加的 比如是xiaoming     那默你现在想删除一个由dapeng用户创建的文件夹    
（1）首先你可以把小名的初始组变为dapeng           代码:gpasswd   -a   xiaoming    dapeng（daoeng用户他的初始组也是dapeng）第二种解决方法  在各个文件夹的所有者变为son  chown  son   文件    第三种  给son    w权限
(2) 其次你得对这个文件夹的上一级目录有一个w的权限   你对于dapeng来说是other  所以  把other的权限改为w  但是你现在已经加入了他的组  肯定也就可以修改   因为这个文家使他创的
3.who 或者  w   查看用户的数量


### linux 压缩解压缩

 1.linux没有rar的解压  和 windows通用的是zip
 2.解压zip文件
 >> 第一种压缩格式  .gz
 >> gzip  文件名(只能压缩文件)   --->     成为压缩文件
 >> gunzip   /     gzip   -d   文件名     ---->   解压缩
 >> 有一个问题需要注意下   压缩文成你的源文件就会不见   就只剩下压缩包    

3.tar    
>>  -c  打包     -v   显示详细信息    -f  制定文件名    -z 打包同时压缩
>>  tar  -cvf   [压缩文件名]    目录
>>  tar   -cvf   1.tar   asd --->  成为1.tat包
>>  然后在  gzip   1.tar   --->   成为1.tar.gz   压缩包
>>  -x  解包    -f指定文件名   


### linux 网络
>>先查看网络信息
>>ifconfig     
  >>eno1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
   >>     inet 192.168.1.20  netmask 255.255.255.0  broadcast 192.168.1.255
   >>      inet6 fe80::56ad:5eb5:9f88:2a51  prefixlen 64  scopeid 0x20<link>
  >>  ether ac:e2:d3:5a:d5:45  txqueuelen 1000  (以太网)
  >> RX packets 44802  bytes 63266570 (63.2 MB)
 >> RX errors 0  dropped 0  overruns 0  frame 0
>>  TX packets 25858  bytes 1939001 (1.9 MB)
>> TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

>>eno1为你的网卡
>>1._修改ip  ifconfig     eth0     ip(你想修改的ip)
>>设置网关（用route查看）
>>route del default  gw  网关号 (删除)
>>oute add default  gw  网关号
>>修改mac地址
>>1.关闭网卡   ifconfig   eno1  down
>>ifconfig  eno1   hw  ether   00:1D:1C:1D:1E
>>2.开启网卡   ifconfig   eno1  up
>>修改DNS
>>/etc/etcresolvconf

### linux 互相连接
>>scp  -r  root@192.168.1.155:/home.guo/xjx       /home/xuejiaxing/桌面 (把别人的东西放到我的电脑上来
>>scp  -r  home/xuejiaxing/桌面    root@192.168.1.155:/home.guo/xjx  把自己的东西房贷别人那里
