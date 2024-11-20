'use client'
import {Button, Input} from "@/components";
import {useState} from "react";
import {Envelope, Pencil, User} from "@phosphor-icons/react";
import {twMerge} from "tailwind-merge";
import {useToast} from "@context/ToastContext";
import EditProfileModal from "./EditProfileModal";

export default function SettingsForm({
                                         userData, className, ...props
                                     }) {
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        setOpenUpdateModal(true);
    }
    const onCloseModal = () => {
        setOpenUpdateModal(false);
    }
    const showToast = useToast();
    return <>
        <form onSubmit={handleLogin} {...props}
              className={twMerge("flex flex-col gap-6 items-start", className)}
        >
            <div className="flex flex-col gap-4 justify-center items-start w-full lg:w-auto">
                <Input className="w-full lg:w-auto"
                    label="Nama Lengkap"
                    placeholder="Nama Lengkap"
                    showLabel readOnly
                    rightIcon={<User/>}
                    type="text"
                    defaultValue={userData?.nama_lengkap}/>
                <Input className="w-full lg:w-auto"
                    rightIcon={<Envelope/>}
                    leftIcon={undefined}
                    label="Surel"
                    showLabel readOnly
                    placeholder={"Surel"}
                    size="md"
                    type="text"
                    defaultValue={userData?.email}
                />
                {/*<Input*/}
                {/*    label="Katasandi"*/}
                {/*    showLabel*/}
                {/*    placeholder={"Masukkan katasandi anda"}*/}
                {/*    size="md"*/}
                {/*    type="password"*/}
                {/*    value={state.password}*/}
                {/*    error={state?.errors?.password}*/}
                {/*    showHint={state?.errors?.password}*/}
                {/*    onChange={(e) => setPassword(e.target.value)}*/}
                {/*/>*/}
                {/*<div className="flex flex-col w-full gap-6 justify-center items-center">*/}
                <Button
                    leftIcon={<Pencil/>}
                    type="submit"
                    variant="warning"
                    size="md"
                    fullWidth={false}
                    filled
                    disabled={false}
                >Perbarui data</Button>
            </div>
        </form>
        <EditProfileModal open={openUpdateModal} setOpen={setOpenUpdateModal} onClose={onCloseModal}
                          showToast={showToast}/>
    </>
}