"use client"
import {Checkbox, Input, Label, Textarea, Radio, Text} from "@/components";

const radioOption = [
    {
        label: "Option 1",
        value: "1"
    },
    {
        label: "Option 2",
        value: "2"
    },
    {
        label: "Option 3",
        value: "3"
    },
    {
        label: "Option 4",
        value: "4"
    },
    {
        label: "Option 5",
        value: "5"
    },
]

const data = [
    {tipe: 1, judul: "Contoh pertanyaan 1"},
    {tipe: 2, judul: "Contoh pertanyaan 2"},
    {
        tipe: 3, judul: "Contoh pertanyaan 3", options: [
            {
                label: "Option 1",
                value: 1
            },
            {
                label: "Option 2",
                value: 2
            },
            {
                label: "Option 3",
                value: 3
            }
        ]
    },
    {
        tipe: 4, judul: "Contoh pertanyaan 4", options: [
            {
                label: "Option 1",
                value: 1
            },
            {
                label: "Option 2",
                value: 2
            },
            {
                label: "Option 3",
                value: 3
            },
            {
                label: "Option 4",
                value: 4
            }
        ]
    },
]
const Pertanyaan = () => {
    return (
        <div className="flex flex-col gap-4">
            {data.map((item, index) => (
                <div className="flex flex-col gap-3" key={index}>
                    <Text weight={600}>{item.judul}</Text>
                    {item.tipe === 1 ? (
                        <Input placeholder="Tulis pertanyaan" size="lg"/>
                    ) : item.tipe === 2 ? (
                        <Textarea placeholder="Tulis pertanyaan"/>
                    ) : item.tipe === 3 ? (
                        <>
                            {item.options?.length > 0 && item.options.map((option, index) => (
                                <Checkbox key={index} value={option.value}>{option.label}</Checkbox>
                            ))}
                        </>
                    ) : item.tipe === 4 ? (
                        <Radio options={item.options}/>
                    ) : null
                    }
                </div>
            ))}
        </div>
    )
}
export default Pertanyaan;