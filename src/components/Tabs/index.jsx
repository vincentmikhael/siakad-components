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
        </>
    );
};

export default Tabs;
