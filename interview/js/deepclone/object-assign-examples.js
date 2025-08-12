// Object.assign 面试实战代码示例

console.log('=== Object.assign 基础用法 ===');

// 1. 基本语法演示
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const result = Object.assign(target, source);

console.log('target:', target);        // { a: 1, b: 3, c: 4 }
console.log('result === target:', result === target); // true

console.log('\n=== 浅拷贝特性演示 ===');

// 2. 浅拷贝问题
const original = {
  name: '张三',
  age: 25,
  address: {
    city: '北京',
    district: '朝阳区'
  },
  hobbies: ['读书', '游泳']
};

const copy = Object.assign({}, original);

// 修改第一层属性 - 不影响原对象
copy.name = '李四';
console.log('原对象name:', original.name);  // 张三
console.log('拷贝对象name:', copy.name);     // 李四

// 修改嵌套对象 - 影响原对象！
copy.address.city = '上海';
console.log('原对象city:', original.address.city);  // 上海
console.log('拷贝对象city:', copy.address.city);     // 上海

// 修改数组 - 影响原对象！
copy.hobbies.push('跑步');
console.log('原对象hobbies:', original.hobbies);  // ['读书', '游泳', '跑步']

console.log('\n=== 多个源对象合并 ===');

// 3. 多个源对象合并
const defaults = {
  theme: 'light',
  language: 'zh-CN',
  fontSize: 14,
  autoSave: true
};

const userPrefs = {
  theme: 'dark',
  fontSize: 16
};

const sessionPrefs = {
  language: 'en-US'
};

const finalConfig = Object.assign({}, defaults, userPrefs, sessionPrefs);
console.log('最终配置:', finalConfig);
// { theme: 'dark', language: 'en-US', fontSize: 16, autoSave: true }

console.log('\n=== 边界情况处理 ===');

// 4. 边界情况
try {
  Object.assign(null, { a: 1 });
} catch (error) {
  console.log('null作为目标对象会报错:', error.message);
}

// 原始值作为目标对象
const result1 = Object.assign(42, { a: 1 });
console.log('数字作为目标对象:', result1); // Number对象包装器

// 不可枚举属性不会被复制
const sourceWithHidden = { visible: 'yes' };
Object.defineProperty(sourceWithHidden, 'hidden', {
  value: 'secret',
  enumerable: false
});

const copyWithHidden = Object.assign({}, sourceWithHidden);
console.log('可见属性:', copyWithHidden.visible);   // yes
console.log('隐藏属性:', copyWithHidden.hidden);    // undefined

console.log('\n=== 与展开运算符对比 ===');

// 5. 性能和语法对比
const testObj = { x: 1, y: 2, z: 3 };

// Object.assign方式
const copy1 = Object.assign({}, testObj);

// 展开运算符方式
const copy2 = { ...testObj };

console.log('Object.assign结果:', copy1);
console.log('展开运算符结果:', copy2);
console.log('结果相等:', JSON.stringify(copy1) === JSON.stringify(copy2));

console.log('\n=== 实际应用场景 ===');

// 6. 实际应用场景

// 场景1: 默认参数合并
function createUser(options = {}) {
  const defaults = {
    name: '匿名用户',
    role: 'user',
    permissions: ['read'],
    settings: {
      theme: 'light',
      notifications: true
    }
  };
  
  return Object.assign({}, defaults, options);
}

const user1 = createUser({ name: '张三', role: 'admin' });
console.log('用户1:', user1);

// 场景2: 状态更新（React风格）
function updateState(currentState, updates) {
  return Object.assign({}, currentState, updates);
}

const currentState = {
  loading: false,
  data: null,
  error: null
};

const newState = updateState(currentState, { 
  loading: true, 
  error: null 
});
console.log('新状态:', newState);

// 场景3: 对象属性添加
const baseUser = { id: 1, name: '用户' };
const enhancedUser = Object.assign({}, baseUser, {
  createdAt: new Date(),
  isActive: true,
  getDisplayName() {
    return `用户: ${this.name}`;
  }
});

console.log('增强用户:', enhancedUser);
console.log('显示名称:', enhancedUser.getDisplayName());

console.log('\n=== 深拷贝解决方案对比 ===');

// 7. 深拷贝解决方案
const deepObject = {
  name: '测试',
  nested: {
    value: 42,
    array: [1, 2, { deep: true }]
  },
  date: new Date(),
  func: function() { return 'hello'; }
};

// 方案1: JSON方法（有局限性）
const jsonCopy = JSON.parse(JSON.stringify(deepObject));
console.log('JSON深拷贝（丢失函数和日期类型）:', jsonCopy);

// 方案2: 简单递归深拷贝实现
function simpleDeepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj);
  }
  
  if (obj instanceof Array) {
    return obj.map(item => simpleDeepClone(item));
  }
  
  const cloned = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = simpleDeepClone(obj[key]);
    }
  }
  
  return cloned;
}

const deepCopy = simpleDeepClone(deepObject);
console.log('递归深拷贝:', deepCopy);

// 验证深拷贝效果
deepCopy.nested.value = 999;
console.log('原对象nested.value:', deepObject.nested.value);  // 42
console.log('拷贝对象nested.value:', deepCopy.nested.value);   // 999

console.log('\n=== 面试常考代码题 ===');

// 8. 面试代码题
console.log('题目1: 预测输出结果');
const obj1 = { a: { b: 1 } };
const obj2 = Object.assign({}, obj1);
obj2.a.b = 2;
console.log('obj1.a.b =', obj1.a.b); // 2

console.log('\n题目2: 实现一个安全的对象合并函数');
function safeMerge(target, ...sources) {
  // 创建目标对象的浅拷贝，避免修改原对象
  const result = Object.assign({}, target);
  
  sources.forEach(source => {
    if (source && typeof source === 'object') {
      Object.assign(result, source);
    }
  });
  
  return result;
}

const base = { a: 1, b: 2 };
const merged = safeMerge(base, { b: 3, c: 4 }, null, { d: 5 });
console.log('原对象未被修改:', base);      // { a: 1, b: 2 }
console.log('合并结果:', merged);          // { a: 1, b: 3, c: 4, d: 5 }