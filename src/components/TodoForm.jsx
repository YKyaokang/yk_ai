import './TodoForm.css'; // 组件级样式引入

function TodoForm() {
  return (
    <div className="form-container">
      <input 
        type="text" 
        placeholder="请输入账号" 
        className="form-input" 
      />
      <input 
        type="text" 
        placeholder="请输入密码" 
        className="form-input" 
      />
      <div className="button-group">
        <button className="login-btn">登录</button>  {/* 登录按钮 */}
        <button className="register-btn">注册</button>  {/* 注册按钮 */}
      </div>
    </div>
  );
}

export default TodoForm;