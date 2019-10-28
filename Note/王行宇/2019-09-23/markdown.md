---
title: "Markdown基础学习"
catalog: true
date: 2019-09-19 10:51:24
subtitle: "基础学习"
header-img: "Demo.png"
tags:
- Markdown
- Blog
catagories:
- Hexo
---
Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。

Markdown 语言在 2004 由约翰·格鲁伯（英语：John Gruber）创建。

Markdown 编写的文档可以导出 HTML 、Word、图像、PDF、Epub 等多种格式的文档。

Markdown 编写的文档后缀为 .md, .markdown。

# Markdown 应用

Markdown 能被使用来撰写电子书，如：Gitbook。

当前许多网站都广泛使用 Markdown 来撰写帮助文档或是用于论坛上发表消息。例如：GitHub、

简书、reddit、Diaspora、Stack Exchange、OpenStreetMap 、SourceForge等。
- - -
# Markdown 学习

## Markdown 标题

Markdown 标题有两种格式。
1. 使用 = 和 - 标记一级和二级标题
= 和 - 标记语法格式如下：

```markdown
我展示的是一级标题
=================
我展示的是二级标题
-----------------
```
2. 使用 # 号标记
使用 # 号可表示 1-6 级标题，一级标题对应一个 # 号，二级标题对应两个 # 号，以此类推。
```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```
- - -

## Markdown 段落

Markdown 段落没有特殊的格式，直接编写文字就好，段落的换行是使用两个以上空格加上回车。
- - -

## 字体

Markdown 可以使用以下几种字体：
```markdown
*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___
```
- - -

## 分隔线
你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：
```markdown
***

* * *

*****

- - -

----------
```
- - -

## 删除线
如果段落上的文字要添加删除线，只需要在文字的两端加上两个波浪线 即可，实例如下：
```markdown
RUNOOB.COM
GOOGLE.COM
~~BAIDU.COM~~
```
- - -

## 下划线
下划线可以通过 HTML 的 <u> 标签来实现：
```markdown
<u>带下划线文本</u>
```
- - -

## 脚注
脚注是对文本的补充说明。

Markdown 脚注的格式如下:
```markdown
[^要注明的文本]
```
- - -

以下实例演示了脚注的用法：
```markdown
创建脚注格式类似这样 [^RUNOOB]。

[^RUNOOB]: 菜鸟教程 -- 学的不仅是技术，更是梦想！！！
```
- - -

## Markdown 列表
Markdown 支持有序列表和无序列表。

无序列表使用星号(*)、加号(+)或是减号(-)作为列表标记：
```markdown
* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项


- 第一项
- 第二项
- 第三项
```
- - -

有序列表使用数字并加上 . 号来表示，如：
```markdown
1. 第一项
2. 第二项
3. 第三项
```
- - -

## 列表嵌套
列表嵌套只需在子列表中的选项添加四个空格即可：
```markdown
1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素
```

## Markdown 区块
Markdown 区块引用是在段落开头使用 > 符号 ，然后后面紧跟一个空格符号：
```markdown
> 区块引用
> 菜鸟教程
> 学的不仅是技术更是梦想
```
另外区块是可以嵌套的，一个 > 符号是最外层，两个 > 符号是第一层嵌套，以此类推退：
```markdown
> 最外层
> > 第一层嵌套
> > > 第二层嵌套
```
- - -

## Markdown 链接
链接使用方法如下：
```markdown
[链接名称](链接地址) 如：这是一个链接 [菜鸟教程](https://www.runoob.com)

或者

<链接地址> 如： <https://www.runoob.com>

链接也可以用变量来代替，文档末尾附带变量地址：
这个链接用 1 作为网址变量 [Google][1]
这个链接用 runoob 作为网址变量 [Runoob][runoob]
然后在文档的结尾为变量赋值（网址）

  [1]: http://www.google.com/
  [runoob]: http://www.runoob.com/
```
- - -

## Markdown 图片
Markdown 图片语法格式如下：
``` markdown
![alt 属性文本](图片地址) 如 ：![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png)

![alt 属性文本](图片地址 "可选标题") 如：![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png "RUNOOB")

当然，你也可以像网址那样对图片网址使用变量:

这个链接用 1 作为网址变量 [RUNOOB][1].
然后在文档的结尾位变量赋值（网址）

[1]: http://static.runoob.com/images/runoob-logo.png

Markdown 还没有办法指定图片的高度与宽度，如果你需要的话，你可以使用普通的 <img> 标签。
<img src="http://static.runoob.com/images/runoob-logo.png" width="50%">

```
- - -

## Markdown 表格
Markdown 制作表格使用 | 来分隔不同的单元格，使用 - 来分隔表头和其他行。

语法格式如下：
```markdown
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |

对齐方式

我们可以设置表格的对齐方式：

-: 设置内容和标题栏居右对齐。
:- 设置内容和标题栏居左对齐。
:-: 设置内容和标题栏居中对齐。

| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
```






