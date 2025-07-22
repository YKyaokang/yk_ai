export default [
    {
        url: '/api/repos', // 接口路径
        method: 'get',     // 请求方法
        timeout: 500,      // 模拟延迟
        response: () => {
            // 模拟数据
            const repos = [
                {
                    id: 1,
                    title: 'vue3源码分析',
                    description: '深入理解Vue3响应式原理',
                    stars: 1200
                },
                {
                    id: 2,
                    title: 'react hooks指南',
                    description: '全面掌握React Hooks用法',
                    stars: 800
                }
            ]
            return {
                code: 200, // 状态码
                message: 'success',
                data: repos
            }
        }
    }
]