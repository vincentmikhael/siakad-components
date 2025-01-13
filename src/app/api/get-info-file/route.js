'use server';

import {promises as fs} from 'fs';
import {join, normalize, extname} from 'path';
import {NextResponse} from "next/server";

export async function GET(request) {
    const url = new URL(request.url);
    const fileName = url.searchParams.get('fileName');

    if (!fileName) {
        return NextResponse.json({success: false, message: 'File name not provided'}, {status: 400});
    }

    const safeFileName = decodeURIComponent(fileName).replace(/\.\.\//g, '');
    const filePath = normalize(join(process.cwd(), 'public/uploads', safeFileName));

    if (!filePath.startsWith(join(process.cwd(), 'public/uploads'))) {
        return NextResponse.json({success: false, message: 'Invalid file path'}, {status: 400});
    }

    try {
        const fileType = extname(fileName).toLowerCase();
        const fileSize = (await fs.readFile(filePath)).length;

        const fileInformation = {
            name: fileName,
            size: fileSize,
            type: fileType,
            url: `/uploads/${fileName}`
        }
        return NextResponse.json({success: true, data: fileInformation}, {status: 200});
    } catch (error) {
        console.log(error)
        return NextResponse.json({success: false, message: "File not found"}, {status: 404});
    }
}
