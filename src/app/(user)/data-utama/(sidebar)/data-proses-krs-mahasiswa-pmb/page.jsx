import ProsesKrsMahasiswaPMB from "@views/data-utama/ProsesKrsMahasiswaPMB";
import {Utils} from "@/components";

export async function generateMetadata() {
    return {
        title: Utils.getDocumentTitle('Data Utama > Proses KRS Mahasiswa PMB'),
    }
}

export default async function ProsesKRSMahasiswaPMBPage() {
    return (
        <ProsesKrsMahasiswaPMB/>
    )
}