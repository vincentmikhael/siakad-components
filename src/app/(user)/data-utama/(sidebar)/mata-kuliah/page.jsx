import MataKuliah from "@/views/data-utama/MataKuliah";
import {Utils} from "@/components";

export async function generateMetadata() {
    return {
        title: Utils.getDocumentTitle('Data Utama > Mata Kuliah'),
    }
}

export default async function MataKuliahPage() {
    return (
        <MataKuliah/>
    )
}