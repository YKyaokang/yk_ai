import {
    client
} from './llm.mjs';
import fs from 'fs/promises';

const inputFilePath = './data/post_with_embedding.json';
const outputFilePath = './data/post_with_embedding.json';

const data = await fs.readFile(inputFilePath, 'utf-8');
const posts = JSON.parse(data);


// 向量  cosine函数  文本语义检索
// 你好  hello
// LIKE 文本的检索

const response = await client.embeddings.create({
    model: 'text-embedding-ada-002',
    input: `前端框架相关内容`
});
console.log(response.data[0].embedding);