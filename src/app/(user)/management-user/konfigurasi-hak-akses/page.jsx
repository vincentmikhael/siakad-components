import {
    Utils,
} from "@/components";
import KonfigurasiHakAkses from "@views/management-user/KonfigurasiHakAkses";

export async function generateMetadata(/*{params}*/) {
    return {
        title: Utils.getDocumentTitle('Management User > Konfigurasi Hak Akses User'),
    }
}

export default function ManajemenKonfigurasiHakAksesUser() {
    return (
        <KonfigurasiHakAkses/>
    );
}
