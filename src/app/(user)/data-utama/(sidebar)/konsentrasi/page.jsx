import Konsentrasi from "@/views/data-utama/Konsentrasi";
import {Utils} from "@/components";

export async function generateMetadata() {
    return {
        title: Utils.getDocumentTitle('Data Utama > Konsentrasi'),
    }
}

export default async function Page() {
    return (
        <Konsentrasi/>
    )
}