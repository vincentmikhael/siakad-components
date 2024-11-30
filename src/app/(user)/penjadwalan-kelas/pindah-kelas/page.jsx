import {Utils} from "@/components";
import {default as PindahKelas} from "@views/penjadwalan-kelas/pindah-kelas"
export async function generateMetadata(){
    return {
        title: Utils.getDocumentTitle('Penjadwalan kelas > Pindah kelas'),
    }
}
export default function Index(){
    return <PindahKelas />
}