---
title: d3study day2
date: 2020-6-6
tags:
 - study
categories:
 - d3
---
# 如何画一个条形图

## 1.画布SVG

###### html

```
<svg width="1600" height="800" id="mainsvg" class="svgs"></svg>
```

###### js

```
const g=svg.append('g')
    .attr('transform',`translate(${margin.left},${margin.top})`);
//移动画布svg
```



## 2.建立坐标轴

### 2.1 建立比例尺(实质为一个函数)

```js
const xscale=d3.scaleLinear()
    .domain([0,d3.max(data,d=>d.value)])
    .range([0,innerwidth]);

const yscale=d3.scaleBand()
    .domain(data.map(d=>d.name))
    .range([0,innerHeight])
    .padding(0.1);
```

##### tips

###### 1.padding控间隔制条形图y轴间距



### 2.2建立坐标轴

#### y轴

```
const yAxis=d3.axisLeft(yscale);
g.append('g').call(yAxis);
```

#### x轴

```
const xAxis=d3.axisBottom(xscale);
g.append('g').call(xAxis).attr('transform',`translate(0,${innerHeight})`)
//默认位置会在原点放，对x轴平移到底部
```





## 3.添加数据

### 3.1数据参考

```
const data=[
    {name:'hhb',value:2},
    {name:'ly',value:10},
    {name:'wzh',value:13},
    {name:'clh',value:12},
    {name:'hhb1',value:4},
    {name:'ly1',value:5},
    {name:'wzh1',value:10},
    {name:'clh1',value:8},
    {name:'xfs',value:9},
];
```

#### 3.2数据添加到坐标轴

```
data.forEach(
    d=>{
        g.append('rect')
            .attr('width',xscale(d.value))
            .attr('height',yscale.bandwidth())
            .attr('fill','green')
            .attr('opacity',0.8)
            .attr('y',yscale(d.name));

    });
//opacity 修改透明度
```



## 4.细节补充

#### 4.1 添加标题

```
g.append('text').text('demo test')
    .attr('font-size','3em')
    .attr('transform',`translate(${innerwidth/2},0)`)
    .attr('text-anchor','middle');
    //标题居中
```



#### 4.2 修改坐标系字体大小

```
d3.selectAll('.tick text').attr('font-size','2em');
```

<img src="C:\Users\ADMIN\AppData\Roaming\Typora\typora-user-images\image-20200606011550159.png" alt="image-20200606011550159" style="zoom:33%;" />

###### 坐标轴标签为tick





## 5.结果预览

![image-20200606011711664](C:\Users\ADMIN\AppData\Roaming\Typora\typora-user-images\image-20200606011711664.png)



