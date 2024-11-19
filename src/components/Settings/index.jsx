'use client';
import {useFormState} from 'react-dom'
import {Button, Input, Modal, Spinner} from "@/components";
import {updateProfile} from "@/actions";
import {useCallback, useEffect, useRef, useState} from "react";
import {Envelope, Pencil, User} from "@phosphor-icons/react";
import {twMerge} from "tailwind-merge";
import {useToast} from "@context/ToastContext";

const initialState = {
    email: "",
    password: "",
    password_new: "",
    password_confirmation: "",
}
const UpdateFormModal = ({open, setOpen, onClose, userData, showToast, className, ...props}) => {
    const formRef = useRef(null);
    const [state, action, pending] = useFormState(updateProfile, initialState);
    const [password, setPassword] = useState(initialState.password);
    const [passwordNew, setPasswordNew] = useState(initialState.password_new);
    const [passwordConfirmation, setPasswordConfirmation] = useState(initialState.password_confirmation);
    const [success, setSuccess] = useState(false);
    const handleSubmit = () => {
        console.log('submitting...');
        if (formRef.current) {
            console.log('submitted')
            formRef.current.requestSubmit(); // Trigger form submission
            setSuccess(true);
        }
    };
    const resetForm = useCallback(() => {
        setPassword('');
        setPasswordNew('');
        setPasswordConfirmation('');
        state.password = state.password_new = state.password_confirmation = ''
        state.errors = undefined;
    }, [setPassword, setPasswordNew, setPasswordConfirmation, state]);
    useEffect(() => {
        // Check if submission is complete and was successful
        if (pending || !success || !state.errors || Object.keys(state.errors).length > 0) {
            return
        }
        if (open && success) {
            setSuccess(false);
            setOpen(false); // Close modal
            resetForm(); // Reset form inputs
            showToast("Profile Updated Successful", "Data successfully updated", 'success');
        }
    }, [pending, state.errors, open, setOpen, resetForm, showToast, state, success]);
    const _onClose = () => {
        if (typeof onClose === 'function') {
            onClose();
        }
        resetForm();
    }
    return <Modal size="lg" open={open} onClose={_onClose} title="Perbarui profile"
                  dismissable autoClose {...props}>
        <Modal.Body>
            <form action={action} ref={formRef}
                  className={twMerge("flex flex-col gap-6 items-start", className)}
            >
                <div className="flex flex-col gap-4 justify-center items-start w-full lg:w-auto">
                    <Input className="w-full"
                        label="Katasandi Lama"
                        showLabel
                        placeholder={"Masukkan katasandi anda"}
                        size="md" name='password'
                        type="password"
                        value={password}
                        error={state?.errors?.password}
                        showHint={state?.errors?.password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input className="w-full"
                        label="Katasandi Baru"
                        showLabel
                        placeholder={"Masukkan katasandi baru anda"}
                        size="md" name='password_new'
                        type="password"
                        value={passwordNew}
                        error={state?.errors?.password_new}
                        showHint={state?.errors?.password_new}
                        onChange={(e) => setPasswordNew(e.target.value)}
                    />
                    <Input className="w-full"
                        label="Konfirmasi Katasandi Baru"
                        showLabel
                        placeholder={"Masukkan konfirmasi katasandi baru anda"}
                        size="md" name='password_confirmation'
                        type="password"
                        value={passwordConfirmation}
                        error={state?.errors?.password_confirmation}
                        showHint={state?.errors?.password_confirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <div className="gap-4 flex flex-row">
                <Button
                    leftIcon={<Pencil/>}
                    type="button"
                    variant="warning"
                    size="md"
                    fullWidth={false}
                    filled
                    disabled={(!password || !passwordNew || !passwordConfirmation) || pending}
                    onClick={handleSubmit}
                >
                    {pending ? <Spinner/> : "Perbarui data"}
                </Button>
                <Button variant="white" size="md" filled onClick={() => setOpen && setOpen(false)}>
                    Batal
                </Button>
            </div>
        </Modal.Footer>
    </Modal>
}
export default function SettingsForm({
                                         userData, className, ...props
                                     }) {
    const [email, setEmail] = useState(userData.email);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        setOpenUpdateModal(true);
    }
    const onCloseModal = () => {
        setOpenUpdateModal(false);
    }
    const showToast = useToast();
    initialState.email = email;
    return <>
        <form onSubmit={handleLogin} {...props}
              className={twMerge("flex flex-col gap-6 items-start", className)}
        >
            <div className="flex flex-col gap-4 justify-center items-center w-full lg:w-auto">
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
                    value={email ?? userData?.email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    fullWidth
                    filled
                    disabled={false}
                >Perbarui data</Button>
            </div>
        </form>
        <UpdateFormModal open={openUpdateModal} setOpen={setOpenUpdateModal} onClose={onCloseModal}
                         showToast={showToast}/>
    </>
}