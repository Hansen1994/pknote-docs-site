# 风格指南
## 目的

风格指南并不是一种限制，而是约定，这样子做的一切是为了优化项目和流程，提交工作效率，让工作来的事半功倍。故为pknote项目书写了一套命名规范以作向导

## 现状

1. 静态资源架构有待优化；

2. 与上下游的流程不顺畅，没有约定的规范；

3. 代码格式标准有待改进，命名，代码组织等不统一；

4. 团队内部交流不足，基本都是各自为战。没有实现相互促进和学习的良好氛围。

## 基本准则 

1.符合web标准，语义化html，结构表现行为分离，兼容性优良，页面性能方面，代码要求简洁明了有序，尽可能的减少服务器负载，保证最快解析速度。

2.提高前端静态资源(包括页面模板和JS功能组件)的可重用性。能实现和具体项目业务逻辑的分离，坚决不和业务逻辑混到一起去。能拆分的功能组件就尽量不要整合到一起了。给各个功能组件预留足够灵活的使用空间。

3.加强团队内部技术人员之间的交流，形成相互学习和促进共同进步的良好氛围。

## 1. 命名规范

### 1.1 采用小写驼峰命名 

 使用小驼峰命名lowerCamelCase， 代码中的命名均不能以下划线，也不能以下划线或美元符号结束。

**反例**

`_name / name_ / name$`

**正例**

`localValue / getHttpMessage() / inputUserId`

### 1.2 取名有意义

尽可能使用描述性的命名，别心疼空间， 毕竟相比之下让代码易于新读者理解更重要。不要用只有项目开发者能理解的缩写, 也不要通过砍掉几个字母来缩写单词。

**反例**

```javascript
const yyyymmdstr = moment().format('YYYY/MM/DD');
```

**正例**

```javascript
const yearMonthDay = moment().format('YYYY/MM/DD');
```

### 1.3方法(函数)命名

 method 方法命名必须是 **动词** 或者 **动词+名词** 形式

**增删查改**： 目的是为了与服务端的接口进行统一

**正例**

`saveShopCarData/openShopCarInfoDialog/getDetail`

**反例**

`save/open/show/go`

**附录**: 函数方法常用动词

```javascript
get 获取/set 设置,				add 增加/remove 删除
create 创建/destory 移除  		start 启动/stop 停止
open 打开/close 关闭			read 读取/write 写入
load 载入/save 保存				create 创建/destroy 销毁
begin 开始/end 结束       		backup 备份/restore 恢复
import 导入/export 导出			split 分割/merge 合并
inject 注入/extract 提取		attach 附着/detach 脱离
bind 绑定/separate 分离			view 查看/browse 浏览
edit 编辑/modify 修改			select 选取/mark 标记
copy 复制/paste 粘贴			undo 撤销/redo 重做
insert 插入/delete 移除			add 加入/append 添加
clean 清理/clear 清除			index 索引/sort 排序
find 查找/search 搜索			increase 增加/decrease 减少
play 播放/pause 暂停			launch 启动/run 运行
compile 编译/execute 执行		debug 调试/trace 跟踪
observe 观察/listen 监听		build 构建/publish 发布	
input 输入/output 输出			encode 编码/decode 解码
encrypt 加密/decrypt 解密		compress 压缩/decompress解压缩
pack 打包/unpack 解包			parse 解析/emit 生成
connect 连接/disconnect 断开	send 发送/receive 接收
download 下载/upload 上传		refresh 刷新/synchronize 同步
update 更新/revert 复原			lock 锁定/unlock 解锁
check out 签出/check in 签入	submit 提交/commit 交付
push 推/pull 拉				 	expand 展开/collapse 折叠
begin 起始/end 结束				start 开始/finish 完成
enter 进入/exit 退出			abort 放弃/quit 离开
obsolete 废弃/depreciate 废旧	collect 收集/aggregate 聚集
```

### 1.4 常量的命名

使用ES6 的const定义常量， 且变量名大写，多单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长

**反例**

```javascript
var pi = 3.14;
var max_count = 1;
```

**正例**

```javascript
const PI = 3.14; // 圆周率
const MAX_STOCK_COUNT = 1;
```

### 1.5 使用易于检索的名称

古往今来，我们阅读的代码会比我们自己写的要多，使代码拥有良好的可读性且易于检索非长重要。

**反例**

```javascript
// 你知道525600 是什么呢?
for(let i = 0; i < 525600; i++){
    
}
```

**正例**

```javascript
// 这里我们知道1年525600分钟
const MINUTES_IN_A_YEAR = 525600;
for(let i = 0; i < MINUTES_IN_A_YEAR; i++){
    
}
```

### 1.6不要用隐式命名

显式的变量优于隐式的变量

**反例**

```javascript
var locations = ['Austin', 'New York', 'San Francisco'];
locations.forEach((l) => {
  doStuff();
  doSomeOtherStuff();
  ...
  ...
  ...
  // l是什么？
  dispatch(l);
});
```

**正例**

```javascript
var locations = ['Austin', 'New York', 'San Francisco'];
locations.forEach((location) => {
  doStuff();
  doSomeOtherStuff();
  ...
  ...
  ...
  dispatch(location);
});
```

## 2. 代码格式

### 2.1 使用 2 个空格进行缩进

**正例**

```javascript
if (x < y) {
  x += 10;
} else {
  x += 1;
}
```

## 3.字符串

统一使用单引号(‘)，不使用双引号(“)， 对于html文本可以使用反引号(`)

**反例**

```
let str = "foo";
let testDiv = "<div id='test'></div>";
```

**正例**

```javascript
let str = 'foo';
let testDiv = `<div id="test"></div>`;
```

## 4. undefined 判断

永远不要直接使用 undefined 进行变量判断；使用 typeof 和字符串’undefined’对变量进行判断。

反例：

```javascript
if (person === undefined) {
    ...
}
```



正例：

```javascript
if (typeof person === 'undefined') {
    ...
}
```

## 5. 条件判断

### 5.1 不要使用无意义的条件判断

**反例**

```javascript
function createMicrobrewery(name) {
  var breweryName;
  if (name) {
    breweryName = name;
  } else {
    breweryName = 'Hipster Brew Co.';
  }
}
```

**正例**

```javascript
function createMicrobrewery(name) {
  var breweryName = name || 'Hipster Brew Co.'
}
```

### 5.2 件判断和循环最多三层

条件判断能使用三目运算符和逻辑运算符解决的，就不要使用条件判断，但是谨记不要写太长的三目运算符。如果超过 3 层请抽成函数，并写清楚注释。

**反例**

```javascript
let a = b ? c : (d ? e : (f ? h : i);
```

## 6.函数

### 6.1 函数使用格式

一般函数使用箭头函数，事件方法使用普通函数

**例子**

```javascript
const test = () => {}
const test2 = () => ()
window.addEventListener('click', function() {})
```

### 6.2 函数参数

理想状态下不要超过2个

限制函数参数数量很有必要，这么做使得在测试函数时更加轻松。过多的参数将导致难以采用有效的测试用例对函数的各个参数进行测试。

应避免三个以上参数的函数。通常情况下，参数超过两个意味着函数功能过于复杂，这时需要重新优化你的函数。当确实需要多个参数时，大多情况下可以考虑这些参数封装成一个对象。

**反例**:

```javascript
function createMenu(title, body, buttonText, cancellable) {
  ...
}
```

**正例**:

```javascript
var menuConfig = {
  title: 'Foo',
  body: 'Bar',
  buttonText: 'Baz',
  cancellable: true
}

function createMenu(menuConfig) {
  ...
}

```

### 6.3 函数功能的单一性

功能不单一的函数将导致难以重构、测试和理解。功能单一的函数易于重构，并使代码更加干净。

**反例**:

```javascript
function emailClients(clients) {
  clients.forEach(client => {
    let clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}
```

**正例**:

```javascript
function emailClients(clients) {
  clients.forEach(client => {
    emailClientIfNeeded(client);
  });
}

function emailClientIfNeeded(client) {
  if (isClientActive(client)) {
    email(client);
  }
}

function isClientActive(client) {
  let clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```

### 6.4 函数名应明确表明其功能

**反例**:

```javascript
function dateAdd(date, month) {
  // ...
}

let date = new Date();

// 很难理解dateAdd(date, 1)是什么意思
dateAdd(date, 1);
```

**正例**:

```javascript
function dateAddMonth(date, month) {
  // ...
}

let date = new Date();
dateAddMonth(date, 1);
```

### 6.5 采用默认参数精简代码

**反例**:

```javascript
function writeForumComment(subject, body) {
  subject = subject || 'No Subject';
  body = body || 'No text';
}
```

**正例**:

```javascript
function writeForumComment(subject = 'No subject', body = 'No text') {
  ...
}
```

### 6.6 不要使用标记(Flag)作为函数参数

这通常意味着函数的功能的单一性已经被破坏。此时应考虑对函数进行再次划分。

**反例**:

```javascript
function createFile(name, temp) {
  if (temp) {
    fs.create('./temp/' + name);
  } else {
    fs.create(name);
  }
}
```

**正例**:

```javascript
function createTempFile(name) {
  fs.create('./temp/' + name);
}
----------
function createFile(name) {
  fs.create(name);
}
```

## 7.注释

### 7.1普通注释

普通注释是为了帮助开发者和阅读者更好地理解程序，不会出现在API文档中。其中，单行注释以“//”开头；多行注释以“/*”开头，以“*/”结束。普通注释的使用需遵循以下规定。

**总是在单行注释符后留一个空格**

```javascript
// this is comment
```



**总是在多行注释的结束符前留一个空格（使星号对齐）**

```javascript
/*
                             
 */
```

**不要把注释写在多行注释的开始符、结束符所在行**

**反例**

```javascript
/* start
              
end */
```

**正例**

```javascript
/*
here is line 1
here is line 2
 */
```

**不要编写无意义的注释**

```javascript
// 初始化value变量为0
var value = 0;
```

**如果某段代码有功能未实现，或者有待完善，必须添加“TODO”标记**

```javascript
// TODO 未处理IE6-8的兼容性
function setOpacity(node, val) {
    node.style.opacity = val;
}
```

### 7.2 文档注释

**文档注释将会以预定格式出现在API文档中。它以`/**`开头，以`*/`结束**

```javascript
/**
 * comment
 */
```

 **文档注释必须包含一个或多个注释标签**

-  `@module`。声明模块，用法：

```javascript
/**
 * 模块说明
 * @module 模块名
 */
```

 例如：

```javascript
/**
 * Core模块提供最基础、最核心的接口
 * @module Core
 */
```

- @class。声明类，用法：

```javascript
/**
 * 类说明
 * @class 类名
 * @constructor
 */
```

 @class必须搭配@constructor或@static使用，分别标记非静态类与静态类。

```javascript
/**
 * 节点集合类
 * @class NodeList
 * @constructor
 * @param {ArrayLike<Element>} nodes 初始化节点
 */
```

- @method。声明函数或类方法，用法：

```javascript
/**
 * 方法说明
 * @method 方法名
 * @for 所属类名
 * @param {参数类型} 参数名 参数说明
 * @return {返回值类型} 返回值说明
 */
```

## 8. vue组件规范

### 8.1 基本的目录格式

```javascript
|---node_modules
|---public
    |---favicon.ico
    |---index.html
|---src
    |---api // 创建用来存放接口的文件夹
    |---assets // 静态资源管理负责管理图片样式一类
        |---fonts // 存放静态字体文件夹
        |---images // 存放图片文件夹
            |---base // 公共的图片， 比如logo， 公共元素图片
            |---modules // 业务模块的图片
    |---components // 存放组件文件夹
        |---base // 基础组件，比如弹窗、搜索条等
        |---common // 公共的组件， 比如头部，左侧菜单等部分
	|---plugins	// 插件
	|---router	// 路由相关
	|---store	// vuex 状态管理文件夹
	|---design	// 样式表文件夹
		|---base	// 基础样式文件夹
			|--- reset.scss
			|--- minxins.scss // scss方法文件夹
			|--- var.scss // 变量文件夹
    |---utils	// js常用方法
	|---views	// 视图页面
	|---App.vue	// 主要渲染页面
	|---main.ts	// 主入口文件
	
```


### 8.2 组件文件名为 PascalCase 格式

**单文件组件的文件名**应该是单词大写开头 (PascalCase)，而不要使用横线连接 (kebab-case)。

**反例**

```javascript
components/modules
    |- myComponent.vue
    |- my-component.vue
```

**正例**

```javascript
components/modules
    |- MyComponent.vue
```

### 8.3 基础组件文件名

基础组件名可以在前面加上前缀

**反例**

```javascript
components/base
    |- MyButton.vue
    |- VueTable.vue
    |- Icon.vue
```

**正例**

```javascript
components/base
    |- BaseButton.vue
    |- BaseTable.vue
    |- BaseIcon.vue
```

### 8.4 和父组件紧密耦合的子组件应该以父组件名作为前缀命名

**反例**

```javascript
components/modules
|- todo-list.vue
|- todo-list-item.vue
|- todo-list-item-button.vue
|- user-profile-options.vue
|- UProfOpts.vue （使用了缩写）
```

**正例**

```javascript
components/modules
	|-todo
      |- TodoList.vue
      |- TodoItem.vue
      |- TodoButton.vue
	|-user
	  |- UserProfileOptions.vue （使用了完整的单词且为Pas方式calCase）
```

### 8.4 组件名为多个单词

组件名应该和文件夹名一样，使用`PascalCase`格式

**反例**

```javascript
export default {
  name: 'todo-item',
  // ...
}
```

**正例**

```javascript
export default {
  name: 'TodoItem'
  // ...
};
```

### 8.5 在 Template 模版中使用组件

在 Template 模版中使用组件，应使用 PascalCase 模式，并且使用自闭合组件。

**反例**

```javascript
<my-component /><row><table :column="data"/></row>
```

**正例**

```javascript
<!-- 在单文件组件、字符串模板和 JSX 中 -->
<MyComponent />
<Row><table :column="data"/></Row>
```

### 8.6 组件的 data 必须是一个函数

在`vue3` 中，当我们使用`option api`时候，`data`属性的值必须是返回一个对象的函数。 因为如果直接是一个对象的话，子组件之间的属性值会互相影响， 而`composition api`不受此约束。

**反例**

```javascript
export default {
  data: {
    name: '烟花来了'
  }
}
```

**正例**

```javascript
export default {
  data () {
    return {
      name: '烟花来了'
    }
  }
}
```

### 8.7Prop 定义应该尽量详细

- 必须使用 camelCase 驼峰命名
- 必须指定类型
- 必须加上注释，表明其含义
- 必须加上 required 或者 default，两者二选其一
- 如果有业务需要，必须加上 validator 验证

**例子**

```javascript
 props: {
  // 组件状态，用于控制组件的颜色
   status: {
     type: String,
     required: true,
     validator: function (value) {
       return [
         'succ',
         'info',
         'error'
       ].indexOf(value) !== -1
     }
   },
    // 用户级别，用于显示皇冠个数
   userLevel：{
      type: String,
      required: true
   }
}
```

### 8.8 为组件样式设置作用域

打开样式作用域后，此组件的样式不会影响其他组件

**例子**

```javascript
<template>
  <button class="btn btn-close">X</button>
</template>
 
<!-- 使用 `scoped` 特性 -->
<style scoped>
  .btn-close {
    background-color: red;
  }
</style>
```

### 8.9如果特性元素较多，应该主动换行

使每个属性单独占一行

**反例**

```javascript
<MyComponent foo="a" bar="b" baz="c" foo="a" bar="b" baz="c" foo="a" bar="b"/>
```

**正例**

```javascript
<MyComponent
	foo="a"
	bar="b"
	baz="c"
	foo="a"
	bar="b"
	baz="c"
	foo="a"
	bar="b"
/>
```

### 8.10 模板中使用简单的表达式

组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的是什么，而非如何计算那个值。而且计算属性和方法使得代码可以重用。

正例：

```javascript
<template>
  <p>{{ normalizedFullName }}</p>
</template>
 
// 复杂表达式已经移入一个计算属性 options api
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
// 或 composition api
setup() {
  const normalizedFullName = computed(() => {
      return this.fullName.split(' ').map(function (word) {
     	 return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  })  
}
```

反例：

```javascript
<template>
  <p>
       {{
          fullName.split(' ').map(function (word) {
             return word[0].toUpperCase() + word.slice(1)
           }).join(' ')
        }}
  </p>
</template>
```

### 8.11 指令都使用缩写形式

指令推荐都使用缩写形式，(用 : 表示 v-bind: 、用 @ 表示 v-on: )

正例：

```javascript
<input
  @input="onInput"
  @focus="onFocus"
>
```

反例：

```javascript
<input
  v-on:input="onInput"
  @focus="onFocus"
>
```

## 9.Vue Router 规范

### 9.1 页面跳转数据传递使用路由参数

页面跳转，例如 A 页面跳转到 B 页面，需要将 A 页面的数据传递到 B 页面，推荐使用 路由参数进行传参，而不是将需要传递的数据保存 vuex，然后在 B 页面取出 vuex 的数据，因为如果在 B 页面刷新会导致 vuex 数据丢失，导致 B 页面无法正常显示数据。

**正例**

```javascript
let id = ' 123';
this.$router.push({ name: 'userCenter', query: { id: id } });
```

### 9.2 使用路由懒加载（延迟加载）机制

```javascript
{
    path: '/upload-attachment',
        name: 'UploadAttachment',
            meta: {
                title: '上传附件'
            },
                component: () => import('@/view/components/uploadAttachment/index.vue')
},
```

### 9.3 router 中的命名规范

- `path、childrenPoints` 命名规范采用`kebab-case`命名规范（尽量`vue`文件的`views`的目录结构保持一致，因为目录、文件名都是`kebab-case`，这样很方便找到对应的文件）
- `name` 命名规范采用`KebabCase`命名规范且和`views`文件组件名保持一致（因为要保持`keep-alive`特性，`keep-alive`按照`views`下的组件的`name`进行缓存，所以两者必须高度保持一致）。

```javascript
// 动态加载
export const reload = [
  {
    path: '/reload',
    name: 'reload',
    component: Main,
    meta: {
      title: '动态加载',
      icon: 'icon iconfont'
    },
    children: [
      {
        path: '/reload/smart-reload-list',
        name: 'SmartReloadList',
        meta: {
          title: 'SmartReload',
          childrenPoints: [
            {
              title: '查询',
              name: 'smart-reload-search'
            },
            {
              title: '执行reload',
              name: 'smart-reload-update'
            },
            {
              title: '查看执行结果',
              name: 'smart-reload-result'
            }
          ]
        },
        component: () =>
          import('@/views/reload/smart-reload/smart-reload-list.vue')
      }
    ]
  }
];
```

## 10. 相关目录说明

### 10.1 API目录

- 文件、变量命名要与后端保持一致。
- 此目录对应后端 API 接口，按照后端一个 controller 一个 api js 文件。若项目较大时，可以按照业务划分子目录，并与后端保持一致。
- api 中的方法名字要与后端 api url 尽量保持语义高度一致性。
- 对于 api 中的每个方法要添加注释，注释与后端 swagger 文档保持一致。

### 10.2 router 与 store 目录

这两个目录一定要将业务进行拆分，不能放到一个 js 文件里。

router 尽量按照 views 中的结构保持一致

store 按照业务进行拆分不同的 js 文件

### 10.3 views 目录

- `views` 的文件夹里面的组件名采用 `kebab-case`的写法(这样子才`router`可以形成参照，可以快速找到文件)， 而文件还是要参照 `8.4`和`8.5` 的写法

```javascript
|-- views                            // 视图目录
|   |-- role                         // role模块名
|   |   |-- role-list.vue            // role列表页面
|   |   |-- role-add.vue             // role新建页面
|   |   |-- role-update.vue          // role更新页面
|   |   |-- components               // role模块通用组件文件夹
|   |   |   |-- role-header.vue      // role头部组件
|   |   |   |-- role-modal.vue       // role弹出框组件
|   |-- employee                     // employee模块
|   |-- behavior-log                 // 行为日志log模块
|   |-- code-generator               // 代码生成器模块
```

