'use client'
import {useCallback, useEffect, useRef, useState} from "react";
import {useFormState} from "react-dom";
import {updateProfile} from "@/actions";
import {Button, Input, Modal, Spinner} from "@/components";
import {twMerge} from "tailwind-merge";

const initialState = {
    email: "",
    password: "",
    password_new: "",
    password_confirmation: "",
}
export default function ModalEditProfile({
                                            open,
                                            setOpen,
                                            onClose,
                                            userData,
                                            showToast,
                                            className,
                                            ...props
                                        })
{
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
                    type="button"
                    variant="primary"
                    size="md"
                    fullWidth={false}
                    filled
                    disabled={(!password || !passwordNew || !passwordConfirmation) || pending}
                    onClick={handleSubmit}
                >
                    {pending ? <Spinner/> : "Perbarui"}
                </Button>
                <Button variant="white" size="md" filled onClick={() => setOpen && setOpen(false)}>
                    Batal
                </Button>
            </div>
        </Modal.Footer>
    </Modal>
}