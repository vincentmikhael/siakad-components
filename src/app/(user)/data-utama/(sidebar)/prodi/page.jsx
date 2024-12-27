import getProdiListInit from "@libs/getProdiListInit";
import Prodi from "@views/data-utama/Prodi";
import {Utils} from "@/components";

export async function generateMetadata() {
    return {
        title: Utils.getDocumentTitle('Data Utama > Prodi'),
    }
}

export default async function ProdiPage() {
    let prodiList = await getProdiListInit()
    return (
        <Prodi listFakultas={prodiList}/>
    )
}