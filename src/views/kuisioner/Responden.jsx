"use client"

import {OptionsRespond, TableRespond, Text} from "@/components";

const data = [
    {
        tipe: 1,
        judul: "Contoh pertanyaan 1",
        respons: [
            "Jawaban pertanyaan 1",
            "Jawaban pertanyaan 2",
            "Jawaban pertanyaan 3",
        ]
    },
    {
        tipe: 2,
        judul: "Contoh pertanyaan 2",
        respons: [
            "Jawaban pertanyaan no 1",
            "Jawaban pertanyaan no 2",
            "Jawaban pertanyaan no 3",
            "Jawaban pertanyaan no 4",
        ]
    },
    {
        tipe: 3,
        judul: "Contoh pertanyaan 3",
        respons: [
            {label: "Option 1", value: 1},
            {label: "Option 2", value: 4},
            {label: "Option 3", value: 2},
            {label: "Option 4", value: 4},
            {label: "Option 5", value: 5},
        ]
    }, {
        tipe: 4,
        judul: "Contoh pertanyaan 4",
        respons: [
            {label: "Option 1", value: 8},
            {label: "Option 2", value: 1},
            {label: "Option 3", value: 4},
        ]
    },
]
const Responden = () => {
    return (
        <div className="flex flex-col gap-4">
            {data.map((item, index) => (
                <div className="flex flex-col grow gap-3" key={index}>
                    <div className="flex flex-col gap-1.5">
                        <Text weight={600}>{item.judul}</Text>
                        <Text size="sm" weight={500} color="text-gray-50">{item.respons.length} Koresponden</Text>
                    </div>
                    {
                        item.tipe === 1 || item.tipe === 2 ? (
                            <TableRespond data={item.respons}/>
                        ) : (
                            <OptionsRespond data={item.respons}/>
                        )
                    }
                </div>
            ))}
        </div>
    )
}

export default Responden