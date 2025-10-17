import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  Block,
  ArrowBack,
} from '@mui/icons-material';

export default function NotAuthorized() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card>
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          <Box mb={3}>
            <Block sx={{ fontSize: 80, color: 'error.main' }} />
          </Box>
          <Typography variant="h4" component="h1" gutterBottom color="error">
            Access Denied
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            You do not have permission to view this page. Please contact your administrator if you believe this is an error.
          </Typography>
          <Button
            variant="contained"
            startIcon={<ArrowBack />}
            onClick={() => navigate('/dashboard')}
            sx={{ mt: 2 }}
          >
            Go to Dashboard
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
