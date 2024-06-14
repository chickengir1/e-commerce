import React from 'react';
import { RegisterButton } from './styles/RegisterButtonStyles';

const RegisterBtn = ({ loading }) => {
    return (
        <RegisterButton type="submit" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
        </RegisterButton>
    );
};

export default RegisterBtn;