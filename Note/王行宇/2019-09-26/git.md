---
title: "Git基础学习"
catalog: true
date: 2019-09-19 10:51:24
subtitle: "基础学习"
header-img: "Demo.png"
tags:
- Git
- Blog
catagories:
- Hexo
---

# 什么是Git

Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。

Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。

Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。

## Git 与 SVN 区别
Git 不仅仅是个版本控制系统，它也是个内容管理系统(CMS)，工作管理系统等。
Git 与 SVN 区别点：

- 1、Git 是分布式的，SVN 不是：这是 Git 和其它非分布式的版本控制系统，例如 SVN，CVS 等，最核心的区别。

- 2、Git 把内容按元数据方式存储，而 SVN 是按文件：所有的资源控制系统都是把文件的元信息隐藏在一个类似 .svn、.cvs 等的文件夹里。

- 3、Git 分支和 SVN 的分支不同：分支在 SVN 中一点都不特别，其实它就是版本库中的另外一个目录。

- 4、Git 没有一个全局的版本号，而 SVN 有：目前为止这是跟 SVN 相比 Git 缺少的最大的一个特征。

- 5、Git 的内容完整性要优于 SVN：Git 的内容存储使用的是 SHA-1 哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏。 

* * *

# Git 安装配置
在使用Git前我们需要先安装 Git。Git 目前支持 Linux/Unix、Solaris、Mac和 Windows 平台上运行。

Git 各平台安装包下载地址为：http://git-scm.com/downloads

Linux 平台上安装
Git 的工作需要调用 curl，zlib，openssl，expat，libiconv 等库的代码，所以需要先安装这些依赖工具。

在有 yum 的系统上（比如 Fedora）或者有 apt-get 的系统上（比如 Debian 体系），可以用下面的命令安装：

### 各 Linux 系统可以使用其安装包管理工具（apt-get、yum 等）进行安装：

```Debian/Ubuntu
Debian/Ubuntu Git 安装命令为：

$ apt-get install libcurl4-gnutls-dev libexpat1-dev gettext \
  libz-dev libssl-dev

$ apt-get install git

```
- - -
```Centos/RedHat
Centos/RedHat 安装命令为：

$ yum install curl-devel expat-devel gettext-devel \
  openssl-devel zlib-devel

$ yum -y install git-core

```
### 源码安装
我们也可以在官网下载源码包来安装，最新源码包下载地址：https://git-scm.com/download

安装指定系统的依赖包：
```
########## Centos/RedHat ##########
$ yum install curl-devel expat-devel gettext-devel \
  openssl-devel zlib-devel

########## Debian/Ubuntu ##########
$ apt-get install libcurl4-gnutls-dev libexpat1-dev gettext \
  libz-dev libssl-dev
解压安装下载的源码包：

$ tar -zxf git-1.7.2.2.tar.gz
$ cd git-1.7.2.2
$ make prefix=/usr/local all
$ sudo make prefix=/usr/local install
```
- - -

**由于我用的linux系统，其他系统安装方法不做过多记录，其他系统的安装，请参考菜鸟教成RUNOOB上的教程**

- - -

安装完成后，还需要最后一步设置，在命令行输入：
```
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```
因为Git是分布式版本控制系统，所以，每个机器都必须自报家门：你的名字和Email地址。你也许 会担心，如果有人故意冒充别人怎么办？这个不必担心，首先我们相信大家都是善良无知的群众，其次，真的有冒充的也是有办法可查的。

注意git config命令的--global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。配置完用户信息后，想要使用git的话，首先要先理解几个概念

# Git 工作区、暂存区和版本库
# 基本概念
我们先来理解下Git 工作区、暂存区和版本库概念
```
工作区：就是你在电脑里能看到的目录。
暂存区：英文叫stage, 或index。一般存放在 ".git目录下" 下的index文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。
版本库：工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。
```
在我刚一看到这些概念的时候，可谓是一脸蒙蔽，着说的到底是个啥？要研究这几个名词到底什么概念，首先建立个仓库，搞一搞Git的代码就能理解了。
- - -

# Git 创建仓库
这是深入了解Git的第一步，我们用Git的目的无非就是想要寻求一个简单的方式来管理代码，那么Git仓库就是我们需要的东西。
## git init
Git 使用 git init 命令来初始化一个 Git 仓库，Git 的很多命令都需要在 Git 的仓库中运行，所以 git init 是使用 Git 的第一个命令。
在执行完成 git init 命令后，Git 仓库会生成一个 .git 目录，该目录包含了资源的所有元数据，其他的项目目录保持不变（不像 SVN 会在每个子目录生成 .svn 目录，Git 只在仓库的根目录生成 .git 目录）。

```git
git init : 在当前目录下初始化仓库 
git init <dir_name> ：到指定目录初始化仓库
```
初始化后，会在 <dir_name>目录下会出现一个名为 .git 的目录，所有 Git 需要的数据和资源都存放在这个目录中，这个<dir_name>目录就是所谓的仓库了。
既然有了仓库，那么下一步就是要将我们需要通过git管理的东西方进去了，没错，就是把那个文件或目录扔进仓库，很简单、很暴力吧。当然，也不是仍进去就高枕无忧了，那可就太简单了，逼格何来？
和把大象放到冰箱需要3步相比，把一个文件放到Git仓库只需要两步。

1. 第一步，用命令git add告诉Git，把文件添加到仓库：
```
$ git add [file]
```
执行上面的命令，没有任何显示，这就对了，Unix的哲学是“没有消息就是好消息”，说明添加成功。

2. 第二步，用命令git commit告诉Git，把文件提交到仓库：
```
$ git commit -m "<desc_word>"
```
-m后面输入的是本次提交的说明，可以输入任意内容，当然最好是有意义的，这样你就能从历史记录里方便地找到改动记录。

这个时候就可以来谈一谈工作区、暂存区、版本库这几个概念了。
- - -

### 工作区（Working Directory）

就是你在电脑里能看到的目录，敲入git init代码的那个目录。

### 版本库（Repository）
工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。
Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支master，以及指向master的一个指针叫HEAD。

## git的本地仓库玩法
前面讲了我们把文件往Git版本库里添加的时候，是分两步执行的：
第一步是用git add把文件添加进去，实际上就是把文件修改添加到暂存区；
第二步是用git commit提交更改，实际上就是把暂存区的所有内容提交到当前分支。
因为我们创建Git版本库时，Git自动为我们创建了唯一一个master分支，所以，现在，git commit就是往master分支上提交更改。

可以简单理解为，需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。

关于个git add 和git commit的操作，如果文件有了改动，不add一下就直接commit，这样传的还是第一次add到暂存区的文件，也就是说，每次改动后都要add一下，再commit。

万一我突然发现写错了，不想要我的修改怎么办，怎么撤销修改？很简单，如果没有add到暂存区，请使用git checkout -- file，这个命令可以丢弃工作区中的修改，实际上就是用你暂存区存的未修改前的文件来替换工作去中修改后的文件。

那么问题来了，我add到暂存区了咋办？这个也好办，可以使用git reset HEAD file 加上 git checkout -- file 组合来处理，也可以直接 git checkout HEAD file 直接完成。

再来个难一点的，commit了咋办？那就要回滚版本了，git log查看一下commit的id，把那串哈希出来的串串弄他几个字符，一般都是前面截取个5、6、7、8位，复制，使用代码git reset --hard [commit ID]回滚到你想到的版本。其实这个操作不仅能往前回滚，万一你又想撤销这个回滚，那么就粘上那个版本号就行了，那个版本号可以通过看命令历史来找到 git reflog。

在Git中，删除也是一个修改操作，我不想要工作区文件了，直接rm就好，不想要暂存区文件，那就得git rm --cached file了 如果从版本库都删掉，直接把这个修改的操作提交就完事了，确实要从版本库中删除该文件，那就用命令git rm删掉，并且git commit。

本地仓库玩的还行，那么就要玩玩远程了。

## 远程仓库玩法
首先，登陆GitHub，创建一个新的仓库，然后可以选择克隆到本地，要克隆一个仓库，首先必须知道仓库的地址，然后使用git clone命令克隆，Git支持多种协议，包括https，但通过ssh支持的原生git协议速度最快。
如果是克隆下来的仓库，则不需要进行仓库关联的操作，如果不是克隆而来，则需要将本地仓库与远程仓库关联。
```
git remote add origin git@github.com:michaelliao/learngit.gi
```
添加后，远程库的名字就是origin，这是Git默认的叫法，也可以改成别的，但是origin这个名字一看就知道是远程库。把本地库的内容推送到远程，用git push命令，实际上是把当前分支master推送到远程。

由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。

分布式版本系统的最大好处之一是在本地工作完全不需要考虑远程库的存在，也就是有没有联网都可以正常工作，而SVN在没有联网的时候是拒绝干活的！当有网络的时候，再把本地提交推送一下就完成了同步，真是太方便了！

## 分支管理

Git鼓励大量使用分支：

查看分支：git branch

创建分支：git branch <name>

切换分支：git checkout <name>或者git switch <name>

创建+切换分支：git checkout -b <name>或者git switch -c <name>

合并某分支到当前分支：git merge <name>

删除分支：git branch -d <name>

当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。

解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交。

用git log --graph命令可以看到分支合并图。

Git分支十分强大，在团队开发中应该充分应用。

合并分支时，加上--no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而fast forward合并就看不出来曾经做过合并。

查看远程库信息，使用git remote -v；

本地新建的分支如果不推送到远程，对其他人就是不可见的；

从本地推送分支，使用git push origin branch-name，如果推送失败，先用git pull抓取远程的新提交；

在本地创建和远程分支对应的分支，使用git checkout -b branch-name origin/branch-name，本地和远程分支的名称最好一致；

建立本地分支和远程分支的关联，使用git branch --set-upstream branch-name origin/branch-name；

从远程抓取分支，使用git pull，如果有冲突，要先处理冲突。

rebase操作可以把本地未push的分叉提交历史整理成直线；

rebase的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。

## 标签管理
命令git tag <tagname>用于新建一个标签，默认为HEAD，也可以指定一个commit id；

命令git tag -a <tagname> -m "blablabla..."可以指定标签信息；

命令git tag可以查看所有标签。

命令git push origin <tagname>可以推送一个本地标签；

命令git push origin --tags可以推送全部未推送过的本地标签；

命令git tag -d <tagname>可以删除一个本地标签；

命令git push origin :refs/tags/<tagname>可以删除一个远程标签。

有些时候，你必须把某些文件放到Git工作目录中，但又不能提交它们，比如保存了数据库密码的配置文件啦，等等，每次git status都会显示Untracked files ...，有强迫症的童鞋心里肯定不爽。

好在Git考虑到了大家的感受，这个问题解决起来也很简单，在Git工作区的根目录下创建一个特殊的.gitignore文件，然后把要忽略的文件名填进去，Git就会自动忽略这些文件。

不需要从头写.gitignore文件，GitHub已经为我们准备了各种配置文件，只需要组合一下就可以使用了。所有配置文件可以直接在线浏览：https://github.com/github/gitignore

忽略文件的原则是：

忽略操作系统自动生成的文件，比如缩略图等；
忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如Java编译产生的.class文件；
忽略你自己的带有敏感信息的配置文件，比如存放口令的配置文件。