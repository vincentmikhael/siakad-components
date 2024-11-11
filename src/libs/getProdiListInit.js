// import {cookies} from "next/headers";
// import {getSession} from "@libs/redisHelper";
//
// export default async function getProdiListInit() {
//     try {
//         const sessionId = cookies().get('s_id').value;
//         if (!sessionId) {
//             throw new Error("Session ID is not found in cookies");
//         }
//
//         const userSession = await getSession(sessionId);
//
//         if (!userSession) {
//             throw new Error("Token not found in Redis");
//         }
//
//         const {accessToken} = JSON.parse(userSession);
//
//         const prodiListInitResponse = await fetch(`${process.env.NEXT_PUBLIC_SIAKAD_BASE_URL}/prodi/list/init`, {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`,
//             },
//             cache: 'no-store',
//         })
//
//         if (prodiListInitResponse.status === 404) {
//             throw new Error("Data not found");
//         }
//
//         const prodiList = await prodiListInitResponse.json();
//         console.log(prodiList)
//         return prodiList.data
//     } catch (error) {
//         console.error("Failed get data fakultas:", error);
//     }
// }
import { cookies } from "next/headers";
import { checkSession } from "@libs/authHelper";

export default async function getProdiListInit() {
  try {
    const sessionId = cookies().get("s_id")?.value;
    if (!sessionId) {
      throw new Error("Session ID is not found in cookies");
    }

    const accessToken = await checkSession(sessionId);

    const prodiListInitResponse = await fetch(
      `${process.env.NEXT_PUBLIC_SIAKAD_BASE_URL}/prodi/list/init`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      }
    );

    if (prodiListInitResponse.status === 404) throw new Error("Data not found");

    const prodiList = await prodiListInitResponse.json();
    return prodiList.data;
  } catch (error) {
    console.error("Failed to get data fakultas:", error);
  }
}
