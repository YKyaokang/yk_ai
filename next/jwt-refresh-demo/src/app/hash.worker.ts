export type HashWorkerIn = {
    type: 'HASH';
    file: File;
    chunkSize: number;
}

export type HashWorkerOut = {
    type: 'DONE';
    hash: string;
} | {
    type: 'PROGRESS';
    progress: number;
}
async function sha256ArrayBuffer(buf: ArrayBuffer): Promise<string> {
    const hashBuffer = await crypto.subtle.digest('SHA-256', buf);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }
// 计算型任务较多时 用worker后台计算
self.onmessage = async(e: MessageEvent<HashWorkerIn>) => {
    const msg = e.data;
    if (msg.type === 'HASH')
    {
        const {file, chunkSize} = msg;
        const total = Math.ceil(file.size / chunkSize);
        // 二进制处理（缓存二进制 当黑盒子）
        const chunks:ArrayBuffer[] = [];
        for (let i = 0 ; i < total ; i++)
        {
            const start = i * chunkSize;
            const end = Math.min(file.size,start + chunkSize);
            const chunk = file.slice(start,end);
            const buf = await chunk.arrayBuffer();
            chunks.push(buf);
            (self as any).postMessage({
                type: 'PROGRESS',
                progress: (i + 1) / total
            } as HashWorkerOut)
        }
        const whole = new Blob(chunks);
        const hash = await sha256ArrayBuffer(await whole.arrayBuffer())

    }
}