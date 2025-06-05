// // 这里可以添加你的JavaScript代码
// console.log('WebLLM项目已启动');
// // js 主动的去拉取http 接口
// // web1.0 时代 html/css/js 
// // web2.0 时代 js 主动地请求后端服务器 动态页面
// const res = fetch('https://api.github.com/users/YKyaokang/repos')
// .then(res => res.json())
// .then(data => {
//     console.log(data);
//     document.querySelector('#reply').innerHTML += data.map(repo => `
//         <ul>
//         <li>${repo.name}</li>
//         </ul>
//         `).join('')
    
// })
// 当LLM 以API形式出现时
// chat 方式 AIGC 生成/完成 返回的内容
// 由openai 制定的 API 接口
// 请求行 
// WebLLM web 底层是 http 协议
// api.deepseek.com 二级域名 LLM服务以api的方式提供
// https 加密的http 更安全 
// /chat 聊天的方式 messages 
// completions 完成的
const endpoint = "https://api.deepseek.com/chat/completions";
// llm api 服务 
// 请求头
const headers = {
    //传输的内容的类型
    'Content-Type': 'application/json',
    'Authorization': 'Bearer sk-3b40e7caffa149ef802a37d359f2da32'
}
// 请求头
const payload = {
    model: "deepseek-chat",
    messages: [
        // chat 三种方式 
        // 1. 系统角色 只会出现一次 设置系统的角色 开始会话时
        // 2. 用户角色 user 提问
        // 3. 助手角色 
        {
            role: "system",
            content: "你是一个人工智能助手"
        },
        {
            role: "user",
            content: "你到底是谁？"
        }
    ]
}

fetch(endpoint, {
    method: "POST",
    headers: headers,
    //对象字面量 => 字符串  传输的时候只能放字符串,二进制流
    body: JSON.stringify(payload)
    //请求 ＋ LLM 生成需要花时间 
    //返回的也是文本或二进制流
}).then(res=>res.json()) //解析返回的json数据也要花时间
.then(data=>{
    document.querySelector('#reply').innerHTML += data.choices[0].message.content;
})