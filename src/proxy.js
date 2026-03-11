
"use server"
import { NextResponse } from "next/server";

export function proxy(request) {
    console.log(request.cookies.has("authToken"));
    
    if(!request.cookies.has("authToken")){
        return NextResponse.redirect(new URL ('/no-access', request.url));
    }}

export const config = {
    matcher: ["/profile/:path*"],
};