import path from 'path'
import { config } from 'process';

function htmlMinifyPlugin() {
    let isBuild = false; // 标记是否为构建模式
    return {
        name: 'html-minify',
        config(config, {command}) {
        isBuild = command === 'build';
        if(!isBuild) {
            console.log('[html-minify] 开发模式 跳过HTML压缩')
        }
    },
    // index.html
    transformIndexHtml(html) {
        order: 'post',
        async transform(html,{bundle}){
            if(!isBuild || !bundle) return html;

            console.log('[html-minify] 构建模式 压缩HTML')
            const minifiedHtml = 
        }
    }
    }
}

export default htmlMinifyPlugin