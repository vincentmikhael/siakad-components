'use server'
import {updateProfileScheme} from "@libs/schemes/updateProfileScheme";

function updateProfile(previousState, formData) {
    const formEntries = Object.fromEntries(formData.entries());
    const oldPassword = 'test';
    console.log("Request [updateProfile]: ", previousState, formData, formEntries)
    return updateProfileScheme().parse(formEntries, oldPassword);
}

export {updateProfile}