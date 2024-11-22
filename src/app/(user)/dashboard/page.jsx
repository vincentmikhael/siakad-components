import {Utils} from "@/components";
import {default as DashboardView} from "@views/dashboard"

export async function generateMetadata(/*{params}*/) {
    return {
        title: Utils.getDocumentTitle('Dashboard'),
    }
}

export default function Dashboard() {
    const academic = {
        1: {start: '01 September 2024', end: '28 February 2025', name: '2024 / 2025 Ganjil'},
        2: {start: '01 March 2025', end: '31 August 2025', name: '2024 / 2025 Genap'},
    }
    return <DashboardView academic={academic} selected={1}/>;
}