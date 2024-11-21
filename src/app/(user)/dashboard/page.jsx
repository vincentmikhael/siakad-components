import {DashboardDate, Button, Text, Utils, Card, Hr} from "@/components";
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
                    <Button leftIcon={<Calendar className="text-primary-100"/>} variant="white" fullWidth={true}
                            filled>{`${academic['1'].start} - ${academic['1'].end}`}</Button>
                </div>
            </div>
            <div className="flex justify-center flex-wrap -mx-2 gap-y-4">
                <div className="w-full lg:w-1/2 px-2">
                    <Card className="min-h-[216px]">
                        <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                            Penerimaan mahasiswa baru
                        </Text>
                        <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                            Mahasiswa baru setiap program studi
                        </Text>
                        <Hr/>
                    </Card>
                </div>
                <div className="w-full lg:w-1/4 px-2">
                    <Card className="min-h-[216px]">
                        <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                            Masa study
                        </Text>
                        <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                            2024 / 2025 Ganjil
                        </Text>
                        <Hr/>
                    </Card>
                </div>
                <div className="w-full lg:w-1/4 px-2">
                    <Card className="min-h-[216px]">
                        <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                            Mahasiswa kritis
                        </Text>
                        <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                            2024 / 2025 Ganjil
                        </Text>
                        <Hr/>
                    </Card>
                </div>
                <div className="w-full lg:w-1/4 px-2 flex flex-wrap gap-y-4">
                    <div className="w-full">
                        <Card>
                            <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                                Total dosen
                            </Text>
                            <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                                Terhitung dari daftar total 1.024
                            </Text>
                            <div className="flex gap-3 items-center">
                                <Text size="4xl" weight={800} color="text-black">1.006</Text>
                                <Text className="" tag="span" color="text-gray-50" weight="400" size="base">
                                    Dosen aktif
                                </Text>
                            </div>
                        </Card>
                    </div>
                    <div className="w-full">
                        <Card>
                            <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                                Total mahasiswa
                            </Text>
                            <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                                Terhitung dari daftar total 7.010
                            </Text>
                            <div className="flex gap-3 items-center">
                                <Text size="4xl" weight={800} color="text-black">6.906</Text>
                                <Text className="" tag="span" color="text-gray-50" weight="400" size="base">
                                    Mahasiswa aktif
                                </Text>
                            </div>
                        </Card>
                    </div>
                    <div className="w-full">
                        <Card>
                            <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                                Total karyawan
                            </Text>
                            <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                                Terhitung dari daftar total 224
                            </Text>
                            <div className="flex gap-3 items-center">
                                <Text size="4xl" weight={800} color="text-black">209</Text>
                                <Text className="" tag="span" color="text-gray-50" weight="400" size="base">
                                    Karyawan aktif
                                </Text>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className="w-full lg:w-1/4 h-full px-2">
                    <Card className="h-full min-h-[216px]">
                        <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                            Kelulusan
                        </Text>
                        <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                            2024 / 2025 Ganjil
                        </Text>
                        <Hr/>
                    </Card>
                </div>
                <div className="w-full lg:w-1/2 h-full px-2">
                    <Card className="h-full min-h-[216px]">
                        <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                            Keuangan akademik
                        </Text>
                        <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                            2024 / 2025 Ganjil
                        </Text>
                    </Card>
                </div>
                <div className="w-full lg:w-1/2 px-2">
                    <Card className={"min-h-[216px]"}>
                        <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                            Data mahasiswa
                        </Text>
                        <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                            2024 / 2025 Ganjil
                        </Text>
                        <Hr/>
                    </Card>
                </div>
                <div className="w-full lg:w-1/2 px-2">
                    <Card className={"min-h-[216px]"}>
                        <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                            Data dosen
                        </Text>
                        <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                            Terhitung dari daftar total 1.0024
                        </Text>
                        <Hr/>
                    </Card>
                </div>
            </div>
        </main>
    );
}