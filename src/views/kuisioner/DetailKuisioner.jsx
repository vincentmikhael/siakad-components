"use client"

import {Badge, Button, CardHeader, IconButton, TabItem, Tabs, Text} from "@/components";
import {CaretLeft, PencilSimpleLine, Trash} from "@phosphor-icons/react";
import {useRouter} from "next/navigation";
import React from "react";
import Pertanyaan from "@views/kuisioner/Pertanyaan";
import Responden from "@views/kuisioner/Responden";

const DetailKuisioner = () => {
    const router = useRouter();
    const data = {}
    const tabItem = [{
        title: "Pertanyaan",
        component: <Pertanyaan/>
    }, {
        title: "Responden",
        component: <Responden/>
    }]
    return (
        <>
            <CardHeader className="flex-col sm:flex-row gap-6 justify-between items-start border-0">
                <div className="flex gap-6">
                    <IconButton size="md" variant="white" onClick={() => router.back()}>
                        <CaretLeft weight="bold"/>
                    </IconButton>
                    <div className="flex flex-col gap-3">
                        <Text size="xl" color="text-gray-100" weight={600}>
                            Contoh nama kuisioner
                        </Text>
                        {
                            data?.status === 0 ? (
                                <Badge filled variant="default" size="sm" className="w-fit">Belum terbit</Badge>
                            ) : (
                                <Badge filled variant="success" size="sm" className="w-fit">Terbit</Badge>
                            )
                        }
                    </div>
                </div>
                <div className="flex gap-4 w-full lg:w-fit">
                    <Button
                        leftIcon={<PencilSimpleLine weight="bold"/>}
                        size="sm"
                        filled
                        variant="warning"
                        className="w-full lg:w-fit"
                    >
                        Edit
                    </Button>
                    <Button
                        leftIcon={<Trash weight="bold"/>}
                        size="sm"
                        filled
                        variant="danger"
                        className="w-full lg:w-fit"
                    >
                        Delete
                    </Button>
                </div>
            </CardHeader>
            <Tabs className="w-full">
                {tabItem.map((item, index) => (
                    <TabItem key={index} title={item.title}>
                        {item.component}
                    </TabItem>
                ))}
            </Tabs>
        </>
    )
}
export default DetailKuisioner;