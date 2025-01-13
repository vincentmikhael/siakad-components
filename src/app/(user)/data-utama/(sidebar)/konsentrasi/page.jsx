import {Utils} from "@/components";
import Konsentrasi from "@/views/data-utama/Konsentrasi";
import getKonsentrasiListInit from "@/libs/list-init/data-utama/Konsentrasi";

export async function generateMetadata() {
    return {
        title: Utils.getDocumentTitle('Data Utama > Konsentrasi'),
    }
}

export default async function KonsentrasiPage() {
    const listInit = await getKonsentrasiListInit()

    return (
        <Konsentrasi listInit={listInit}/>
    )
}


