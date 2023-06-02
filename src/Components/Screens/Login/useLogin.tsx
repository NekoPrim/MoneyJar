import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { mockUsers } from '../../Reusable/mockData';

export default function useLogin() {
    const nav = useNavigate();
    const dispatch = useDispatch();
    // may want verification in BE and then call user info after logining in...
    // need useSelector GET users
    // const users = useSelector(getUsers());
    // are we going to use useDispatch?
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [count, setCount] = useState(0);
    const [error, setError] = useState('');

    // console.log('email', email);
    // console.log('password', password);

    const verifyPassword = (e: any) => {
        setPassword(e.target.value);
        setCount(e.target.value.length);
    };

    const login = () => {
        const mock = mockUsers;
        if (count >= 8) {
            // console.log('user', user);
            // verifyEmail(user);
            mock.map((value: any) => {
                // console.log('value', value.email);
                if (value.email === email && value.password === password) {
                    const user = {
                        id: value.id,
                        first_name: value.first_name,
                        last_name: value.last_name,
                        email,
                        password,
                        url_image: value.url_image,
                    }
                    dispatch({
                        type: 'SET_USER',
                        payload: user,
                    })
                    nav('/');
                } else {
                    setError('Account not found. Make sure correct spelling');
                }
            });
        } else { setError('password must be at least 8 characters'); }
        // may want to have verification in BE
        // make sure user info matches stored info
        // const verifyEmail: boolean = users.email.map( (value: string) => {
        //     if (value === user.email) {
        //         return true;
        //     }
        // });
        // const verifyPassword: boolean = users.password.map( (value: string) => {
        //     if (value === user.password) {
        //         return true;
        //     }
        // });
    };

    return ({
        email,
        setEmail,
        password,
        error,
        verifyPassword,
        login,
    });
};