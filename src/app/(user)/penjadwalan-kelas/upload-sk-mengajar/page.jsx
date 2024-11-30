import {Utils} from "@/components";
import {default as UploadSkMengajar} from "@views/penjadwalan-kelas/upload-sk-mengajar"
export async function generateMetadata(){
    return {
        title: Utils.getDocumentTitle('Penjadwalan kelas > Upload SK mengajar'),
    }
}
export default function Index(){
    return <UploadSkMengajar/>
}