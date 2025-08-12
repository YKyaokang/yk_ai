# Object.assign 面试要点详解

## 1. 基本概念

### 定义
`Object.assign()` 方法用于将一个或多个源对象的所有可枚举的自有属性复制到目标对象，并返回目标对象。

### 语法
```javascript
Object.assign(target, ...sources)
```

## 2. 核心特性（面试重点）

### 2.1 浅拷贝特性
```javascript
// 浅拷贝示例
const source = {
  a: 1,
  b: {
    c: 2
  }
};

const target = Object.assign({}, source);
console.log(target); // { a: 1, b: { c: 2 } }

// 修改嵌套对象
target.b.c = 3;
console.log(source.b.c); // 3 - 原对象也被修改了！
```

**面试要点**: `Object.assign` 只进行浅拷贝，对于嵌套对象仍然是引用关系。

### 2.2 返回值特性
```javascript
const target = { a: 1 };
const source = { b: 2 };

const result = Object.assign(target, source);
console.log(result === target); // true - 返回的是target本身
console.log(target); // { a: 1, b: 2 } - target被修改了
```

**面试要点**: 方法会修改并返回目标对象本身。

### 2.3 属性覆盖规则
```javascript
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };

Object.assign(target, source1, source2);
console.log(target); // { a: 1, b: 3, c: 5, d: 6 }
```

**面试要点**: 后面的源对象属性会覆盖前面的同名属性。

## 3. 常见面试问题

### Q1: Object.assign 和展开运算符的区别？
```javascript
// Object.assign
const obj1 = Object.assign({}, source);

// 展开运算符
const obj2 = { ...source };

// 区别：
// 1. 语法简洁性：展开运算符更简洁
// 2. 性能：展开运算符通常更快
// 3. 兼容性：Object.assign支持更老的浏览器
```

### Q2: 如何实现深拷贝？
```javascript
// 错误方式（浅拷贝）
const shallow = Object.assign({}, original);

// 简单深拷贝（有局限性）
const deep1 = JSON.parse(JSON.stringify(original));

// 递归深拷贝实现
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  
  const cloned = {};
  Object.keys(obj).forEach(key => {
    cloned[key] = deepClone(obj[key]);
  });
  return cloned;
}
```

### Q3: Object.assign 的边界情况？
```javascript
// null 或 undefined 作为目标对象
Object.assign(null, { a: 1 }); // TypeError

// 原始值作为目标对象
Object.assign(1, { a: 1 }); // Number对象包装器

// 不可枚举属性不会被复制
const source = {};
Object.defineProperty(source, 'hidden', {
  value: 'secret',
  enumerable: false
});
const target = Object.assign({}, source);
console.log(target.hidden); // undefined
```

## 4. 实际应用场景

### 4.1 对象合并
```javascript
// 配置对象合并
const defaultConfig = {
  timeout: 5000,
  retries: 3,
  debug: false
};

const userConfig = {
  timeout: 10000,
  debug: true
};

const finalConfig = Object.assign({}, defaultConfig, userConfig);
```

### 4.2 克隆对象
```javascript
// 浅克隆
const cloned = Object.assign({}, original);

// 更推荐的方式
const cloned = { ...original };
```

### 4.3 添加属性
```javascript
// 向现有对象添加属性
Object.assign(user, { 
  lastLogin: new Date(),
  isActive: true 
});
```

## 5. 性能考虑

### 性能对比
```javascript
// 测试不同方法的性能
const source = { a: 1, b: 2, c: 3 };

// Object.assign
console.time('Object.assign');
for (let i = 0; i < 1000000; i++) {
  Object.assign({}, source);
}
console.timeEnd('Object.assign');

// 展开运算符
console.time('Spread operator');
for (let i = 0; i < 1000000; i++) {
  { ...source };
}
console.timeEnd('Spread operator');
```

## 6. 面试答题要点总结

1. **基本用法**: 能够准确描述语法和基本功能
2. **浅拷贝特性**: 重点强调只复制第一层属性
3. **返回值**: 说明返回目标对象本身
4. **属性覆盖**: 解释多个源对象时的覆盖规则
5. **边界情况**: 了解null/undefined等特殊情况的处理
6. **与其他方法对比**: 能够对比展开运算符、深拷贝等方案
7. **实际应用**: 能够举出具体的使用场景

## 7. 常见陷阱

```javascript
// 陷阱1: 以为是深拷贝
const original = { nested: { value: 1 } };
const copy = Object.assign({}, original);
copy.nested.value = 2;
console.log(original.nested.value); // 2 - 原对象被修改

// 陷阱2: 忘记目标对象会被修改
const target = { a: 1 };
Object.assign(target, { b: 2 });
console.log(target); // { a: 1, b: 2 } - target被修改了

// 陷阱3: 属性描述符不会被复制
const source = {};
Object.defineProperty(source, 'prop', {
  value: 'test',
  writable: false
});
const copy = Object.assign({}, source);
// copy.prop 是可写的，因为只复制了值
```