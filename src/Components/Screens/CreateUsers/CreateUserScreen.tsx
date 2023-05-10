import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, TextField } from '@mui/material';
import Logo from '../../Reusable/Logo.png';
import styles from '../../Reusable/styles';
// import { useNavigate } from 'react-router-dom';
import useCreateUser from './useCreateUser';

export default function CreateUserScreen() {
    const {
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
    } = useCreateUser
    // const nav = useNavigate();

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [count, setCount] = useState(0);
    // const [error, setError] = useState('');

    // const verifyFields = !firstName || !lastName || !email || !password || !confirmPassword;
    // const capturePassword = (e: any) => {
    //     setPassword(e.target.value);
    //     setCount(e.target.value.length);
    // }

    // const createAccount = () => {
    //     setError('');
    //     const user = {
    //         firstName,
    //         lastName,
    //         email,
    //         password,
    //     };

    //     const checkEmail = email.split('');
    //     let isEmail: boolean = false;
    //     checkEmail.map((value: string) => {
    //         if (value === '@') {
    //             isEmail = true;
    //         }
    //     })

    //     if (isEmail === false) {
    //         setError('email must be actual email');
    //     } else if (count < 8) {
    //         setError('password must be at least 8 characters');
    //     } else if (password !== confirmPassword) {
    //         setError('password and confirm password do not match')
    //     } else if (!error) {
    //         console.log('user', user);
    //         // dispatch user info to BE
    //         nav('/Welcome');
    //     }
    // };

    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <img
                src={Logo}
                style={{ margin: 'auto', justifyContent: 'center' }} />

            <FormControl>
                <FormLabel sx={[styles.green, { margin: 'auto', justifyContent: 'center', fontSize: 24 }]}>
                    Create MoneyJar Account
                </FormLabel>
                <Box sx={[styles.loginBox, styles.red]}>
                {error}
            </Box>

                <Box sx={styles.formFieldBox}>
                <TextField
                    label="First Name"
                    variant="outlined"
                    color="success"
                    sx={styles.formField}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    label="Last Name"
                    variant="outlined"
                    color="success"
                    sx={styles.formField}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    color="success"
                    sx={styles.formField}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    color="success"
                    type="password"
                    sx={styles.formField}
                    value={password}
                    onChange={(e) => capturePassword(e)}
                />
                <TextField
                    label="Confirm Password"
                    variant="outlined"
                    color="success"
                    type="password"
                    sx={styles.formField}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4, marginBottom: 12 }}>
                <Button
                    variant="contained"
                    color="success"
                    sx={styles.loginButton}
                    disabled={verifyFields}
                    onClick={createAccount}
                >
                    Create Account
                </Button>
                </Box>

            </FormControl>
            
        </Box>
    );
}