import {Input, Pagination, Select} from "@/components";
import {MagnifyingGlass} from "@phosphor-icons/react/dist/ssr";

export default function TabDosenBentrokMataKuliah() {
    return <>
        <div className="flex xl:overflow-x-auto xl:min-w-0 scrollbar-thin overflow-y-visible">
            <div className="flex justify-between w-full gap-3">
                <div
                    className="flex flex-wrap xl:flex-nowrap xl:flex-shrink-0 flex-grow xl:flex-grow-0 justify-end items-center gap-4 overflow-y-visible">
                    <Select isRelative={false} label="Semester" options={[]} showLabel/>
                    <Select isRelative={false} label="Tahun akademik" options={[]} showLabel/>
                </div>
                <Input
                    size="xs"
                    className="min-w-[156px] self-end"
                    placeholder={"Cari data disini"}
                    leftIcon={<MagnifyingGlass weight="bold"/>}
                />
            </div>
        </div>
        <Pagination/>
    </>
}