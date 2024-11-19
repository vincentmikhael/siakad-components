// import {z} from "zod";
const validatePassword = (password, oldPassword) => {
    if (!password)
        return 'Katasandi tidak boleh kosong'
    if(password !== oldPassword)
        return 'Katasandi lama tidak sesuai'
    return undefined;
}

const validatePasswordNew = (passwordNew) => {
    if (!passwordNew)
        return 'Katasandi baru tidak boleh kosong'
    if (passwordNew.length < 8)
        return 'Panjang katasandi baru tidak boleh kurang dari 8 karakter'
}

const validatePasswordConfirmation = (passwordNew, passwordConfirmation) => {
    if (!passwordConfirmation)
        return 'Konfirmasi katasandi baru tidak boleh kosong'
    if (passwordConfirmation.length < 8)
        return 'Panjang konfirmasi katasandi baru tidak boleh kurang dari 8 karakter'
    if (passwordNew !== passwordConfirmation)
        return 'Katasandi baru tidak sama dengan katasandi konfirmasi'
    return undefined;
}

export const updateProfileScheme = () => {
    return {
        parse: (obj, oldPassword) => {
            const password = obj.password;
            const password_new = obj.password_new;
            const password_confirmation = obj.password_confirmation;
            return {
                password, password_new, password_confirmation,
                errors: {
                    password: validatePassword(password, oldPassword),
                    password_new: validatePasswordNew(password_new),
                    password_confirmation: validatePasswordConfirmation(password_new, password_confirmation),
                }
            }
        }
    }
}