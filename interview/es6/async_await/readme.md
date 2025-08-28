# async/await 实质：Promise 语法糖详解

## 核心概念

`async/await` 是 ES2017 引入的语法，它**本质上就是 Promise 的语法糖**，让异步代码看起来像同步代码一样。

## 转换规则

### 1. async 函数转换

```javascript
// async 函数
async function foo() {
    return 42;
}

// 等价的 Promise 写法
function foo() {
    return Promise.resolve(42);
}
```

**关键点**：`async` 函数总是返回一个 Promise，即使你返回的是普通值，它也会被自动包装成 Promise。

### 2. await 表达式转换

```javascript
// async/await 写法
async function example() {
    const result = await somePromise();
    return result + 1;
}

// 等价的 Promise 写法
function example() {
    return somePromise().then(result => {
        return result + 1;
    });
}
```

**关键点**：`await` 会暂停函数执行，等待 Promise 完成，然后继续执行。

### 3. 错误处理转换

```javascript
// async/await 错误处理
async function errorExample() {
    try {
        const result = await somePromise();
        return result;
    } catch (error) {
        console.error(error);
    }
}

// 等价的 Promise 错误处理
function errorExample() {
    return somePromise()
        .then(result => result)
        .catch(error => {
            console.error(error);
        });
}
```

