// 负责post.json的模块化
// 支持了fs的promise 版本(刚才用的是同步的SYNC 现在使用的是异步版本支持then)
import fs from 'fs/promises';
// readFileSync 同步的 
// readFile() 异步的 callback
// fs 推出了Promsie 版本（引入的时候加上/promises）
import { client } from './llm.mjs';

const inputFilePath = './data/post.json';
const outputFilePath = './data/post_with_embedding.json';

// 最流行写法
const data = await fs.readFile(inputFilePath,"utf-8");
console.log(data);
// 向量化

const posts = JSON.parse(data);
const postsWithEmbedding = [];

for(const {title, category} of posts) {
    // console.log(title, category, '---------');
    const response = await client.embeddings.create({
        model: 'text-embedding-ada-002',
        input: `标题: ${title} 分类：${category}`
    })
    postsWithEmbedding.push({
        title,
        category,
        embeddings: response.data[0].embedding
    })
}



await fs.writeFile(outputFilePath,JSON.stringify(
    postsWithEmbedding,
    null,
    2
))