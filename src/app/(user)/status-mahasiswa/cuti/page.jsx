import {Utils} from "@/components";
import Cuti from "@views/status-mahasiswa/Cuti";

export async function generateMetadata() {
    return {
        title: Utils.getDocumentTitle('Status Mahasiswa > Cuti'),
    }
}

export default function StatusMahasiswaCutiPage() {
    return (
        <Cuti/>
    )
}