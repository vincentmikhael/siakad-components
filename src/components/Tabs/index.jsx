'use client';
import React, {useState} from 'react';
import {twMerge} from 'tailwind-merge';
import {Button, Input} from "@/components";
import {MagnifyingGlass, Plus} from "@phosphor-icons/react";

const Tabs = ({defaultClass = 'flex flex-wrap gap-2 border-b border-fade w-fit', className, children}) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="flex flex-col gap-6">
            <ul className={twMerge(defaultClass, className)}>
                {React.Children.map(children, (child, index) =>
                    React.cloneElement(child, {
                        key: index,
                        open: activeTab === index,
                        onClick: () => setActiveTab(index),
                    })
                )}
            </ul>
            {React.Children.map(children, (child, index) =>
                activeTab === index ? child.props.children : null
            )}
        </div>
    );
};

export default Tabs;
