import MataKuliah from "@/views/data-utama/MataKuliah";
import {Utils} from "@/components";
import getMatkulListInit from "@/libs/list-init/data-utama/MataKuliah";

export async function generateMetadata() {
    return {
        title: Utils.getDocumentTitle('Data Utama > Mata Kuliah'),
    }
}

export default async function MataKuliahPage() {
    const listInit = await getMatkulListInit();
    console.log(listInit)
    return (
        <MataKuliah listInit={listInit}/>
    )
}