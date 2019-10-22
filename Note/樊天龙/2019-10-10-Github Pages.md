## 一、简介

Jekyll 是一个简单的博客形态的静态站点文本转换引擎,Jekyll会帮你套入一个或一系列的布局中,最终生成的静态页面就是你的成品了。可以使用 GitHub 的免费托管服务来搭建你的项目页面、博客或者网站(Github Pages)，而且是**完全免费**的。

Github Pages的服务虽然是免费的，但是也有一些限制：

- 仓库空间不大于1G
- 每个月的流量不超过100G
- 每小时更新不超过 10 次

## 二、本地环境搭建
如果不要本地测试的话可以不搭建。
* Ruby（including development headers, Jekyll 2 需要 v1.9.3 及以上版本，Jekyll 3 需要 v2 及以上版本）
* RubyGems
* NodeJS, 或其他 JavaScript 运行环境（Jekyll 2 或更早版本需要 CoffeeScript 支持）。
* Python 2.7及以上版本
### 1、Ruby安装
安装Ruby:sudo apt-get install ruby-full
查看Ruby版本:ruby -v
### 2、RubyGems安装
安装RubyGems:sudo gem install mygem
升级RubyGems: sudo gem update --system
### 3、NodeJS安装
安装NodeJS:sudo apt-get install nodejs
### 4、Python安装
安装Python:sudo apt-get install python3
### 5、Jekyll安装
使用RubyGems安装 Jekyll:sudo gem install jekyll
查看Jekyll版本:gem list jekyll
升级Jelyll:gem update jekyll

## 三、目录结构

| 文件 / 目录   | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| `_config.yml` | 保存[配置](http://jekyllcn.com/docs/configuration/)数据。很多配置选项都可以直接在命令行中进行设置，但是如果你把那些配置写在这儿，你就不用非要去记住那些命令了。 |
| `_posts`      | 这里放的就是你的文章了。文件格式很重要，必须要符合: `YEAR-MONTH-DAY-title.MARKUP`。 [永久链接](http://jekyllcn.com/docs/permalinks/) 可以在文章中自己定制，但是数据和标记语言都是根据文件名来确定的。 |
## 四、查看Github Pages

### 1.本地查看
启动Jkeyll服务:jekyll serve
在浏览器输入:localhost:4000
### 2.在线查看

文章写作完毕，存储在_posts中，向Github Pages推送

在浏览器输入:http://Github用户名.github.io