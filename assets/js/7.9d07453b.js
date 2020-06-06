(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{353:function(a,t,s){"use strict";s.r(t);var n=s(43),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"如何画一个条形图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何画一个条形图"}},[a._v("#")]),a._v(" 如何画一个条形图")]),a._v(" "),s("h2",{attrs:{id:"_1-画布svg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-画布svg"}},[a._v("#")]),a._v(" 1.画布SVG")]),a._v(" "),s("h6",{attrs:{id:"html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[a._v("#")]),a._v(" html")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('<svg width="1600" height="800" id="mainsvg" class="svgs"></svg>\n')])])]),s("h6",{attrs:{id:"js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[a._v("#")]),a._v(" js")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const g=svg.append('g')\n    .attr('transform',`translate(${margin.left},${margin.top})`);\n//移动画布svg\n")])])]),s("h2",{attrs:{id:"_2-建立坐标轴"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-建立坐标轴"}},[a._v("#")]),a._v(" 2.建立坐标轴")]),a._v(" "),s("h3",{attrs:{id:"_2-1-建立比例尺-实质为一个函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-建立比例尺-实质为一个函数"}},[a._v("#")]),a._v(" 2.1 建立比例尺(实质为一个函数)")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" xscale"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("d3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("scaleLinear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("domain")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("d3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("d")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("innerwidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" yscale"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("d3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("scaleBand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("domain")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("d")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("innerHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h5",{attrs:{id:"tips"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[a._v("#")]),a._v(" tips")]),a._v(" "),s("h6",{attrs:{id:"_1-padding控间隔制条形图y轴间距"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-padding控间隔制条形图y轴间距"}},[a._v("#")]),a._v(" 1.padding控间隔制条形图y轴间距")]),a._v(" "),s("h3",{attrs:{id:"_2-2建立坐标轴"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2建立坐标轴"}},[a._v("#")]),a._v(" 2.2建立坐标轴")]),a._v(" "),s("h4",{attrs:{id:"y轴"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#y轴"}},[a._v("#")]),a._v(" y轴")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const yAxis=d3.axisLeft(yscale);\ng.append('g').call(yAxis);\n")])])]),s("h4",{attrs:{id:"x轴"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x轴"}},[a._v("#")]),a._v(" x轴")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const xAxis=d3.axisBottom(xscale);\ng.append('g').call(xAxis).attr('transform',`translate(0,${innerHeight})`)\n//默认位置会在原点放，对x轴平移到底部\n")])])]),s("h2",{attrs:{id:"_3-添加数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加数据"}},[a._v("#")]),a._v(" 3.添加数据")]),a._v(" "),s("h3",{attrs:{id:"_3-1数据参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1数据参考"}},[a._v("#")]),a._v(" 3.1数据参考")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const data=[\n    {name:'hhb',value:2},\n    {name:'ly',value:10},\n    {name:'wzh',value:13},\n    {name:'clh',value:12},\n    {name:'hhb1',value:4},\n    {name:'ly1',value:5},\n    {name:'wzh1',value:10},\n    {name:'clh1',value:8},\n    {name:'xfs',value:9},\n];\n")])])]),s("h4",{attrs:{id:"_3-2数据添加到坐标轴"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2数据添加到坐标轴"}},[a._v("#")]),a._v(" 3.2数据添加到坐标轴")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("data.forEach(\n    d=>{\n        g.append('rect')\n            .attr('width',xscale(d.value))\n            .attr('height',yscale.bandwidth())\n            .attr('fill','green')\n            .attr('opacity',0.8)\n            .attr('y',yscale(d.name));\n\n    });\n//opacity 修改透明度\n")])])]),s("h2",{attrs:{id:"_4-细节补充"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-细节补充"}},[a._v("#")]),a._v(" 4.细节补充")]),a._v(" "),s("h4",{attrs:{id:"_4-1-添加标题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-添加标题"}},[a._v("#")]),a._v(" 4.1 添加标题")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("g.append('text').text('demo test')\n    .attr('font-size','3em')\n    .attr('transform',`translate(${innerwidth/2},0)`)\n    .attr('text-anchor','middle');\n    //标题居中\n")])])]),s("h4",{attrs:{id:"_4-2-修改坐标系字体大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-修改坐标系字体大小"}},[a._v("#")]),a._v(" 4.2 修改坐标系字体大小")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("d3.selectAll('.tick text').attr('font-size','2em');\n")])])]),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"C:\\Users\\ADMIN\\AppData\\Roaming\\Typora\\typora-user-images\\image-20200606011550159.png",alt:"image-20200606011550159"}}),a._v(" "),s("h6",{attrs:{id:"坐标轴标签为tick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#坐标轴标签为tick"}},[a._v("#")]),a._v(" 坐标轴标签为tick")]),a._v(" "),s("h2",{attrs:{id:"_5-结果预览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-结果预览"}},[a._v("#")]),a._v(" 5.结果预览")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5CADMIN%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200606011711664.png",alt:"image-20200606011711664"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);