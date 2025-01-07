import getProdiListInit from "@libs/list-init/data-utama/Prodi";
import Prodi from "@views/data-utama/Prodi";
import {Utils} from "@/components";

export async function generateMetadata() {
    return {
        title: Utils.getDocumentTitle('Data Utama > Prodi'),
    }
}

export default async function ProdiPage() {
    let listInit = await getProdiListInit()
    return (
        <Prodi listInit={listInit}/>
    )
}