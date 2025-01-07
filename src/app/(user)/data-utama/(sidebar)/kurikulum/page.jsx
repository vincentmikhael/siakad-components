import Kurikulum from "@views/data-utama/Kurikulum";
import {Utils} from "@/components";
import getKurikulumListInit from "@libs/list-init/data-utama/Kurikulum";

export async function generateMetadata() {
    return {
        title: Utils.getDocumentTitle('Data Utama > Kurikulum'),
    }
}

export default async function KurikulumPage() {
    const listInit = await getKurikulumListInit()
    return (
        <Kurikulum listInit={listInit.fakultas}/>
    )
}