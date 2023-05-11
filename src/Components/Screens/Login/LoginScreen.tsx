import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import Logo from '../../Reusable/Logo.png';
import styles from '../../Reusable/styles';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginScreen() {
    const nav = useNavigate();
    // may want verification in BE and then call user info after logining in...
    // need useSelector GET users
    // const users = useSelector(getUsers());
    // are we going to use useDispatch?
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [count, setCount] = useState(0);
    const [error, setError] = useState('');

    console.log('email', email);
    console.log('password', password);

    const verifyPassword = (e: any) => {
        setPassword(e.target.value);
        setCount(e.target.value.length);
    }

    const login = () => {
        const user = {
            email,
            password
        }
        if (count >= 8) {
            console.log('user', user);
            // dispatch user info to BE with api
            nav('/');
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

    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <img src={Logo} style={{ margin: 'auto', justifyContent: 'center' }} />
            <Box sx={[styles.loginBox, styles.red]}>
                {error}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={styles.loginBox}>
                    <TextField
                        id="outlined-basic-email"
                        label="email"
                        variant="outlined"
                        color="success"
                        style={styles.loginInput}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Box>
                <Box sx={styles.loginBox}>
                    <TextField
                        id="outlined-basic-password"
                        label="password"
                        variant="outlined"
                        color="success"
                        type="password"
                        style={styles.loginInput}
                        value={password}
                        onChange={(e) => verifyPassword(e)}
                    />
                </Box>

                <Box sx={styles.loginBox}>
                    <Button 
                        variant="contained"
                        color="success"
                        sx={styles.loginButton}
                        onClick={login}
                        disabled={!email || !password}
                    >
                        Login
                    </Button>
                </Box>
                <Box sx={styles.loginBox}>
                    <Link to="/CreateUser">
                        <Button variant="contained" color="success" sx={styles.loginButton}>
                            Create Account
                        </Button>
                    </Link>
                </Box>

                <Box sx={styles.loginBox}>
                    <Link to="/ForgotPassword">
                        <Button sx={styles.red}>
                            Forgot my password
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}