import getProdiListInit from "@/libs/getProdiListInit";
import Prodi from "@views/data-utama/Prodi";

export default async function Page() {
    let prodiList = await getProdiListInit()
    const formattedDataList = prodiList?.map((data) => ({
        value: data.id,
        label: data.nama,
    }));
    return (
        <Prodi listFakultas={formattedDataList}/>
    )
}