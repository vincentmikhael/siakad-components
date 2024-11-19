import {DashboardDate, Button, Text, Utils, Card} from "@/components";
import {Calendar} from "@phosphor-icons/react/dist/ssr";

export async function generateMetadata(/*{params}*/) {
    return {
        title: Utils.getDocumentTitle('Dashboard'),
    }
}

export default function Dashboard() {


    const academic = {
        1: {start: '01 September 2024', end: '28 February 2025'},
        2: {start: '01 March 2025', end: '31 August 2025'},
    }

    return (
        <main>
            <div className="flex flex-col lg:flex-row gap-3 w-full justify-between mb-8">
                <div className="flex flex-col">
                    <Text size="4xl" weight={600} color="text-white">Dashboard master</Text>
                    <DashboardDate/>
                    {/*<Text size="xl" weight={400} color="text-white">Rabu, 23 October 2024</Text>*/}
                </div>
                {/*<Select label="Masa Akademik" showLabel/>*/}
                <div className="flex flex-col">
                    <Text className="text-right mb-3" size="base" weight={600} color="text-white">Masa Akademik</Text>
                    <Button leftIcon={<Calendar/>} variant="white" fullWidth={true}
                            filled>{`${academic['1'].start} - ${academic['1'].end}`}</Button>
                </div>
            </div>
            <div className="flex justify-center flex-col gap-3">
                <div className="flex flex-col lg:flex-row justify-center gap-3">
                    <div className="w-full lg:w-2/4"><Card className="min-h-[216px]">
                        <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                            Penerimaan mahasiswa baru
                        </Text>
                        <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                            Mahasiswa baru setiap program studi
                        </Text>
                    </Card></div>
                    <div className="w-full lg:w-1/4"><Card className="min-h-[216px]">
                        <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                            Masa study
                        </Text>
                    </Card></div>
                    <div className="w-full lg:w-1/4"><Card className="min-h-[216px]">
                        <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                            Mahasiswa kritis
                        </Text>
                    </Card></div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center gap-3">
                    <div className="w-full lg:w-1/4 gap-3">
                        <div className="w-full mb-3"><Card>
                            <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                                Total dosen
                            </Text>
                        </Card></div>
                        <div className="w-full mb-3"><Card>
                            <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                                Total mahasiswa
                            </Text>
                        </Card></div>
                        <div className="w-full"><Card>
                            <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                                Total karyawan
                            </Text>
                        </Card></div>
                    </div>
                    <div className="w-full lg:w-1/4 h-full"><Card className="h-full min-h-[216px]">
                        <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                            Kelulusan
                        </Text>
                    </Card></div>
                    <div className="w-full lg:w-2/4 h-full"><Card className="h-full min-h-[216px]">
                        <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                            Keuangan akademik
                        </Text>
                    </Card></div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center gap-3">
                    <div className="w-full lg:w-2/4"><Card className={"min-h-[216px]"}>
                        <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                            Data mahasiswa
                        </Text>
                    </Card></div>
                    <div className="w-full lg:w-2/4"><Card className={"min-h-[216px]"}>
                        <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                            Data dosen
                        </Text>
                    </Card></div>
                </div>
            </div>
        </main>
    );
}