import React from 'react';
import { Box, Button, FormControl, FormLabel, TextField } from '@mui/material';
import Logo from '../../Reusable/Logo.png';
import styles from '../../Reusable/styles';
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
        confirmPassword,
        setConfirmPassword,
        error,
        verifyFields,
        capturePassword,
        createAccount,
    } = useCreateUser();
    
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