"use client"

import React, {useState} from "react";
import {
    BottomDrawer,
    Button, Select, TabItem, Tabs, Text
} from "@/components";
import {FadersHorizontal, FilePdf} from "@phosphor-icons/react";

const Report = () => {
    const baseUrl = '/status-mahasiswa/report';
    const tabItem = [{
        title: "Grafik dan rekap jumlah mahasiswa aktif"
    }, {
        title: "Grafik mahasiswa aktif"
    }, {
        title: "Grafik mahasiswa aktif pindahan"
    }]
    //drawer
    const [openDrawer, setOpenDrawer] = useState(false);
    //
    return (
        <>
            <Tabs>
                {tabItem.map((item, index) => (
                    <TabItem key={index} title={item.title}/>
                ))}
            </Tabs>
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <div className="w-full lg:w-fit hidden lg:flex gap-4">
                    <Select value={[]} options={[]} label="Fakultas" placeholder="Pilih fakultas" showLabel
                            size="xs"
                            className="xl:w-[80px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Program studi" placeholder="Pilih program studi"
                            showLabel
                            size="xs"
                            className="xl:w-[128px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Konsentrasi" placeholder="Pilih konsentrasi"
                            showLabel
                            size="xs"
                            className="xl:w-[128px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Semester" placeholder="Pilih semester"
                            showLabel
                            size="xs"
                            className="xl:w-[80px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Tahun akademik" placeholder="Pilih tahun akademik"
                            showLabel
                            size="xs"
                            className="xl:w-[128px] w-full"
                            onChange={() => {
                            }}/>
                    <Select value={[]} options={[]} label="Tahun angkatan" placeholder="Pilih tahun angkatan"
                            showLabel
                            size="xs"
                            className="xl:w-[128px] w-full"
                            onChange={() => {
                            }}/>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-4 w-full lg:w-fit">
                    <Button
                        onClick={() => setOpenDrawer(true)}
                        leftIcon={<FadersHorizontal weight="bold"/>}
                        size="sm"
                        filled
                        className="w-fit lg:hidden"
                        variant="white"
                    >
                        Filter
                    </Button>
                    <BottomDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} onApply={() => {
                    }} onClear={() => {
                    }}>
                        <Select value={[]} options={[]} label="Fakultas" placeholder="Pilih fakultas" showLabel
                                size="lg"
                                labelKey="nama"
                                valueKey="id"
                                onChange={() => {
                                }}
                                menuClass="max-h-28"/>
                        <Select value={[]} options={[]} label="Program studi" placeholder="Pilih program studi"
                                showLabel
                                size="lg"
                                labelKey="nama"
                                valueKey="id"
                                onChange={() => {
                                }}
                                menuClass="max-h-28"/>
                        <Select value={[]} options={[]} label="Konsentrasi" placeholder="Pilih konsentrasi"
                                showLabel
                                size="lg"
                                labelKey="nama"
                                valueKey="id"
                                onChange={() => {
                                }}
                                menuClass="max-h-28"/>
                        <Select value={[]} options={[]} label="Semester" placeholder="Pilih semester"
                                showLabel
                                size="lg"
                                labelKey="nama"
                                valueKey="id"
                                onChange={() => {
                                }}
                                menuClass="max-h-28"/>
                        <Select value={[]} options={[]} label="Tahun akademik" placeholder="Pilih tahun akademik"
                                showLabel
                                size="lg"
                                labelKey="nama"
                                valueKey="id"
                                onChange={() => {
                                }}
                                menuClass="max-h-28"/>
                        <Select value={[]} options={[]} label="Tahun angkatan" placeholder="Pilih tahun angkatan"
                                showLabel
                                size="lg"
                                labelKey="nama"
                                valueKey="id"
                                onChange={() => {
                                }}
                                menuClass="max-h-28"/>
                    </BottomDrawer>
                </div>
            </div>
            <div
                className="flex items-center justify-center bg-fade text-gray-50 min-h-[250px] lg:min-h-[560px]">
                <Text size="xs" weight={600}>Template</Text>
            </div>
            <Button filled variant="danger" size="md" leftIcon={<FilePdf/>}>Download report</Button>
        </>
    );
}
export default Report