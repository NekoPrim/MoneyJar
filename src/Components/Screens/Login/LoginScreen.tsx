import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import Logo from '../../Reusable/Logo.png';
import styles from '../../Reusable/styles';
import { Link } from 'react-router-dom';

export default function LoginScreen() {
    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <img src={Logo} style={{ margin: 'auto', justifyContent: 'center' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <Box sx={styles.loginBox}>
                    <TextField
                        id="outlined-basic-email"
                        label="email"
                        variant="outlined"
                        color="success"
                        style={styles.loginInput}
                    />
                </Box>
                <Box sx={styles.loginBox}>
                    <TextField
                        id="outlined-basic-password"
                        label="password"
                        variant="outlined"
                        color="success"
                        style={styles.loginInput}
                    />
                </Box>

                <Box sx={styles.loginBox}>
                    <Link to="/">
                        <Button variant="contained" color="success" sx={styles.loginButton}>
                            Login
                        </Button>
                    </Link>
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
                        <Button sx={{
                            color: styles.red,
                            ':hover': {
                                // bgcolor: styles.red,
                                color: styles.green,
                                backgroundColor: styles.red,
                                }
                            }}>
                            Forgot my password
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}