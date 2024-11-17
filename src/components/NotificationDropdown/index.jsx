'use client'
import { useState, useRef, useEffect } from 'react';
import { BellRinging, Check, X } from '@phosphor-icons/react';
import { Button, IconButton, Text } from "@/components";

const NotificationDropdown = () => {
    const [isOpen, setIsOpen] = useState(false); // Default dropdown tertutup
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    const notifications = [
        { title: 'Title 1', description: 'Description 1', timestamp: '4 Jam yang lalu', status: 0 },
        { title: 'Title 2', description: 'Description 2', timestamp: '4 Jam yang lalu', status: 0 },
        { title: 'Title 3', description: 'Description 3', timestamp: '4 Jam yang lalu', status: 1 },
        { title: 'Title 4', description: 'Description 4', timestamp: '4 Jam yang lalu', status: 1 },
    ];

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current && !dropdownRef.current.contains(event.target) &&
            buttonRef.current && !buttonRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <button
                ref={buttonRef}
                onClick={toggleDropdown}
                className="flex items-center h-8"
            >
                <BellRinging color="#FFFFFF" size={20} weight="regular" />
            </button>
            <div
                ref={dropdownRef}
                className={`fixed sm:absolute mt-4 w-full sm:w-80 lg:w-[453px] p-8 bg-white rounded-[20px] z-10 transform transition-all duration-300 custom-shadow-dropdown ${
                    isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none"
                } right-0 left-auto`}
            >
                <div className="flex justify-between items-center">
                    <Text weight="600" size="lg" color="text-gray-100">Notifikasi</Text>
                    <IconButton onClick={() => setIsOpen(false)} variant="white">
                        <X size={16} weight="bold" color="#333" />
                    </IconButton>
                </div>
                <ul className="flex flex-col gap-4 overflow-y-auto max-h-96 my-6 scrollbar-none">
                    {notifications.map((notification, index) => (
                        <li key={index} className={`p-3 rounded-xl flex flex-col gap-3 ${notification.status === 1 ? "bg-primary-10" : "border-primary-10 border"} hover:bg-primary-10`}>
                            <div className="flex flex-col gap-1.5">
                                <Text weight="600" size="sm" color="text-gray-100">{notification.title}</Text>
                                <Text weight="500" size="sm" color="text-gray-60">{notification.description}</Text>
                            </div>
                            <Text weight="500" size="sm" color="text-primary-100">{notification.timestamp}</Text>
                        </li>
                    ))}
                </ul>
                <div className="pt-6 border-fade border-t">
                    <Button leftIcon={<Check weight="bold" />} filled variant="primary" size="sm">
                        Tandai semua dibaca
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default NotificationDropdown;
