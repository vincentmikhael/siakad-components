'use server'

import {cookies} from "next/headers"

export const setCookie = async (name, value, httpOnly, secure, maxAge, path, sameSite) => {
    cookies().set(name, value, {
        httpOnly: httpOnly ?? true,
        secure: process.env.NODE_ENV === "production",
        maxAge: maxAge ?? 60 * 60 * 24, // default 1 hari
        path: path ?? '/',
        sameSite: sameSite ?? 'strict'
    })
}

export const deleteCookie = async (name) => {
    cookies().delete(name)
}

export const getCookie = (name) => {
    return cookies().get(name)
}