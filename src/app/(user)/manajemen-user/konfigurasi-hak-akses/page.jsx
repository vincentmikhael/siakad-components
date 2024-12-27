import {
    Utils,
} from "@/components";
import KonfigurasiHakAkses from "@views/manajemen-user/KonfigurasiHakAkses";

export async function generateMetadata(/*{params}*/) {
    return {
        title: Utils.getDocumentTitle('Manajemen User > Konfigurasi Hak Akses User'),
    }
}

export default function ManajemenKonfigurasiHakAksesUser() {
    return (
        <KonfigurasiHakAkses/>
    );
}
