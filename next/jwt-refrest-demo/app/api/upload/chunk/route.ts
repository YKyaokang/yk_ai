import {
    NextRequest,
    NextResponse
} from 'next/server';
import {
    saveChunk,
    readMeta,
    writeMeta,
    listUploadedChunks
} from '@/lib/upload-server';

export async function PUT(req: NextRequest) {

    // 从请求头获取文件标识和分片索引
    const fileHash = req.headers.get("x-file-hash");
    const chunkIndex = Number(req.headers.get("x-chunk-index"));
    console.log(fileHash, chunkIndex, "--------")
   
    if (!fileHash || Number.isNaN(chunkIndex)) {
        return NextResponse.json({
            error: '缺少x-file-hash或x-chunk-index'
        }, {
            status: 400
        });
    }

    // 获取HTTP**请求体**中的所有二进制数据
    // 返回：ArrayBuffer 对象（JavaScript的二进制数据容器）
    // 异步：需要等待所有数据接收完毕（这里指的是当前块的数据：const blob = file!.slice(start, end);）
    const buf = Buffer.from(await req.arrayBuffer());
    await saveChunk(fileHash, chunkIndex, buf);

    //meta.json 是整个文件的"上传日志"，记录哪些部分已经成功上传，实现断点续传功能。
    const meta = readMeta(fileHash);
    if (meta) {
        const set = new Set([...(meta.uploadedChunks ?? []), chunkIndex]);
        meta.uploadedChunks = Array.from(set).sort((a, b) => a - b);
        writeMeta(fileHash, meta);
    }

    //这段代码是响应客户端，告知分片上传结果，对应我之前说的第4步：返回上传状态。
    return NextResponse.json({
        ok: true,
        uploaded: listUploadedChunks(fileHash)
    })
}