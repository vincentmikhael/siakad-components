import {
    Utils,
} from "@/components";
import User from "@views/management-user/User";

export async function generateMetadata(/*{params}*/) {
    return {
        title: Utils.getDocumentTitle('Management User > User'),
    }
}

export default function ManajemenUser() {
    return (
        <User/>
    );
}
