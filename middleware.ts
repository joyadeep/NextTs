import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
console.log("middleware executed")
const {pathname}=request.nextUrl;
const token=request.cookies.get("adminToken")?.value;
const ignoredRoutes= pathname==="/auth" || pathname === "/api/login"

if(ignoredRoutes){
    if (token){
        return NextResponse.redirect(new URL("/experience",request.url))
    }
}
else {
    if(!token){
        return NextResponse.redirect(new URL("/auth",request.url))
    }
}

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/auth', '/api/login' , '/api/register']
}