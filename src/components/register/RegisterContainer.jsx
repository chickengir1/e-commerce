import React from 'react';
import RegisterBox from './RegisterBox';
import { RegisterContainerWrapper } from './styles/RegisterContainerWrapperStyles';

const RegisterContainer = () => (
    <RegisterContainerWrapper>
        <h2>CREATE ACCOUNT</h2>
        <RegisterBox />
    </RegisterContainerWrapper>
);

export default RegisterContainer;
