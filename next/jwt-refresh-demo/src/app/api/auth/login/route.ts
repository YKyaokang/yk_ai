import {
    NextRequest,
    NextResponse
} from "next/server";
import {
    prisma
} from '@/lib/db';
import {
    emailRegex,
    passwordRegex
} from '@/lib/regexp';
import bcrypt from "bcryptjs";
import {
    createTokens
    setAuthCookies
} from '@/lib/jwt';

export async function POST(request:NextRequest){
    try {
        const {
            email,
            password
        } = await request.json();

        if(!email || !emailRegex.test(email)) {
            return NextResponse.json({
                error:'Email 输入有误'
            },{
                status: 400
            })
        }

        if(!password || !passwordRegex.test(email)) {
            return NextResponse.json({
                error:'password 输入有误'
            },{
                status: 400
            })
        }

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });

        // 用户不存在
        if(!user) {
            return NextResponse.json({
                error: 'Invalid credentials'
            },{
                status: 401
            })
        }

        const isPassword = await bcrypt.compare(password, user.password)
        if(!isPassword) {
            return NextResponse.json({
                error: 'Invalid credentials'
            },{
                status: 401
            })
        }

        const { accessToken, refreshToken } = await createTokens(user.id);

        await prisma.user.update({
            where:{
                id: user.id
            },
            data: {
                refreshToken
            }
        })
        
        // localStorage 前端
        // SSR 选择cookie

        setAuthCookies(accessToken, refreshToken);

        return NextRequest.json({
            message: 'Login successful'
        })

    }catch(err){
        console.error(err);
        return NextResponse.json({
            error: 'Internal server error'
        },{
            status: 500
        })
    } finally {
        // 后端性能优化：当用完了之后 释放数据库对象
        await prisma.$disconnect();
    }
}