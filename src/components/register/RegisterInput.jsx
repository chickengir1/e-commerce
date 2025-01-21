import React from 'react';
import { StyledInput } from './styles/RegisterInputStyles';
import { PlaceholderSpan } from './styles/PlaceholderSpanStyles';

const RegisterInput = ({ type, name, placeholder, value, onChange }) => {
    return (
        <>
            <PlaceholderSpan>{placeholder}</PlaceholderSpan>
            <StyledInput type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
        </>
    );
};

export default RegisterInput;
