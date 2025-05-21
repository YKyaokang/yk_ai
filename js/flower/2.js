//代理模式的代码演示

// 目标对象
const realSubject = {
    request() {
      console.log('RealSubject: 处理请求');
      return '真实响应';
    }
  };

  // 创建代理
const proxy = new Proxy(realSubject, {
    get(target, prop) {
      console.log(`Proxy: 拦截对属性 "${prop}" 的访问`);

        // 可以添加额外的控制逻辑
    if (prop === 'request') {
        return function() {
          console.log('Proxy: 在调用真实对象前执行操作');
          const result = target[prop].apply(target, arguments);
          console.log('Proxy: 在调用真实对象后执行操作');
          return result;
        };
    }
    return target[prop]; // 其他属性直接返回
    }
  });

  console.log(proxy.request()); 