"use client"
import {
    Button,
    Card,
    CardHeader,
    CardFooter,
    DateInput,
    IconButton,
    Input,
    Select,
    Text,
    OptionInput
} from "@/components";
import {CaretLeft, Plus, X} from "@phosphor-icons/react";
import {useRouter} from "next/navigation";
import {useState} from "react";

const TambahKuisioner = () => {
    const router = useRouter();
    const [errors, setErrors] = useState({});
    const [questions, setQuestions] = useState([
        {
            tipe: "",
            judul: "",
            options: []
        }
    ])

    const [formData, setFormData] = useState({
        judul: "",
        tanggal: "",
        keterangan: "",
        status: "",
        pertanyaan: questions
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const tipeJawaban = [
        {
            id: 1,
            label: "Jawaban singkat",
        },
        {
            id: 2,
            label: "Jawaban paragraf",
        },
        {
            id: 3,
            label: "Jawaban checkbox"
        },
        {
            id: 4,
            label: "Jawaban radio button"
        }
    ]

    const addQuestion = () => {
        setQuestions((prevQuestion) => (
            [...prevQuestion,
                {
                    tipe: "",
                    judul: ""
                }]
        ))
    }

    const removeQuestion = (index) => {
        setQuestions(questions.filter((_, i) => i !== index))
    }

    const handleQuestionChange = (index, name, value) => {
        setQuestions((prevQuestion) => {
            const updatedQuestions = [...prevQuestion]
            updatedQuestions[index] = {
                ...updatedQuestions[index],
                [name]: value
            }

            if (name === "tipe") {
                if (value === 3) {
                    updatedQuestions[index].options = [
                        {
                            id: 1,
                            label: "Option",
                        },
                        {
                            id: 2,
                            label: "Option",
                        },
                        {
                            id: 3,
                            label: "Option",
                        }
                    ]
                } else if (value === 4) {
                    updatedQuestions[index].options = [
                        {
                            id: 1,
                            label: "Option",
                        },
                        {
                            id: 2,
                            label: "Option",
                        },
                        {
                            id: 3,
                            label: "Option",
                        }
                    ]
                } else {
                    updatedQuestions[index].options = []
                }
            }

            if (!updatedQuestions[index].options) {
                updatedQuestions[index].options = [];
            }
            return updatedQuestions
        })
    }

    const handleOptionChange = (questionIndex, optionIndex, value) => {
        setQuestions((prevQuestion) => {
            const updatedQuestions = [...prevQuestion]
            updatedQuestions[questionIndex].options[optionIndex].label = value
            return updatedQuestions
        })
    }

    const addOption = (index) => {
        setQuestions((prevQuestion) => {
            const updatedQuestions = [...prevQuestion]
            const newOptions = [...updatedQuestions[index].options, {
                id: updatedQuestions[index].options.length + 1,
                label: "Option",
            }]
            updatedQuestions[index] = {
                ...updatedQuestions[index],
                options: newOptions
            }
            return updatedQuestions
        })
    }

    const removeOption = (questionIndex, optionIndex) => {
        setQuestions((prevQuestion) => {
            const updatedQuestions = [...prevQuestion]
            updatedQuestions[questionIndex].options.splice(optionIndex, 1)
            return updatedQuestions
        })
    }

    const handleSubmit = () => {
        console.log(questions)
    }
    return (
        <div className="flex flex-col gap-12 my-8 md:my-12">
            <Card>
                <CardHeader>
                    <div className="flex gap-6 items-center">
                        <IconButton size="md" variant="white" onClick={() => router.back()}>
                            <CaretLeft weight="bold"/>
                        </IconButton>
                        <Text size="xl" color="text-gray-100" weight={600}>
                            Tambah kuisioner
                        </Text>
                    </div>
                </CardHeader>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                    <div className="sm:col-span-3">
                        <Input
                            placeholder="Tulis judul kuisioner"
                            size="lg"
                            label="Judul kuisioner"
                            showLabel
                            name="judul"
                            onChange={handleChange}
                            showHint
                            error={errors?.judul}
                            value={formData.judul}
                        />
                    </div>
                    <DateInput showLabel label="Tanggal kuisioner" placeholder="Pilih tanggal pengumuman"
                               size="lg" name="tanggal" error={errors?.tanggal} value={formData.tanggal}
                               onChange={handleChange}/>
                    <Select value={[]} options={[]} label="Keterangan" placeholder="Pilih keterangan"
                            showLabel
                            size="lg"
                            labelKey="nama"
                            valueKey="id"
                            onChange={handleChange}
                            error={errors?.keterangan}
                    />
                    <Select value={[]} options={[]} label="Status" placeholder="Pilih status"
                            showLabel
                            size="lg"
                            labelKey="nama"
                            valueKey="id"
                            onChange={handleChange}
                            error={errors?.status}/>
                </div>
            </Card>
            <Card>
                <CardHeader>
                    <div className="flex justify-between sm:items-center gap-6 sm:flex-row flex-col">
                        <Text size="xl" color="text-gray-100" weight={600}>
                            Buat pertanyaan
                        </Text>
                        <Button leftIcon={<Plus/>} size="md" className="w-full sm:w-fit" onClick={addQuestion}>Tambah
                            pertanyaan</Button>
                    </div>
                </CardHeader>
                <div className="flex flex-col gap-6 py-6">
                    {questions.map((item, index) => (
                        <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-4 gap-6" key={index}>
                            <div className="sm:col-span-2 lg:col-span-1">
                                <Select value={item.tipe} options={tipeJawaban} label="Tipe jawaban"
                                        placeholder="Pilih tipe jawaban"
                                        showLabel
                                        size="lg"
                                        labelKey="label"
                                        valueKey="id"
                                        name="tipe"
                                        onChange={(e) => handleQuestionChange(index, "tipe", e.target.value)}/>
                            </div>
                            <div className="sm:col-span-3">
                                <div className="flex flex-row gap-6 items-start">
                                    <div className="flex flex-col gap-3 grow">
                                        <Input
                                            placeholder="Tulis judul pertanyaan"
                                            size="lg"
                                            label="Judul pertanyaan"
                                            showLabel
                                            name="judul_pertanyaan"
                                            onChange={(e) => handleQuestionChange(index, "judul", e.target.value)}
                                            showHint
                                            value={item.judul}
                                        />
                                        {(item.tipe === 3 || item.tipe === 4) && (
                                            <>
                                                {item.options.map((option, optionIndex) => (
                                                    <OptionInput placeholder="Options"
                                                                 type={item.tipe === 3 ? 'checkbox' : 'radiobutton'}
                                                                 value={option.label}
                                                                 key={optionIndex}
                                                                 onRemove={() => removeOption(index, optionIndex)}
                                                                 onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)}/>
                                                ))}
                                                <button onClick={() => addOption(index)}
                                                        className="text-gray-50 inline-flex text-sm gap-1.5 items-center">
                                                    <Plus
                                                        size={16} weight="bold"/> Tambah jawaban
                                                </button>
                                            </>
                                        )}
                                    </div>
                                    {questions.length > 1 && (
                                        <IconButton size="md" className="mt-9" variant="white"
                                                    onClick={() => removeQuestion(index)}>
                                            <X weight="bold"/>
                                        </IconButton>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <CardFooter>
                    <Button size="md" filled onClick={handleSubmit}>Simpan kuisioner</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
export default TambahKuisioner;