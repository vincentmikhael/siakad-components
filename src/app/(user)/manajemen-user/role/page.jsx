import {
    Utils,
} from "@/components";
import Role from "@views/manajemen-user/Role";

export async function generateMetadata(/*{params}*/) {
    return {
        title: Utils.getDocumentTitle('Manajemen User > Role'),
    }
}

export default function ManajemenUserRole() {
    return (
        <Role/>
    );
}
