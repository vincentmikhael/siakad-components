import {getSession} from "@libs/redisHelper";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

const SSO = async () => {
    const cookieStore = cookies();
    const s_id = cookieStore.get("s_id")?.value;
    let userSession = await getSession(s_id) //mendapatkan session dari redis berdasarkan session id
    //
    if (userSession) {
        redirect('/') //akan melewati middleware untuk cek hak akses app
    } else {
        redirect(`${process.env.MYITN_BASE_URL}/login`)
    }
}
export default SSO