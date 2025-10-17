import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { NotificationProvider } from './context/NotificationContext';
import Login from './components/login';
import Register from './components/Register';
import Dashboard from './pages/Dashboard';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import NotAuthorized from './pages/NotAuthorized';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NotificationProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute roles={['admin']}>
                <AdminPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/user"
            element={
              <ProtectedRoute roles={['user', 'admin']}>
                <UserPage />
              </ProtectedRoute>
            }
          />

          <Route path="/unauthorized" element={<NotAuthorized />} />
        </Routes>
      </NotificationProvider>
    </ThemeProvider>
  );
}
