'use client'
import {useState, useRef, useEffect} from 'react';
import {SignOut, CaretDown} from '@phosphor-icons/react';
import {Hr, Link, Text} from "@/components";
import {useRouter} from "next/navigation";
import {useToast} from "@context/ToastContext";

const ProfileDropdown = ({userName = "User Guest"}) => {
    const router = useRouter();
    const showToast = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

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

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/logout', {
                method: 'POST',
            });
            if (!response.ok) {
                throw new Error('Failed to log out');
            }
            router.push(`${process.env.NEXT_PUBLIC_MYITN_BASE_URL}/login`);
        } catch (error) {
            showToast("Log out failed!", "Please try again later.", "danger");
        }
    }

    return (
        <div className="relative">
            <button
                className="gap-3 flex flex-row items-center"
                ref={buttonRef}
                onClick={toggleDropdown}
            >
                <div className="w-8 h-8 bg-white rounded-full"/>
                <div className="flex flex-row gap-1.5 items-center">
                    <p className="text-gray-10 font-normal text-sm hidden md:block">
                        {userName}
                    </p>
                    <CaretDown size={16} weight="bold" color="#FFFFFF"/>
                </div>
            </button>
            <div
                ref={dropdownRef}
                className={`absolute right-0 mt-4 w-[248px] px-4 py-3 bg-white rounded-2xl z-10 flex flex-col gap-2 
                    transform transition-all duration-300 custom-shadow-dropdown ${
                    isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none"
                }`}
            >
                <Link href="/settings" className="flex bg-white hover:bg-primary-10 py-[11px] px-3 rounded-lg">
                    <Text weight="600" size="base" color="text-primary-100">Settings Profile</Text>
                </Link>
                <Hr/>
                <button
                    onClick={handleLogout}
                    className="flex bg-white hover:bg-danger-10 py-[11px] px-3 rounded-lg justify-between items-center flex-row text-danger-90"
                >
                    <Text weight="600" size="base" color="text-danger-90">Log out</Text>
                    <SignOut weight="bold" size={16}/>
                </button>
            </div>
        </div>
    );
}

export default ProfileDropdown;
