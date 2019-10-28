---
title: "GitHub Page搭建个人Blog"
catalog: true
date: 2019-09-19 10:51:24
subtitle: "基础学习"
header-img: "Demo.png"
tags:
- GitHub Page
- Blog
catagories:
- Hexo
---

# GitHub Pages是什么？
GitHub Pages本用于介绍托管在GitHub的项目， 不过，由于他的空间免费稳定，用来做搭建一个博客再好不过了。

# 为什么选择GitHub Pages？
GitHub Pages有300M免费空间，搭建的博客可以很方便的进行管理，并且保存可靠；
GitHub 是趋势，GitHub上面有很多大牛，学IT的人应该尽早融入这样的环境，
程序员应该学会使用Git来管理项目，熟悉版本控制。
Github上有很多的开源项目，多学习学习，眼界会开阔很多

在GitHub上新建一个username.github.io的库，这个就是github提供的服务。
当选择了github page之后，那么就要选择使用什么模板来搭建blog了。

我选择的是HEXO

# HEXO
hexo是基于node.js的静态博客，官网也是搭建在GitHub上。

在你喜欢的路径下新建一个文件夹blog，用来存放博客的文件，在此文件夹中右键打开Git Bash
输入如下指令进行安装：
```
$ npm install -g hexo-cli
```
如果执行这条命令时长时间未成功，那么请先使用下面的命令将npm镜像源更改为国内的镜像，再执行上面的安装命令，因为国外的镜像源很有可能被墙了。
```
npm config set registry https://registry.npm.taobao.org
```
### 初始化hexo
```
$ hexo init hexo
```
这里会将Github上的hexo项目clone下来，得到hexo文件夹。
初始化成功后会在最后打印一行：INFO Start blogging with Hexo!
### 安装依赖文件
进入到hexo文件夹
```
$ cd hexo
```
安装依赖文件：
```
$ npm install
```
部署形成文件：
```
$ hexo generate
```
本地测试
```
$ hexo server
```
说明：hexo文件夹下一个_config.yml，我们称之为全局配置文件，在每个主题文件夹内还会有一个_config.yml文件，我们称之为主题配置文件。
用sublime text3或者notepad++等编辑器打开hexo文件夹下的_config.yml文件。
注意：配置文件中每个字段后面的冒号是英文格式的，且在其后要加一个空格再写值**
编辑最后面的deploy属性，加入代码：
type: git
repository: https://github.com/你的Github用户名/你的Github用户名.github.io.git
branch: master
### 部署到Github上
依次执行以下三条命令：
```
$ hexo clean #清除缓存 网页正常情况下可以忽略此条命令
$ hexo generate #生成静态页面至public目录
$ hexo deploy #将.deploy目录部署到GitHub
```
执行hexo deploy命令之后，如果最后一行打印出如下信息则表示部署成功
```
INFO Deploy done: git
```
然后你再去访问你创建的Github pages地址，也就是：你的Github用名.github.io，即可看到你本地的hexo项目已经被部署到github上去了。此时博客的默认主题是landscape，即上面本地测试时的样子。

hexo支持主题的选择，在hexo官网上能下载到别人配置好的主题，直接从clone到本地使用。
### hexo的站点配置
编辑hexo目录下的_config.yml文件，具体配置如下：
#### Site 站点信息配置，根据自己的需要进行修改
title: Zeng's Blog #站点名，会在浏览器页面标签左上角显示
subtitle: Love Coding,Enjoy Life #副标题
description: zeng #对站点的描述，给搜索引擎看的，可以自定义
author: zeng #网站作者
language: zh-Hans #网站语言
timezone: Asia/Shanghai #时区
avatar: /images/logo.jpg #网站logo，会在浏览器页面标签左上角显示​
#### theme
theme: next #博客主题
#### deploy
deploy:
type: git
repository: git@github.com:你的Github用户名.github.io.git
branch: master

这些基本配置好之后，在source/_posts中写好md格式的博文，通过hexo depoly推送到site上即可。