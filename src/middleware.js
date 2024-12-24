import {NextResponse} from "next/server";
import {jwtVerify} from "jose";

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
                const {data, accessToken, refreshToken} = await response.json();
                const app = data.app_access.find((app) => app.url === request.nextUrl.origin);//cek apakah user punya akses app
                if (accessToken && app) {
                    try {
                        await jwtVerify(accessToken, secretKey);
                        isAuthenticated = true;
                    } catch (error) {
                        if (error.code === "ERR_JWT_EXPIRED") {
                            const newData = await fetch(`${process.env.NEXT_PUBLIC_SIAKAD_BASE_URL}/auth/refresh-token`, {
                                method: "POST",
                                headers: {"Content-Type": "application/json"},
                                body: JSON.stringify({refreshToken}),
                            });
                            const {accessToken: newAccessToken, refreshToken: newRefreshToken} = await newData.json();
                            const setSession = await fetch(`${request.nextUrl.origin}/api/set-session?s_id=${sessionId}`, {
                                method: "POST",
                                headers: {"Content-Type": "application/json"},
                                body: JSON.stringify({data, accessToken: newAccessToken, refreshToken: newRefreshToken})
                            })
                            if (setSession.ok) {
                                isAuthenticated = true
                            }
                        }
                    }
                }
            }

        } catch (error) {
            console.error("JWT Verification Error:", error.message);
        }
    }

    if (publicPaths.includes(pathname)) {
        return NextResponse.redirect(
            new URL(request.headers.get("referer") || "/", request.url)
        );
    }

    if (!isAuthenticated && !publicPaths.includes(pathname)) {
        return NextResponse.redirect(new URL(`${process.env.NEXT_PUBLIC_MYITN_BASE_URL}/login`, request.url));
    }
    //redirect jika akses "/"
    if (isAuthenticated && pathname === "/") {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    //redirect jika akses "/data-utama"
    if (isAuthenticated && pathname === "/data-utama") {
        return NextResponse.redirect(new URL('/data-utama/fakultas', request.url));
    }
    //redirect jika akses "/penjadwalan-kelas"
    if (isAuthenticated && pathname === "/penjadwalan-kelas") {
        return NextResponse.redirect(new URL('/penjadwalan-kelas/entri-pengajar', request.url));
    }
    //redirect jika akses "/manajemen-user"
    if (isAuthenticated && pathname === "/manajemen-user") {
        return NextResponse.redirect(new URL('/manajemen-user/user', request.url));
    }
    //redirect jika akses "/status-mahasiswa"
    if (isAuthenticated && pathname === "/status-mahasiswa") {
        return NextResponse.redirect(new URL('/status-mahasiswa/cuti', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/",
        "/dashboard",
        "/data-utama/:path*",
        '/penjadwalan-kelas/:path*',
        '/manajemen-user/:path*',
        '/penjadwalan-ujian/:path*',
        '/status-mahasiswa/:path*',
        '/pengumuman'
    ],
};
