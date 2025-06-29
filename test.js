// 实现类继承的辅助函数
function _inherits(subClass, superClass) { 
  // 类型检查：确保父类是函数或null
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  // 创建子类原型对象，继承父类原型方法
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { 
      value: subClass,   // 重置构造函数指向子类
      writable: true,
      configurable: true 
    } 
  });

  // 设置子类的__proto__继承父类（用于静态方法继承）
  if (superClass) _setPrototypeOf(subClass, superClass);
}

// 设置对象原型的兼容性写法
function _setPrototypeOf(o, p) { 
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;  // 兼容旧环境
    return o;
  };
  return _setPrototypeOf(o, p);
}

// 创建父类构造函数的引用（用于super调用）
function _createSuper(Derived) { /*...*/ }

// 父类构造函数
var Parent = function Parent(name) {
  _classCallCheck(this, Parent);  // 类型检查
  this.name = name;
};

// 父类原型方法
Parent.prototype.sayName = function sayName() {
  console.log('Parent name:', this.name);
};

// 父类静态方法
Parent.staticMethod = function staticMethod() {
  console.log('static method');
};

// 子类定义
var Child = /*#__PURE__*/function (_Parent) {
  _inherits(Child, _Parent);  // 继承父类
  
  var _super = _createSuper(Child);  // 创建super引用
  
  function Child(name, age) {
    _classCallCheck(this, Child);
    // 调用父类构造函数
    _super.call(this, name);
    this.age = age;
  }
  
  // 子类原型方法
  Child.prototype.sayAge = function sayAge() {
    console.log('Child age:', this.age);
  };
  
  return Child;
}(Parent);