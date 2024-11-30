import {Utils} from "@/components";
import {default as CekBentrok} from "@views/penjadwalan-kelas/cek-bentrok"
export async function generateMetadata(){
    return {
        title: Utils.getDocumentTitle('Penjadwalan kelas > Cek bentrok'),
    }
}
export default function Index(){
    return <CekBentrok/>
}