import { 
    createWriteStream,
    existsSync,
    mkdirSync,
    readFileSync,
    writeFileSync,
    readdirSync,
    statSync
} from 'fs';

import {
    join
} from 'path';
// process.cwd() 是运行命令的当前工作目录
// path.join 拼接路径字符串，不解析；path.resolve 从右到左解析，遇绝对路径替换，返回绝对路径
const ROOT = process.cwd();
const UPLOAD_ROOT = join(ROOT, "uploads");
// Meta 描述文件
export type Meta = {
    fileName: string;
    fileSize: number;
    chunkSize: number;
    totalChunks: number;
    uploadedChunks: number[];
    complete: boolean;
    finalPath?: string;
}

// 获取上传目录
export function getUploadDir(fileHash:string) {
    const dir = join(UPLOAD_ROOT, fileHash);
    const chunkDir = join(dir, "chunks");
    return {
        dir,
        chunkDir
    }
}

// 确保上传目录存在
export const ensureUploadDirs = (fileHash: string) => {
    const {dir, chunkDir} = getUploadDir(fileHash);
    // 建立目录
    if (!existsSync(UPLOAD_ROOT)) mkdirSync(UPLOAD_ROOT);
    if (!existsSync(dir)) mkdirSync(dir);
    if (!existsSync(chunkDir)) mkdirSync(chunkDir);
    return {
        dir, 
        chunkDir
    }
}

// 保存分片
export function saveChunk(fileHash: string, chunkIndex: number, blob: Buffer) {
    const { 
        chunkDir 
    } = ensureUploadDirs(fileHash);
    const filePath = join(chunkDir, `${chunkIndex}.part`);
    const stream = createWriteStream(filePath);
    // stream 流式写入 stream.on 类似于前端的addEventListener
    return new Promise<void>((resolve, reject) => {
        stream.on("error", reject);
        stream.on("finish", () => resolve());
        stream.end(blob);
    })
}

// 获取meta.json文件路径
export function metaPath(fileHash: string) {
    // 文件描述 放在/uploads/fileHash/meta.json
    return join(getUploadDir(fileHash).dir, "meta.json");
}

// 读取meta.json文件 返回文件信息
export function readMeta(fileHash: string): Meta | null {
    const p = metaPath(fileHash); // meta.json 文件Meta 描述文件
    if (!existsSync(p)) return null;
    const raw = readFileSync(p, "utf-8");
    return JSON.parse(raw) as Meta;
}

// 写入meta.json文件
export function writeMeta(fileHash: string, meta: Meta) {
    writeFileSync(metaPath(fileHash), 
        JSON.stringify(meta, null, 2));
} 

// 获取已上传的分片
export function listUploadedChunks(fileHash: string):number[] {
    const { chunkDir } = getUploadDir(fileHash);
    if (!existsSync(chunkDir)) return [];
    const files = readdirSync(chunkDir);
    const ids = files
        .map((f) => Number(f.split(".")[0]))
        .filter(n => Number.isInteger(n))
        .sort((a, b) => a - b)
    return ids
}

// 获取最终文件路径
export function finalFilePath  (fileHash: string, fileName: string) {
    const {
        dir
    } = getUploadDir(fileHash);
    return join(dir, fileName);
}

// 文件是否存在
export function fileAlreadyExist(fileHash: string, fileName: string) {
    const p = finalFilePath(fileHash, fileName);
    return existsSync(p) && statSync(p).size > 0;
}

// 合并分片
export async function mergeChunks(fileHash: string,fileName: string,
    totalChunks: number) {
    const {
        chunkDir
    } = getUploadDir(fileHash);
    const target = finalFilePath(fileHash, fileName);
    const ws = createWriteStream(target);
    for (let i = 0; i < totalChunks; i++) {
        const p = join(chunkDir,`${i}.part`);
        if (!existsSync(p)) throw new Error(`缺少分片：${i}`);
        const data = readFileSync(p);
        ws.write(data);
    }
    ws.end();
    return new Promise((resolve, reject) => {
        ws.on("finish", () => resolve(target));
        ws.on("error", reject);
    })
}