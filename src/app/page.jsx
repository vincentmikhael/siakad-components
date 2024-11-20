import {cookies} from "next/headers";
import {getSession} from "@/libs/redisHelper";
import {redirect} from "next/navigation";
import {Utils} from "@/components";

export default async function Home(){
    const cookieStore = cookies();
    const s_id = cookieStore.get("s_id")?.value;
    const userData = await getSession(s_id);
    if (userData) {
        return redirect(`/dashboard`);
    }
    return Utils.redirectLogin();
}