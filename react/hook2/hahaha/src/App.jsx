import React, { useState, useEffect } from 'react';

function UseEffectExamples() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState('初始数据');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 模式1: 每次渲染后都执行
  useEffect(() => {
    console.log('【模式1】组件渲染完成或更新后执行');
  }); // 没有依赖数组

  // 模式2: 仅在挂载时执行一次
  useEffect(() => {
    console.log('【模式2】组件挂载时执行 (仅一次)');
    
    return () => {
      console.log('【模式2】组件卸载时执行');
    };
  }, []); // 空依赖数组

  // 模式3: 特定状态变化时执行
  useEffect(() => {
    console.log(`【模式3】count值变化时执行，当前count: ${count}`);
    
    // 这里可以添加count变化时需要执行的逻辑
    document.title = `当前计数: ${count}`;
    
    return () => {
      console.log('【模式3】count即将变化，或组件卸载时执行');
    };
  }, [count]); // 依赖count

  // 模式4: 清理副作用的示例 (窗口大小监听)
  useEffect(() => {
    console.log('【模式4】设置窗口大小监听器');
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log('窗口大小变化:', window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      console.log('【模式4】移除窗口大小监听器');
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 空依赖数组，只设置一次

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h2>useEffect 四种使用模式示例</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>模式1: 每次渲染后都执行</h3>
        <p>查看控制台输出</p>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>模式2: 仅挂载时执行一次</h3>
        <p>查看控制台初始化和卸载时的输出</p>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>模式3: count变化时执行 (当前count: {count})</h3>
        <button onClick={() => setCount(c => c + 1)}>增加count</button>
        <p>查看控制台和页面标题的变化</p>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>模式4: 清理副作用示例</h3>
        <p>当前窗口宽度: {windowWidth}px</p>
        <p>尝试改变浏览器窗口大小，查看控制台输出</p>
      </div>
      
      <div>
        <h3>数据变化示例</h3>
        <input 
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="输入数据观察模式1的执行"
        />
      </div>
    </div>
  );
}

export default UseEffectExamples;