import React, { useCallback } from 'react';
import { isEmail } from 'validator';

//хук управления формой и валидации формы
export function useFormWithValidation() {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        if (name === 'email') {
            const emailError = !isEmail(value) ? 'Неверный формат электронной почты' : '';
            setErrors({ ...errors, [name]: emailError });
        } else {
            setErrors({ ...errors, [name]: target.validationMessage });
        }

        setIsValid(target.closest("form").checkValidity());
        setValues({ ...values, [name]: value });

    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, handleChange, errors, isValid, resetForm };
}