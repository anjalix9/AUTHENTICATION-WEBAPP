import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Person,
  AdminPanelSettings,
  Dashboard as DashboardIcon,
} from '@mui/icons-material';

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  const getRoleIcon = (role) => {
    switch (role) {
      case 'admin':
        return <AdminPanelSettings />;
      case 'user':
        return <Person />;
      default:
        return <Person />;
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin':
        return 'error';
      case 'user':
        return 'primary';
      default:
        return 'default';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Welcome to Your Dashboard
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                  {user?.name?.charAt(0).toUpperCase()}
                </Avatar>
                <Box>
                  <Typography variant="h5" component="h2">
                    {user?.name}
                  </Typography>
                  <Chip
                    icon={getRoleIcon(user?.role)}
                    label={user?.role}
                    color={getRoleColor(user?.role)}
                    variant="outlined"
                  />
                </Box>
              </Box>
              <Typography variant="body1" color="text.secondary">
                Welcome back! You are logged in as a {user?.role}.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <DashboardIcon sx={{ mr: 2, fontSize: 40, color: 'primary.main' }} />
                <Typography variant="h5" component="h2">
                  Quick Actions
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" mb={2}>
                Use the navigation bar above to access your authorized pages and features.
              </Typography>
              {user?.role === 'admin' && (
                <Typography variant="body2" color="text.secondary">
                  As an admin, you have access to user management and system settings.
                </Typography>
              )}
              {user?.role === 'user' && (
                <Typography variant="body2" color="text.secondary">
                  As a user, you can access your personal profile and settings.
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
