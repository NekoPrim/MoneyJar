import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Logo from './logo.jpeg';
import { Box } from '@mui/material';

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
    <div>
        <Box display={'row'}>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {Logo}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box display={'row'}>
        <Link to="/Profile">
            <Button onClick={handleClose}>Profile</Button>
        </Link>
        <Link to="/">
            <Button onClick={handleClose}>Home</Button>
        </Link>
        <Link to="/OverView">
            <Button onClick={handleClose}>OverView</Button>
        </Link>
        <Link to="/Settings">
            <Button onClick={handleClose}>Settings</Button>
        </Link>
        <Link to="/Login">
            <Button id='Logout' onClick={handleClose}>Logout</Button>
        </Link>
        </Box>
      </Menu>
      </Box>
    </div>
  );
}