import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle,
  Dashboard,
  AdminPanelSettings,
  Person,
  Logout,
} from '@mui/icons-material';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    handleClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Auth App
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {!user && (
                <>
                  <MenuItem onClick={() => { navigate('/'); handleClose(); }}>
                    <AccountCircle sx={{ mr: 1 }} />
                    Login
                  </MenuItem>
                  <MenuItem onClick={() => { navigate('/register'); handleClose(); }}>
                    <Person sx={{ mr: 1 }} />
                    Register
                  </MenuItem>
                </>
              )}
              {user && (
                <>
                  <MenuItem onClick={() => { navigate('/dashboard'); handleClose(); }}>
                    <Dashboard sx={{ mr: 1 }} />
                    Dashboard
                  </MenuItem>
                  {user.role === 'admin' && (
                    <MenuItem onClick={() => { navigate('/admin'); handleClose(); }}>
                      <AdminPanelSettings sx={{ mr: 1 }} />
                      Admin
                    </MenuItem>
                  )}
                  {user.role === 'user' && (
                    <MenuItem onClick={() => { navigate('/user'); handleClose(); }}>
                      <Person sx={{ mr: 1 }} />
                      User
                    </MenuItem>
                  )}
                  <MenuItem onClick={handleLogout}>
                    <Logout sx={{ mr: 1 }} />
                    Logout
                  </MenuItem>
                </>
              )}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {!user && (
              <>
                <Button color="inherit" component={Link} to="/">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/register">
                  Register
                </Button>
              </>
            )}
            {user && (
              <>
                <Button color="inherit" component={Link} to="/dashboard">
                  Dashboard
                </Button>
                {user.role === 'admin' && (
                  <Button color="inherit" component={Link} to="/admin">
                    Admin
                  </Button>
                )}
                {user.role === 'user' && (
                  <Button color="inherit" component={Link} to="/user">
                    User
                  </Button>
                )}
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
