import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import ErrorResponse from '../utils/errorResponse.js';

dotenv.config();

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export const registerUser = async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Basic validation
  if (!name || !email || !password) {
    return next(new ErrorResponse('Please provide name, email, and password', 400));
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return next(new ErrorResponse('Please provide a valid email', 400));
  }

  if (password.length < 6) {
    return next(new ErrorResponse('Password must be at least 6 characters', 400));
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return next(new ErrorResponse('User already exists', 400));

    const user = await User.create({ name, email, password, role });
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role)
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 500));
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return next(new ErrorResponse('Please provide email and password', 400));
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return next(new ErrorResponse('Please provide a valid email', 400));
  }

  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id, user.role)
      });
    } else {
      return next(new ErrorResponse('Invalid credentials', 401));
    }
  } catch (error) {
    next(new ErrorResponse(error.message, 500));
  }
};
