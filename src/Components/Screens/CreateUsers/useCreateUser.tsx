import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockUsers } from '../../Reusable/mockData';

export default function useCreateUser() {
    const nav = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [count, setCount] = useState(0);
    const [error, setError] = useState('');

    const verifyFields = !firstName || !lastName || !email || !password || !confirmPassword;
    const capturePassword = (e: any) => {
        setPassword(e.target.value);
        setCount(e.target.value.length);
    }

    const createAccount = () => {
        const mock = mockUsers;
        let id = mock.length;
        setError('');

        const checkEmail = email.split('');
        let isEmail: boolean = false;
        checkEmail.map((value: string) => {
            if (value === '@') {
                isEmail = true;
            }
        });

        mock.map((value: any) => {
            if (value.email === email) {
                setError('Account already exists');
            }
        })

        if (isEmail === false) {
            setError('email must be actual email');
        } else if (count < 8) {
            setError('password must be at least 8 characters');
        } else if (password !== confirmPassword) {
            setError('password and confirm password do not match');
        } else if (!error) {
            // dispatch user info to BE
            mock.push({
                id,
                first_name: firstName,
                last_name: lastName,
                email,
                password,
                url_image: 'https://img.freepik.com/free-vector/illustration-business-people_53876-6299.jpg?w=360'
            });
            nav('/Welcome');
        }
    };

    return ({
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        password,
        confirmPassword,
        setConfirmPassword,
        error,
        verifyFields,
        capturePassword,
        createAccount,
    });
}