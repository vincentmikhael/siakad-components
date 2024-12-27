import Kurikulum from "@views/data-utama/Kurikulum";
import {Utils} from "@/components";

export async function generateMetadata() {
    return {
        title: Utils.getDocumentTitle('Data Utama > Kurikulum'),
    }
}

export default async function KurikulumPage() {
    return (
        <Kurikulum/>
    )
}