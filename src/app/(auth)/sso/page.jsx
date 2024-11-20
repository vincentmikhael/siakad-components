import {getSession} from "@libs/redisHelper";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {Utils} from "@/components";

const SSO = async () => {
    const cookieStore = cookies();
    const s_id = cookieStore.get("s_id")?.value;
    let userSession = await getSession(s_id) //mendapatkan session dari redis berdasarkan session id
    //
    if (userSession) {
        redirect('/') //akan melewati middleware untuk cek hak akses app
    } else {
        Utils.redirectLogin();
    }
}
export default SSO