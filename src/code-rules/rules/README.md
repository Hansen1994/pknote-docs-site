# 风格指南
为保证小伙伴们写代码和提交代码的时候有一个统一的代码规范，故为pknote项目书写了一套命名规范以作向导

## 变量

### 变量有意义，可读性好

尽可能使用描述性的命名， 别心疼空间,，毕竟相比之下让代码易于新读者理解更重要。不要用只有项目开发者能理解的缩写, 也不要通过砍掉几个字母来缩写单词。

**反例**

```javascript
const yyyymmdstr = moment().format('YYYY/MM/DD');
```

**正例**

```javascript
const yearMonthDay = moment().format('YYYY/MM/DD');
```

### 使用ES6 的const定义常量

使用ES6 的const定义常量， 且变量名大写

**反例**

```javascript
var PI = 3.14;
```

**正例**

```javascript
const PI = 3.14; // 圆周率
```

### 使用易于检索的名称

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

### 不要绕太多弯子

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

### 避免无意义的条件判断

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

## 函数

### 使用箭头函数

使用箭头函数的方式

**反例**

```javascript
function test() {}
```

**正例**

```javascript
const test = () => {}
```



### 函数参数

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

### 函数功能的单一性

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

### 函数名应明确表明其功能

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

### 采用默认参数精简代码

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

### 不要使用标记(Flag)作为函数参数

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

















