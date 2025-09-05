import {
    NextRequest,
    NextResponse
} from "next/server";

import {
    prisma
} from '@/lib/db'
// restful 
export async function POST(request:NextRequest){
    // 容错处理 稳定为主
    try {
        const {
            email,
            password
        } = await request.json();
        // 正则
        if(!email || !password){
            return NextResponse.json({
                error: `Email and password required`
            },{
                status: 400
            })
        }
    } catch(error) {

    }
}