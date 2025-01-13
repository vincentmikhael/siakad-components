'use server';

import {constants, promises as fs} from 'fs';
import {NextResponse} from 'next/server';
import {join, normalize} from 'path';

export async function DELETE(request) {
    try {
        const url = new URL(request.url);
        const fileName = url.searchParams.get('fileName');
        if (!fileName) {
            return NextResponse.json({success: false, message: 'File name not provided'}, {status: 400});
        }

        // Decode dan normalisasi fileName untuk mencegah path traversal
        const safeFileName = decodeURIComponent(fileName).replace(/\.\.\//g, '');
        const filePath = normalize(join(process.cwd(), 'public/uploads', safeFileName));

        // Pastikan file berada dalam folder uploads
        if (!filePath.startsWith(join(process.cwd(), 'public/uploads'))) {
            return NextResponse.json({success: false, message: 'Invalid file path'}, {status: 400});
        }
        // cek file exist
        try {
            await fs.access(filePath, constants.F_OK);
        } catch {
            return NextResponse.json({success: false, message: 'File not found'}, {status: 404});
        }

        // hapus file di directory
        await fs.unlink(filePath);

        return NextResponse.json({success: true, message: 'File deleted successfully'});
    } catch (error) {
        const message = error.code === 'ENOENT' ? 'File not found' : 'Error deleting file';
        return NextResponse.json({success: false, message}, {status: 500});
    }
}
