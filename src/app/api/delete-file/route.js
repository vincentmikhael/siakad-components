'use server';
import {unlink} from 'fs/promises';
import {NextResponse} from 'next/server';
import {join} from 'path';

export async function DELETE(request) {
    try {
        const data = await request.json();
        const {fileName} = data;

        if (!fileName) {
            return NextResponse.json({success: false, message: 'File name not provided'}, {status: 400});
        }

        // Tentukan path file berdasarkan fileName yang diterima
        const filePath = join(process.cwd(), 'public/uploads', fileName);

        // Menghapus file
        await unlink(filePath);
        console.log(`File deleted: ${filePath}`);

        return NextResponse.json({success: true, message: 'File deleted successfully'});
    } catch (error) {
        console.error('Error deleting file:', error);
        return NextResponse.json({success: false, message: 'Error deleting file'}, {status: 500});
    }
}
