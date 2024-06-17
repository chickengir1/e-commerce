import React, { useState } from 'react';
import usePostRequest from '../../hook/usePostRequest.jsx';
import RegisterBtn from './RegisterBtn';
import RegisterInput from './RegisterInput';
import { useNavigate } from 'react-router-dom';
import Notification from '../notification/Notification.jsx';
import API_PATHS from '../../utils/apiPaths';
import { validateForm } from '../../utils/validation';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const RegisterBox = () => {
    const navigate = useNavigate();
    const [notification, setNotification] = useState("");
    const { loading, postData } = usePostRequest(API_PATHS.REGISTER);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: name === "phoneNumber" ? formatPhoneNumber(value) : value,
        }));
    };

    const formatPhoneNumber = (value) => {
        const phoneNumber = value.replace(/\D/g, ""); 
        let formattedNumber = "";
        
        if (phoneNumber.length > 0) {
            formattedNumber += phoneNumber.slice(0, 3);
        }
        if (phoneNumber.length > 3) {
            formattedNumber += "-" + phoneNumber.slice(3, 7);
        }
        if (phoneNumber.length > 7) {
            formattedNumber += "-" + phoneNumber.slice(7, 11);
        }
        
        return formattedNumber;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationError = validateForm(formData);
        if (validationError) {
            setNotification(validationError);
            await delay(1500);
            setNotification("");
            return;
        }

        const { name, email, password, phoneNumber } = formData;
        const formatPhoneNumber = phoneNumber.replace(/-/g, '');

        console.log('핸폰 번호 양식', formatPhoneNumber);

        try {
            const result = await postData({ name, email, password, phoneNumber: formatPhoneNumber });
            setNotification("회원가입이 완료되었습니다!");
            await delay(1500);
            setNotification("");
            navigate("/login");
        } catch (e) {
            console.error('Registration failed:', e);
            setNotification("회원가입에 실패했습니다. 다시 시도해주세요.");
            await delay(1500);
            setNotification("");
        }
    };

    return (
        <>
            {notification && <Notification message={notification} />}
            <form onSubmit={handleSubmit}>
                <RegisterInput type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <RegisterInput type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <RegisterInput type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                <RegisterInput type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                <RegisterInput type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
                <RegisterBtn loading={loading} />
            </form>
        </>
    );
};

export default RegisterBox;
