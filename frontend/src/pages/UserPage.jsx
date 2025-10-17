import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Person,
  AccountCircle,
  Settings,
  Notifications,
} from '@mui/icons-material';

export default function UserPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        User Dashboard
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Person sx={{ mr: 2, fontSize: 40, color: 'primary.main' }} />
                <Typography variant="h5" component="h2">
                  User Access
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary">
                This page is accessible by both user and admin roles. Here you can manage your personal settings and preferences.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                User Features
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <AccountCircle />
                  </ListItemIcon>
                  <ListItemText primary="Profile Management" secondary="Update your personal information" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  <ListItemText primary="Account Settings" secondary="Configure your account preferences" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Notifications />
                  </ListItemIcon>
                  <ListItemText primary="Notifications" secondary="Manage notification preferences" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
