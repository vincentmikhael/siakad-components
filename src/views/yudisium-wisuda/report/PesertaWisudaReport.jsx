import { Button, Select } from "@/components";
import { FilePdf } from "@phosphor-icons/react/dist/ssr";

export default function PesertaWisudaReport(){
    return (
        <>
        <div className="w-full lg:w-fit gap-4 flex flex-col lg:flex-row mb-5">
                    <Select value={[]} options={[]} label="Fakultas" showLabel
                            size="xs"
                            className="xl:w-[92px] w-full"
                            />

                    <Select value={[]} options={[]} label="Program studi"
                            showLabel
                            size="xs"
                            className="xl:w-[96px] w-full"
                            />
                    <Select value={[]} options={[]} label="Konsentrasi" placeholder="Pilih konsentrasi"
                            showLabel
                            size="xs"
                            className="xl:w-[96px] w-full"
                            />
                            <Select value={[]} options={[]} label="Periode" placeholder="Pilih periode"
                            showLabel
                            size="xs"
                            className="xl:w-[96px] w-full"
                            />
                    <Select value={[]} options={[]} label="Tahun wisuda" placeholder="Pilih tahun wisuda"
                            showLabel
                            size="xs"
                            className="xl:w-[96px] w-full"
                            />
                </div>

            <div
                className="flex items-center justify-center bg-fade text-gray-50 min-h-[250px] lg:min-h-[500px] mb-3">Template
            </div>
            <div className="flex gap-3">
                <Button leftIcon={<FilePdf/>} variant='danger' filled>Download report</Button>
            </div>
        </>
    )
}