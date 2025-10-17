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
  AdminPanelSettings,
  People,
  Settings,
  Security,
} from '@mui/icons-material';

export default function AdminPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Admin Dashboard
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <AdminPanelSettings sx={{ mr: 2, fontSize: 40, color: 'error.main' }} />
                <Typography variant="h5" component="h2">
                  Administrative Access
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary">
                You have full administrative privileges. This page is restricted to users with admin role only.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Admin Features
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <People />
                  </ListItemIcon>
                  <ListItemText primary="User Management" secondary="Manage user accounts and permissions" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  <ListItemText primary="System Settings" secondary="Configure application settings" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Security />
                  </ListItemIcon>
                  <ListItemText primary="Security Controls" secondary="Monitor and manage security policies" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
