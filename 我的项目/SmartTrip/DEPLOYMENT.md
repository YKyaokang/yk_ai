# SmartTrip 生产环境部署指南

## 生产环境Mock服务解决方案

本项目已经配置了完整的生产环境Mock服务，确保在打包上传到服务器后能够正常获取MockJS数据。

### 核心修改

1. **自定义生产环境Mock服务** (`mock/mockProdServer.js`)
   - 拦截XMLHttpRequest请求
   - 模拟所有API响应
   - 完全兼容axios库

2. **应用入口自动初始化** (`src/main.jsx`)
   - 自动检测生产环境
   - 动态加载Mock服务
   - 错误处理和日志记录

3. **构建配置优化** (`vite.config.js`)
   - 关闭vite-plugin-mock的生产模式
   - 确保Mock文件被包含在构建中

### 构建和部署步骤

```bash
# 1. 安装依赖
npm install

# 2. 生产构建
npm run build

# 3. 预览构建结果（可选）
npm run preview

# 4. 上传dist文件夹到服务器
```

### 验证Mock服务工作状态

在生产环境打开浏览器控制台，您会看到：
- `🔍 检测到生产环境，正在加载Mock服务...`
- `🚀 正在初始化生产环境Mock服务...`
- `🚀 生产环境Mock服务已启动`
- `✅ 生产环境Mock服务器初始化完成！`

您也可以在控制台运行以下命令检查Mock状态：
```javascript
window.__getMockStatus__()
```

### 支持的API接口

- `GET /api/images` - 获取景点图片数据
- `GET /api/articles` - 获取旅游攻略文章
- `GET /api/hotlist` - 获取热门推荐
- `GET /api/search` - 搜索建议
- `POST /api/login` - 用户登录
- `GET /api/user` - 获取用户信息

### 故障排除

如果Mock服务仍然不工作：

1. 检查浏览器控制台是否有错误
2. 确认网络请求被正确拦截（查看Network面板）
3. 验证API请求URL包含`/api/`路径
4. 检查服务器是否正确提供静态文件

### 注意事项

- Mock服务只在生产环境启动
- 开发环境仍使用vite-plugin-mock
- 所有Mock数据都是本地生成，无需外部API
- 支持热重载和实时更新