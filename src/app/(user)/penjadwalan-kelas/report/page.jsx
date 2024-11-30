import {Utils} from "@/components";
import {default as Report} from "@views/penjadwalan-kelas/report"
export async function generateMetadata(){
    return {
        title: Utils.getDocumentTitle('Penjadwalan kelas > Report'),
    }
}
export default function Index(){
    return <Report/>
}