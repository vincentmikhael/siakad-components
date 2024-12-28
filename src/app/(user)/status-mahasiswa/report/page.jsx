import {Utils} from "@/components";
import Report from "@views/status-mahasiswa/Report";

export async function generateMetadata() {
    return {
        title: Utils.getDocumentTitle('Status Mahasiswa > Report'),
    }
}

export default function ReportPage() {
    return (
        <Report/>
    )
}