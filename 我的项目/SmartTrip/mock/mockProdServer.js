/**
 * 生产环境Mock服务器
 * 拦截axios请求并返回mock数据
 */

// Mock数据配置 - 直接嵌入避免导入问题
const mockRoutes = [
    // 图片数据API
    {
      url: '/api/images',
      method: 'get',
      timeout: 500,
      response: (req) => {
        const page = Number(req.query.page) || 1;
        const pageSize = 10;
        
        // 生成模拟数据
        const list = Array.from({ length: pageSize }, (_, i) => {
          const colors = ['4A90E2', '5CB85C', 'F0AD4E', 'D9534F', '5BC0DE', '7B68EE', 'FF6347', '32CD32'];
          const bgColor = colors[Math.floor(Math.random() * colors.length)];
          const width = 250 + Math.floor(Math.random() * 100);
          const height = 400 + Math.floor(Math.random() * 200);
          
          return {
            id: `${page}-${i}`,
            image: `https://dummyimage.com/${width}x${height}/${bgColor}/ffffff.png&text=景点${page}-${i}`,
            title: `景点标题${page}-${i}`,
            location: `城市${page}·景区${i}`,
            price: 99 + Math.floor(Math.random() * 900),
            comments: 50 + Math.floor(Math.random() * 1950),
            score: (3.5 + Math.random() * 1.5).toFixed(1),
            like: 20 + Math.floor(Math.random() * 1480)
          };
        });
        
        return {
          code: 0,
          message: 'success',
          data: {
            list,
            pagination: {
              current: page,
              pageSize: pageSize,
              total: 100,
              totalPages: Math.ceil(100 / pageSize)
            }
          }
        };
      }
    },
    
    // 文章数据API
    {
      url: '/api/articles',
      method: 'get',
      timeout: 1000,
      response: (req) => {
        const page = Number(req.query.page) || 1;
        const pageSize = Number(req.query.pageSize) || 10;
        
        const list = Array.from({ length: pageSize }, (_, i) => {
          const avatarColors = ['FF6B6B', '4ECDC4', '45B7D1', 'FFA07A', '98D8C8', 'F7DC6F', 'BB8FCE', '85C1E9'];
          const imageColors = ['4A90E2', '5CB85C', 'F0AD4E', 'D9534F', '5BC0DE', '7B68EE', 'FF6347', '32CD32'];
          
          const avatarBgColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];
          const imageBgColor = imageColors[Math.floor(Math.random() * imageColors.length)];
          
          return {
            id: `article-${page}-${i}`,
            image: `https://dummyimage.com/350x500/${imageBgColor}/ffffff.png&text=攻略${page}-${i}`,
            location: `城市${page}·文化街区${i}`,
            description: `这是一个非常棒的旅游地点，有着丰富的历史文化背景和美丽的自然风光。推荐大家一定要来体验一下。`,
            avatar: `https://dummyimage.com/80x80/${avatarBgColor}/ffffff.png&text=头像`,
            nickname: `用户${page}${i}`,
            like: 50 + Math.floor(Math.random() * 2450),
            comments: Array.from({ length: 5 + Math.floor(Math.random() * 15) }, (_, j) => ({
              id: `comment-${page}-${i}-${j}`,
              user_avatar: `https://dummyimage.com/60x60/${avatarColors[j % avatarColors.length]}/ffffff.png&text=评`,
              user_nickname: `评论者${j}`,
              user_context: `这个地方真的很不错，值得推荐！`,
              users_like: Math.floor(Math.random() * 200)
            })),
            isFocus: false
          };
        });
        
        return {
          code: 0,
          message: 'success',
          data: {
            list,
            pagination: {
              current: page,
              pageSize: pageSize,
              total: 150,
              totalPages: Math.ceil(150 / pageSize)
            }
          }
        };
      }
    },
    
    // 热门推荐API
    {
      url: '/api/hotlist',
      method: 'get',
      response: () => {
        return {
          code: 0,
          data: [
            { id: '101', city: "三叠泉" },
            { id: '102', city: "庐山索道" },
            { id: '103', city: "索江楼" },
            { id: '104', city: "宜春温泉" },
            { id: '105', city: "81青年旅舍（八一馆地铁站店）" },
            { id: '106', city: "婺源篁岭景区" },
            { id: '107', city: "平潭的景点" }
          ]
        };
      }
    },
    
    // 搜索API
    {
      url: '/api/search',
      method: 'get',
      timeout: 100,
      response: (req) => {
        const keyword = req.query.keyword || '';
        const num = Math.floor(Math.random() * 10) + 3;
        const list = Array.from({ length: num }, (_, i) => `搜索结果${i}${keyword}`);
        
        return {
          code: 0,
          data: list
        };
      }
    },
    
    // 登录API
    {
      url: '/api/login',
      method: 'post',
      response: (req) => {
        const { username, password } = req.body || {};
        if (username !== 'admin' || password !== '123456') {
          return {
            code: 40001,
            message: '找不到账户'
          };
        }
        
        return {
          code: 200,
          token: 'mock-jwt-token-123456',
          data: {
            id: '001',
            data: {
              id: '001',
              username: 'admin'
            }
          }
        };
      }
    },
    
    // 用户信息API
    {
      url: '/api/user',
      method: 'get',
      timeout: 1000,
      response: (req) => {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token || token !== 'mock-jwt-token-123456') {
          return {
            code: 40003,
            message: 'token失效，请重新登录'
          };
        }
        
        return {
          code: 200,
          data: {
            id: '001',
            username: 'admin'
          }
        };
      }
    }
  ];
  
  // 解析URL和查询参数
  function parseUrl(url) {
    try {
      const urlObj = new URL(url, window.location.origin);
      const query = {};
      urlObj.searchParams.forEach((value, key) => {
        query[key] = value;
      });
      return { pathname: urlObj.pathname, query };
    } catch (e) {
      const [pathname, search] = url.split('?');
      const query = {};
      if (search) {
        search.split('&').forEach(param => {
          const [key, value] = param.split('=');
          if (key && value !== undefined) {
            query[decodeURIComponent(key)] = decodeURIComponent(value);
          }
        });
      }
      return { pathname, query };
    }
  }
  
  // 创建mock请求对象
  function createMockRequest(url, method, body, headers) {
    const { pathname, query } = parseUrl(url);
    return {
      url: pathname,
      method: method.toLowerCase(),
      query,
      body,
      headers: headers || {}
    };
  }
  
  // 设置生产环境Mock服务器
  export function setupProdMockServer() {
    if (typeof window === 'undefined') return;
    
    // 避免重复初始化
    if (window.__PROD_MOCK_INITIALIZED__) {
      console.log('⚠️ 生产环境Mock服务器已经初始化，跳过重复初始化');
      return;
    }
    
    console.log('🚀 正在初始化生产环境Mock服务器...');
    
    // 拦截XMLHttpRequest (axios使用的)
    const originalXHROpen = XMLHttpRequest.prototype.open;
    const originalXHRSend = XMLHttpRequest.prototype.send;
    
    XMLHttpRequest.prototype.open = function(method, url, ...args) {
      this._mockMethod = method.toLowerCase();
      this._mockUrl = url;
      return originalXHROpen.apply(this, arguments);
    };
    
    XMLHttpRequest.prototype.send = function(data) {
      if (this._mockUrl && this._mockUrl.includes('/api/')) {
        console.log('🎯 拦截到API请求:', this._mockMethod.toUpperCase(), this._mockUrl);
        
        // 解析请求体
        let body = null;
        if (data) {
          try {
            body = typeof data === 'string' ? JSON.parse(data) : data;
          } catch (e) {
            body = data;
          }
        }
        
        // 获取请求头
        const headers = {};
        if (this.getRequestHeader) {
          try {
            headers['authorization'] = this.getRequestHeader('Authorization');
          } catch (e) {}
        }
        
        // 创建mock请求对象
        const mockReq = createMockRequest(this._mockUrl, this._mockMethod, body, headers);
        
        // 查找匹配的mock路由
        const matchedRoute = mockRoutes.find(route => {
          return mockReq.url.includes(route.url) && mockReq.method === route.method.toLowerCase();
        });
        
        if (matchedRoute) {
          console.log('✅ 找到匹配的Mock路由:', matchedRoute.url);
          
          // 执行mock响应函数
          const mockResponse = matchedRoute.response(mockReq, {});
          const timeout = matchedRoute.timeout || 300;
          
          // 模拟异步响应
          setTimeout(() => {
            // 设置响应状态
            Object.defineProperty(this, 'status', { value: 200, writable: false });
            Object.defineProperty(this, 'statusText', { value: 'OK', writable: false });
            Object.defineProperty(this, 'readyState', { value: 4, writable: false });
            
            // 关键修复：axios期望的响应格式
            const responseText = JSON.stringify(mockResponse);
            Object.defineProperty(this, 'responseText', { 
              value: responseText, 
              writable: false 
            });
            Object.defineProperty(this, 'response', { 
              value: responseText, 
              writable: false 
            });
            
            // 设置响应头
            this.getResponseHeader = function(name) {
              if (name.toLowerCase() === 'content-type') {
                return 'application/json; charset=utf-8';
              }
              return null;
            };
            
            this.getAllResponseHeaders = function() {
              return 'content-type: application/json; charset=utf-8\r\n';
            };
            
            console.log('✅ Mock响应数据已准备:', mockResponse);
            
            // 安全地设置readyState并触发事件
            const setReadyStateAndTrigger = (state) => {
              try {
                // 尝试直接设置，如果失败则跳过
                if (this.readyState !== state) {
                  Object.defineProperty(this, 'readyState', { 
                    value: state, 
                    writable: false,
                    configurable: true 
                  });
                }
              } catch (e) {
                // 如果无法重新定义，直接触发事件
                console.log('ReadyState已存在，直接触发事件');
              }
              
              // 无论如何都触发readystatechange事件
              if (this.onreadystatechange) {
                this.onreadystatechange();
              }
            };
            
            // 直接设置为最终状态并触发所有必要事件
            setReadyStateAndTrigger(4); // DONE
            
            // 触发其他重要事件
            setTimeout(() => {
              if (this.onload) {
                this.onload();
              }
              if (this.onloadend) {
                this.onloadend();
              }
            }, 10);
          }, timeout);
          
          return;
        } else {
          console.log('❌ 未找到匹配的Mock路由，使用原始请求');
        }
      }
      
      // 非API请求或找不到匹配路由，使用原始send
      return originalXHRSend.apply(this, arguments);
    };
    
    // 标记已初始化
    window.__PROD_MOCK_INITIALIZED__ = true;
    console.log('✅ 生产环境Mock服务器初始化完成！');
    
    // 可选：添加全局方法来检查mock状态
    window.__getMockStatus__ = () => ({
      initialized: true,
      routesCount: mockRoutes.length,
      routes: mockRoutes.map(r => ({ url: r.url, method: r.method }))
    });
  }