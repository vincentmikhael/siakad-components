import {
    Utils,
} from "@/components";
import User from "@views/manajemen-user/User";

export async function generateMetadata(/*{params}*/) {
    return {
        title: Utils.getDocumentTitle('Manajemen User > User'),
    }
}

export default function ManajemenUser() {
    return (
        <User/>
    );
}
