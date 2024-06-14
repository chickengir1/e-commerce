import React, { useState } from 'react';
import usePostRequest from '../../hook/usePostRequest.jsx';
import RegisterBtn from './RegisterBtn';
import RegisterInput from './RegisterInput';

const RegisterBox = () => {
    const { data, loading, error, postData } = usePostRequest('/api/register');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setPasswordError("Passwords do not match.");
            return;
        }
        setPasswordError('');
        await postData({ name, email, password, phoneNumber });
    };

    return (
        <form onSubmit={handleSubmit}>
            <RegisterInput type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <RegisterInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <RegisterInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <RegisterInput type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <RegisterInput type="tel" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <RegisterBtn loading={loading} />
            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {data && <p style={{ color: 'green' }}>Registration successful!</p>}
        </form>
    );
};

export default RegisterBox;
