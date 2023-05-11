import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Reusable/Logo.png';
import styles from '../../Reusable/styles';

export default function WelcomeScreen() {
    const nav = useNavigate();

    const next = () => {
        nav('/');
    }
    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <img src={Logo} style={{ margin: 'auto', justifyContent: 'center' }} />
            <Typography sx={[styles.welcome, styles.green]}>
                Welcome to MoneyJar!
            </Typography>
            <Typography sx={[styles.charcoal, styles.welcomeMessage]}>
                MoneyJar was created to help save money and see where it's getting spent.
                When you can see where expenses are going, it's easier to alter habits and 
                be more successful at saving!
            </Typography>
            <Typography sx={[styles.charcoal, styles.welcomeMessage, { marginBottom: 4 }]}>
                In the 'Home' screen you can make categories such as: groceries, gas, eating out, ect.
                Afterwards you can enter in each time you spend in each area.  You can also create goals
                to save! In the 'profile' screen you can see your user info, update your info, and add more
                info to your saving goals.  On the 'OverView' screen you can see your spending habits over
                time.  On the 'Setting' screen you can adjust your account settings.
            </Typography>
            <Typography sx={[styles.welcome, styles.green, { marginBottom: 4 }]}>
                Enjoy!
            </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                <Button
                    variant="contained"
                    color="success"
                    onClick={next}
                    sx={styles.loginButton}
                >
                    Continue
                </Button>
                </Box>
        </Box>
    );
}