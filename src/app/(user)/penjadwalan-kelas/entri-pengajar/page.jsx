import {Utils} from "@/components";
import {default as EntriPengajarKelas} from "@views/penjadwalan-kelas/entri-pengajar"

export async function generateMetadata(/*{params}*/) {
    return {
        title: Utils.getDocumentTitle('Penjadwalan kelas > Entri pengajar kelas'),
    }
}

export default function Index({className, ...props}) {
    // console.log("test",typeof data, typeof data.map)
    // return <PenjadwalanKelas listPengajarKelas={data}/>
    return <EntriPengajarKelas {...props} />
}