import {cookies} from "next/headers";
import {getSession} from "@/libs/redisHelper";
import {redirect} from "next/navigation";

export default async function Home(){
    const cookieStore = cookies();
    const s_id = cookieStore.get("s_id")?.value;
    const userData = await getSession(s_id);
    if (userData) {
        return redirect(`/dashboard`);
    }
    return redirect(`${process.env.NEXT_PUBLIC_MYITN_BASE_URL}/login`);
}