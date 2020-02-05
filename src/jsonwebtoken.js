import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET);
