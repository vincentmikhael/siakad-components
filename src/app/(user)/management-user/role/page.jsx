import {
    Utils,
} from "@/components";
import Role from "@views/management-user/Role";

export async function generateMetadata(/*{params}*/) {
    return {
        title: Utils.getDocumentTitle('Management User > Role'),
    }
}

export default function ManajemenUserRole() {
    return (
        <Role/>
    );
}
