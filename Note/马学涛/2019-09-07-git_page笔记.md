#1. linux下安装所需工具
>* Ruby
>> sudo apt-get install ruby-full 安装Ruby
>* Node.js 
>> sudo apt-get install nodejs
>> sudo apt-get install npm
>* Jekyll
>> gem install jekyll
>* Bundler
>> gem install bundler
#2. 在github上建立远程代码库
>* 命名格式需要username.github.io
#3. 随便找一家好看的远程克隆
>* 我用的黄玄大仙的
>> git clone $ git clone git@github.com:Huxpro/huxblog-boilerplate.git blog
#4. 进行配置修改
>* 大体为改动_config.yml文件
#5. 在本地测试站点是否可用
>* cd到blog中 jekyll serve --no-wathc 不添加检测数据的开启服务，避免提交代码时提交过多美有用的数据。
#6. 将更改好的文件提交到远程仓库上
>* git add .
>	git commit -m ''
>	git push origin master


#参考文献
[Ruby菜鸟教程](https://www.runoob.com/ruby/ruby-installation-unix.html)
[Node.js菜鸟教程](https://www.runoob.com/nodejs/nodejs-install-setup.html)
[简书](https://www.jianshu.com/p/9f198d5779e6)
