import {
    Hr,
    LogoItn,
    Navbar,
    NavBrand,
    NavHamburger,
    navItems, additionalNavItems,
    NavLi,
    NavUl,
    NavRow,
    NotificationDropdown,
    ProfileDropdown,
    Utils, Footer,
} from "@/components";
import {cookies} from "next/headers";
import {getSession} from "@libs/redisHelper";

export default async function Layout({children}) {
    const cookieStore = cookies();
    const s_id = cookieStore.get("s_id")?.value;
    let userName = "user";
    const userData = await getSession(s_id);
    if (userData) {
        const parsedData = JSON.parse(userData);
        userName = parsedData?.data?.nama_lengkap || "User";
    }
    return (
        <>
            <Navbar>
                <NavRow>
                    <div className="inline-flex items-center md:gap-6 justify-start">
                        <NavBrand>
                            <LogoItn type='white'/>
                            <span
                                className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                        </NavBrand>
                        <Hr
                            direction="vertical"
                            classHr="h-6 bg-white opacity-[32%] hidden md:block"
                            classDiv="hidden xl:block"
                        />
                        <NavHamburger/>
                        <NavUl>
                            {Utils.renderMenuList(navItems)}
                            <div className="flex flex-col xl:hidden gap-3">
                                {Utils.renderMenuList(additionalNavItems)}
                            </div>
                        </NavUl>
                    </div>
                    <div
                        className="flex items-center md:w-auto space-x-6 order-2"
                        id="navbar-default"
                    >
                        <NotificationDropdown/>
                        <Hr className="flex items-center" direction="vertical"
                            classHr="h-6 bg-white opacity-[32%]" classDiv="hidden md:block"/>
                        <ProfileDropdown userName={userName}/>
                    </div>
                </NavRow>

                <NavRow className="hidden xl:flex h-14">
                    <NavUl>
                        {Utils.renderMenuList(additionalNavItems)}
                    </NavUl>
                </NavRow>
            </Navbar>

            <div
                className="bg-radial-gradient h-[calc(100%*0.62391304)] md:h-[calc(100%*0.62391304)] w-full absolute top-16"/>
            <div className="overflow-hidden min-h-[calc(100vh-3em-55px)] lg:min-h-[calc(100vh-129px-36px)]">
                <div className="px-5 py-8 md:p-14 relative h-full w-full">
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    );
}
