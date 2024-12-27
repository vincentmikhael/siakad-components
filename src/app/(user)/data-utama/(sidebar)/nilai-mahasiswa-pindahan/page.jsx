import NilaiMahasiswaPindahan from "@views/data-utama/NilaiMahasiswaPindahan";
import {Utils} from "@/components";

export async function generateMetadata() {
    return {
        title: Utils.getDocumentTitle('Data Utama > Nilai Mahasiswa Pindahan'),
    }
}

export default async function NilaiMahasiswaPindahanPage() {
    return (
        <NilaiMahasiswaPindahan/>
    )
}