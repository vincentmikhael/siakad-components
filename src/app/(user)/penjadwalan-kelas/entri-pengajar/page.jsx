import {EntriPengajarKelasView, Utils} from "@/components";
// import EntriPengajarKelasView from "./EntriPengajarKelasView";
// import {EntriPengajarKelasView} from "@components/PenjadwalanKelas/EntriPengajarKelas";
// import PenjadwalanKelas from "@components/PenjadwalanKelas";
export async function generateMetadata(/*{params}*/){
    return {
        title: Utils.getDocumentTitle('Penjadwalan kelas > Entri pengajar kelas'),
    }
}
const data = [
    {
        id: 1011,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '001',
        nama: 'Mudjiono, Drs. MT'
    },
    {
        id: 1012,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '020',
        nama: 'Mudjiono, Drs. MT'
    },
    {
        id: 1013,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '005',
        nama: 'Mudjiono, Drs. MT'
    },
    {
        id: 1014,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '007',
        nama: 'Mudjiono, Drs. MT'
    },
    {
        id: 1015,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '011',
        nama: 'Mudjiono, Drs. MT'
    },
    {
        id: 1016,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '008',
        nama: 'Mudjiono, Drs. MT'
    },
    {
        id: 1017,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '021',
        nama: 'Mudjiono, Drs. MT'
    },
    {
        id: 1018,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '017',
        nama: 'Mudjiono, Drs. MT'
    },
    {
        id: 1019,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '006',
        nama: 'Mudjiono, Drs. MT'
    },
    {
        id: 1020,
        posisi: {nama: 'DOSEN', awal: 'KE - 01', akhir: 'KE - 14',},
        kode_dosen: '004',
        nama: 'Mudjiono, Drs. MT'
    },

]
export default function EntriPengajarKelas({className, ...props}) {
    // console.log("test",typeof data, typeof data.map)
    // return <PenjadwalanKelas listPengajarKelas={data}/>
    return <EntriPengajarKelasView listPengajarKelas={data} {...props} />
}