import React from 'react';
import { Box, TextField } from '@mui/material';
import Logo from '../../Reusable/Logo.png';
import styles from '../../Reusable/styles';

export default function LoginScreen() {
    return (
        <Box
            sx={{
                flex: 1,
                // margin: 'auto',
                display: 'flex',
                // justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <img src={Logo} style={{ margin: 'auto', justifyContent: 'center' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                    id="outlined-basic-email"
                    label="email"
                    variant="outlined"
                    color="success"
                    style={styles.loginInput}
                />
                <TextField
                    id="outlined-basic-password"
                    label="password"
                    variant="outlined"
                    color="success"
                    style={styles.loginInput}
                />
            </Box>
        </Box>
    );
}