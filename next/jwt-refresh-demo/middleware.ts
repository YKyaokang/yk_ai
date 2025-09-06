import { 
    NextRequest,
    NextResponse
} from "next/server";

const protectedPath = ['/dashboard','/profile']

// 请求响应的中间处理 pre -> middleware -> next
export async function middleware(request:NextRequest){
    const path = request.nextUrl.pathname;
    console.log(path);
    console.log("打中间件这必须过一下子");
    // 非保护的  
    if(!protectedPath.some(p => path.startsWith(p))){
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/login',request.url));
}