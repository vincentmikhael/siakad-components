import PrasyaratMK from "@views/data-utama/PrasyaratMK";
import {Utils} from "@/components";

export async function generateMetadata() {
    return {
        title: Utils.getDocumentTitle('Data Utama > Prasyarat Mata Kuliah'),
    }
}

export default async function PrasyaratMataKuliahPage() {
    return (
        <PrasyaratMK/>
    )
}