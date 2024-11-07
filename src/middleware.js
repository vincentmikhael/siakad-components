import {NextResponse} from "next/server";
import {jwtVerify} from "jose";

// import { getSession } from "./libs/helper";

export async function middleware(request) {
    const {pathname} = request.nextUrl;
    const publicPaths = ["/sso"];

    //dapatkan session id dari cookies
    const sessionId = request.cookies.get("s_id")?.value;
    let isAuthenticated = false;

    if (sessionId) {
        const secretKey = new TextEncoder().encode(
            process.env.JWT_ACCESS_TOKEN_SECRET
        );

        try {
            // Panggil endpoint get-session dengan session id
            const response = await fetch(
                `${request.nextUrl.origin}/api/get-session?s_id=${sessionId}`
            );

            if (response.ok) {
                const data = await response.json();

                const app = data.data.app_access.find((app) => app.url === request.nextUrl.origin); //cek apakah user punya akses app
                if (data.accessToken && app) {
                    await jwtVerify(data.accessToken, secretKey);
                    isAuthenticated = true;
                }
            }

        } catch (error) {
            console.error("JWT Verification Error:", error.message);
        }
    }

    if (isAuthenticated && publicPaths.includes(pathname)) {
        return NextResponse.redirect(
            new URL(request.headers.get("referer") || "/", request.url)
        );
    }

    if (!isAuthenticated && !publicPaths.includes(pathname)) {
        return NextResponse.redirect(new URL(`${process.env.MYITN_BASE_URL}/login`, request.url));
    }
    //redirect jika akses "/"
    if (pathname === "/") {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    //redirect jika akses "/data-utama"
    if (pathname === "/data-utama") {
        return NextResponse.redirect(new URL('/data-utama/fakultas', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/",
        "/dashboard",
        "/data-utama/:path*"
    ],
};
