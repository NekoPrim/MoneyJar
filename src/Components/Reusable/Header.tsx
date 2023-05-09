import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Logo from './Logo.png';
import { Box, MenuItem } from '@mui/material';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="positioned-button"
        aria-controls={open ? 'positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img src={Logo} style={{ height: '100px' }}/>
      </Button>
      <Menu
        id="positioned-menu"
        aria-labelledby="positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        sx={{
            display: 'flex',
            top: 100,
        }}
      >
        <Link to="/Profile" style={{ textDecoration: 'none' }}>
            <MenuItem onClick={handleClose}>
                Profile
            </MenuItem>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <MenuItem onClick={handleClose}>
                Home
            </MenuItem>
        </Link>
        <Link to="/OverView" style={{ textDecoration: 'none' }}>
            <MenuItem onClick={handleClose}>
                OverView
            </MenuItem>
        </Link>
        <Link to="/Settings" style={{ textDecoration: 'none' }}>
            <MenuItem onClick={handleClose}>
                Settings
            </MenuItem>
        </Link>
        <Link to="/Login" style={{ textDecoration: 'none' }}>
            <MenuItem id='Logout' onClick={handleClose}>
                Logout
            </MenuItem>
        </Link>
      </Menu>
    </Box>
  );
}