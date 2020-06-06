---
title: d3study day1
date: 2020-6-5
tags:
 - study
categories:
 - d3
---
## JS相关

### JS函数定义

function abc(a){return a+5;}

datum=>datum.value;

const p = function(a,b){return a+b;}

let myfunction = (a,b)=>{return a+b}



### JS常用接口

把字符串转换成数值： +('3.14')

数组的排序a.sort()

数组的查询a.fin(d=>d.name==='xxx')



### tips
+ 1.·（键盘左上角 反引号) 它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量   如`${value}`





## 使用D3查询SVG

### d3.select

+ d3.select('#rect1')
+ 查询ID为‘rect1’的元素
+ #表示后面的字符串是一个ID

### d3.selectALL（）

+ d3.selectAll('.class1')
+ 查询所有class是‘class1’的元素
+ d3.selectAll（‘rect’）
+ 查询所有标签是‘rect’的元素（rect为SVG重的矩形标签）

### TIPS

+ 如‘#secondgroup rect'   d3.selectAll（‘#secondgroup rect' )

​      首先找id为secondgroup的标签

​      然后找secondgroup的子标签中是rect的

+ d3.select('.class')可用于查询类别，但只返回找到的第一个元素

  

## 使用D3设置SVG属性

d3.attr（）

+ 设置属性d3.selectAll（类别）.attr('属性','属性值')
+ 获取元素属性 d3.attr('属性名')
+ 平移 d3.selectAll().attr('transform','translate(x,y)')  x,y为坐标xy
+ 旋转 d3.selectAll().attr('transform','rotate(90)')   旋转90度
+ 放大 d3.selectAll().attr('transform','scale(2)')   放大2倍



## 使用D3添加&删除SVG属性

### d3.append()

+ 链式添加 d3.select().append('rect').attr('x','100')

### d3.remove()

+ ！！！！

+ 会移除整个标签

  

## D3比例尺
### scaleLinear
+ const myscala=d3.scaleLinear().domain([0,10]).range([-1000,1000])
+ myscala（5）   //返回结果为0   
+ myscala（9）   //返回结果为800
+ 本质为一个函数

### scaleBand
const yscale=d3.scaleLinear().domain(list).range([min,max]).padding(p)



#  TO BE CONTINUE！
