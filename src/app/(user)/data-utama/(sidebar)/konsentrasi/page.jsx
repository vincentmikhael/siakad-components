import {Utils} from "@/components";
import Konsentrasi from "@/views/data-utama/Konsentrasi";
import getKonsentrasiListInit from "@/libs/list-init/data-utama/Konsentrasi";

export async function generateMetadata() {
    return {
        title: Utils.getDocumentTitle('Data Utama > Konsentrasi'),
    }
}

export default async function KonsentrasiPage() {
    const listInit = await getKonsentrasiListInit()
    console.log(listInit.fakultas[0].id)
    return (
        <Konsentrasi listInit={listInit}/>
    )
}
// import Konsentrasi from "@/views/data-utama/Konsentrasi";
// import {Utils} from "@/components";
// import AxiosInstance from "@/libs/AxiosInstance";
// import { cookies } from "next/headers";
// import { checkSession } from "@libs/authHelper";

// export async function generateMetadata() {
//     return {
//         title: Utils.getDocumentTitle('Data Utama > Konsentrasi'),
//     }
// }

// export default async function Page() {
//     let data = []
//     try {
//         const sessionId = cookies().get("s_id")?.value;
//         if (!sessionId) {
//           throw new Error("Session ID is not found in cookies");
//         }
    
//         const accessToken = await checkSession(sessionId);
    
//         const prodiListInitResponse = await fetch(
//           `${process.env.NEXT_PUBLIC_SIAKAD_BASE_URL}/konsentrasi/list/init`,
//           {
//             headers: {
//               Authorization: `Bearer ${accessToken}`,
//             },
//             cache: "no-store",
//           }
//         );
    
//         if (prodiListInitResponse.status === 404) throw new Error("Data not found");
    
//         const prodiList = await prodiListInitResponse.json();
//         // return prodiList.data;
//         data = prodiList.data
//       } catch (error) {
//         console.error("Failed to get data fakultas:", error);
//       }


//     return (
//         <Konsentrasi dataInit={data}/>
//     )
// }

