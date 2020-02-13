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

const verifyUser = async (payload, done) => {
  try {
    const user = await prisma.user({ id: payload.id });
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
};

passport.use('admin-rule', new JwtStrategy(opts, verifyAdmin));
passport.use('user-rule', new JwtStrategy(opts, verifyUser));
passport.initialize();

export const authenticateAdmin = (req, res, next) =>
  passport.authenticate('admin-rule', { session: false }, (error, admin) => {
    if (admin) {
      req.admin = admin;
    }
    next();
  })(req, res, next);

export const authenticateUser = (req, res, next) =>
  passport.authenticate('user-rule', { session: false }, (error, user) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);
