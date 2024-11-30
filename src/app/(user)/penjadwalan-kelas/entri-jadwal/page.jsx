import {Utils} from "@/components";
import {default as EntriJadwalKuliah} from "@views/penjadwalan-kelas/entri-jadwal"
export async function generateMetadata(){
    return {
        title: Utils.getDocumentTitle('Penjadwalan kelas > Entri jadwal kuliah'),
    }
}
export default function Index(){
    return <EntriJadwalKuliah/>
}