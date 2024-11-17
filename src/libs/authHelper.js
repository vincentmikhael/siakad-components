import jwt from "jsonwebtoken";
import {getSession, setSession} from "@libs/redisHelper";
import {NextResponse} from "next/server";

export async function checkSession(sessionId) {
    const userSession = await getSession(sessionId);
    if (!userSession) {
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_MYITN_BASE_URL}/login`, 308);
    }

    let {data, accessToken, refreshToken} = JSON.parse(userSession);
    const secretKey = process.env.JWT_ACCESS_TOKEN_SECRET;
    // Verify accessToken
    try {
        jwt.verify(accessToken, secretKey);
        return accessToken; // Token is valid
    } catch (error) {
        if (error.code === "ERR_JWT_EXPIRED") {
            const newData = await refreshAccessToken(refreshToken);
            const {accessToken: newAccessToken, refreshToken: newRefreshToken} = newData;
            await setSession(sessionId, {data, accessToken: newAccessToken, refreshToken: newRefreshToken});
            return newAccessToken;
        } else {
            throw new Error("Invalid or expired token, and no refresh token available");
        }
    }
}

export async function refreshAccessToken(refreshToken) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SIAKAD_BASE_URL}/auth/refresh-token`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({refreshToken}),
    });

    if (!response.ok) throw new Error("Failed to refresh token");

    const data = await response.json();
    return data;
}
