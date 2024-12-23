import getProdiListInit from "@libs/getProdiListInit";
import Prodi from "@views/data-utama/Prodi";

export default async function Page() {
    let prodiList = await getProdiListInit()
    return (
        <Prodi listFakultas={prodiList}/>
    )
}