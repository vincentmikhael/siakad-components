import Fakultas from "@views/data-utama/Fakultas";
import {Utils} from "@/components";

export async function generateMetadata() {
    return {
        title: Utils.getDocumentTitle('Data Utama > Fakultas'),
    }
}

export default async function FakultasPage() {
    return (
        <Fakultas/>
    )
}