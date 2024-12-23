"use client"
import {X} from "@phosphor-icons/react";
import {Button, Hr, IconButton, Text} from "@/components";
import {twMerge} from "tailwind-merge";

const BottomDrawer = ({
                          title = "Filter",
                          open,
                          onClose = () => {
                          },
                          onClear = () => {
                          },
                          children,
                          dismissible = true,
                          clearable = true,
                          className,
                          buttonLabel = "Terapkan",
                          onApply = () => {
                          }
                      }) => {
    return (
        <>
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={onClose}
                ></div>
            )}
            <div
                className={twMerge(`fixed bottom-0 left-0 right-0 bg-white p-8 shadow-lg flex flex-col gap-8 rounded-t-[20px] z-50 transform ${
                    open ? "translate-y-0" : "translate-y-full"
                } transition-transform duration-300`, className)}
            >
                {/*header*/}
                <div className="flex flex-row gap-4 justify-between items-center">
                    <div className="flex flex-row gap-4 items-center">
                        {dismissible && (
                            <IconButton onClick={onClose} size="md">
                                <X weight="bold" size={16}/>
                            </IconButton>
                        )}
                        <Text weight="600" size="xl">{title}</Text>
                    </div>
                    {clearable && (
                        <button type="button" onClick={onClear}>
                            <Text color="text-gray-50" weight="600" size="sm">
                                Clear
                            </Text>
                        </button>
                    )}
                </div>
                <Hr/>
                {children}
                <Hr/>
                <Button variant="primary" filled size="lg" fullWidth onClick={onApply}>{buttonLabel}</Button>
            </div>
        </>
    )
}

export default BottomDrawer;