import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import dotenv from 'dotenv';
import { prisma } from '../generated/prisma-client';

dotenv.config();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

const verifyAdmin = async (payload, done) => {
  try {
    const admin = await prisma.admin({ id: payload.id });
    if (admin) {
      return done(null, admin);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
};

passport.use(new JwtStrategy(opts, verifyAdmin));
passport.initialize();

export const authenticateJwt = (req, res, next) =>
  passport.authenticate('jwt', { session: false }, (error, admin) => {
    if (admin) {
      req.admin = admin;
    }
    next();
  })(req, res, next);
