import {Utils} from "@/components";
import Out from "@views/status-mahasiswa/Out";

export async function generateMetadata() {
    return {
        title: Utils.getDocumentTitle('Status Mahasiswa > Out'),
    }
}

export default function StatusMahasiswaOutPage() {
    return (
        <Out/>
    )
}