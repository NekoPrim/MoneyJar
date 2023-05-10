import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        setError('');
        const user = {
            firstName,
            lastName,
            email,
            password,
        };

        const checkEmail = email.split('');
        let isEmail: boolean = false;
        checkEmail.map((value: string) => {
            if (value === '@') {
                isEmail = true;
            }
        })

        if (isEmail === false) {
            setError('email must be actual email');
        } else if (count < 8) {
            setError('password must be at least 8 characters');
        } else if (password !== confirmPassword) {
            setError('password and confirm password do not match')
        } else if (!error) {
            console.log('user', user);
            // dispatch user info to BE
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
        setPassword,
        confirmPassword,
        setConfirmPassword,
        error,
        verifyFields,
        capturePassword,
        createAccount,
    });
}