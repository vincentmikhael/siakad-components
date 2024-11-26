'use client'
import React, {useState} from 'react';
import {twMerge} from 'tailwind-merge';

const Tabs = ({
                  defaultClass = 'flex flex-wrap gap-2 border-b border-fade w-fit',
                  className,
                  children,
              }) => {

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
            <div className="pt-6">
                {children[activeTab]?.props.children}
            </div>
        </>
    );
}

export default Tabs;