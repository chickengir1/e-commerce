import React from 'react';
import { StyledInput } from './styles/RegisterInputStyles';
import { PlaceholderSpan } from './styles/PlaceholderSpanStyles';

const RegisterInput = ({ type, placeholder, value, onChange }) => {
    return (
        <>
            <PlaceholderSpan>{placeholder}</PlaceholderSpan>
            <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </>
    );
};

export default RegisterInput;