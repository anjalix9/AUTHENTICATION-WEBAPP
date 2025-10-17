import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { protect, authorizeRoles } from '../middleware/authmiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/admin', protect, authorizeRoles('admin'), (req, res) => {
  res.json({ message: `Welcome Admin ${req.user.name}` });
});

router.get('/user', protect, authorizeRoles('user', 'admin'), (req, res) => {
  res.json({ message: `Welcome User ${req.user.name}` });
});

export default router;
