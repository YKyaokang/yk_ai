- npx create-next-app@latest  my-todo
    基于create-next-app 创建了一个my-todo next.js 项目
- npx 
    不用安装，先安装，可以直接运行，适合项目的测试
    不会留下痕迹，不影响全局 
    如果不用npx的话，到了不同环境下：npm i -g create-next-app@latest
    尝试一下某种技术的时候，特别有用

- CSR and SSR
    组件在客户端运行 模板的编译，挂载等 浏览器端(client) SPA 谈不上SEO
    Next.js 服务器端渲染SSR 组件的编译发生在服务器端，SEO非常好 
    爬虫爬取的是服务器端返回的html 而CSR 只有一个#root 
    企业站,SEO,掘金 next.js （为了提高SEO，）