import React, { useCallback } from 'react';

//хук управления формой
export function useForm() {
    const [values, setValues] = React.useState({});

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setValues({ ...values, [name]: value });
    };

    return { values, handleChange, setValues };
}