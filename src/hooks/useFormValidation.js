import {useState, useEffect} from 'react';

const useFormValidation = (formData, requiredFields) => {
    const [isFormIncomplete, setIsFormIncomplete] = useState(true);

    useEffect(() => {
        const isIncomplete = requiredFields.some(key => !formData[key]);
        setIsFormIncomplete(isIncomplete);
    }, [formData, requiredFields]);

    return isFormIncomplete;
};

export default useFormValidation;
