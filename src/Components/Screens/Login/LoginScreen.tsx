import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import Logo from '../../Reusable/Logo.png';
import styles from '../../Reusable/styles';
import { Link } from 'react-router-dom';
import useLogin from './useLogin';

export default function LoginScreen() {
    const {
        email,
        setEmail,
        password,
        error,
        verifyPassword,
        login,
    } = useLogin();

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