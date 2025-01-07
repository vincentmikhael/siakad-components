import { Button } from "@/components";
import { FilePdf } from "@phosphor-icons/react/dist/ssr";

export default function DataUtama(){
    return (
        <>
            <div
                className="flex items-center justify-center bg-fade text-gray-50 min-h-[250px] lg:min-h-[500px] mb-3">Template
            </div>
            <div className="flex gap-3">
                <Button leftIcon={<FilePdf/>} variant='danger' filled>Download report</Button>
            </div>
        </>
    )
}