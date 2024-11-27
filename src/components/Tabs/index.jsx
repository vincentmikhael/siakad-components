'use client';
import React, {useState} from 'react';
import {twMerge} from 'tailwind-merge';
import {Button, Input} from "@/components";
import {MagnifyingGlass, Plus} from "@phosphor-icons/react";

const Tabs = ({defaultClass = 'flex flex-wrap gap-2 border-b border-fade w-fit', className, children}) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <>
            <ul className={twMerge(defaultClass, className)}>
                {React.Children.map(children, (child, index) =>
                    React.cloneElement(child, {
                        key: index,
                        open: activeTab === index,
                        onClick: () => setActiveTab(index),
                    })
                )}
            </ul>
            <div className="flex gap-4 w-full md:w-fit">
                <Input
                    size="xs"
                    className="w-full lg:w-[156px]"
                    placeholder={"Cari data disini"}
                    leftIcon={<MagnifyingGlass weight="bold"/>}
                />
                <Button
                    onClick={() => {
                    }}
                    leftIcon={<Plus weight="bold"/>}
                    size="sm"
                    filled
                    className="w-full lg:w-fit"
                >
                    Tambah data
                </Button>
            </div>

            <div className="pt-6">
                {React.Children.toArray(children)[activeTab]?.props.children}
            </div>
        </>
    );
};

export default Tabs;
