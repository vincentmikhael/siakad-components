'use server';
import {writeFile} from 'fs/promises';
import {NextResponse} from 'next/server';
import {join, extname} from 'path';

// Daftar MIME type yang diperbolehkan
const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

export async function POST(request) {
    try {
        const data = await request.formData();
        const file = data.get('file');

        if (!file) {
            return NextResponse.json({success: false, message: 'File not provided'}, {status: 400});
        }

        // Validasi MIME type
        if (!allowedMimeTypes.includes(file.type)) {
            return NextResponse.json({
                success: false,
                message: 'Invalid file type. Only JPG, PNG, PDF, and Excel files are allowed.'
            }, {status: 400});
        }

        // Validasi ekstensi file
        const ext = extname(file.name).toLowerCase();
        const allowedExtensions = ['.jpg', '.jpeg', '.png', '.pdf', '.xlsx'];

        if (!allowedExtensions.includes(ext)) {
            return NextResponse.json({
                success: false,
                message: 'Invalid file extension. Only JPG, PNG, PDF, and Excel files are allowed.'
            }, {status: 400});
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const filePath = join(process.cwd(), 'public/uploads', file.name);
        await writeFile(filePath, buffer);
        console.log(`File uploaded to ${filePath}`);

        return NextResponse.json({success: true, message: 'File uploaded successfully'});
    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({success: false, message: 'Error uploading file'}, {status: 500});
    }
}
