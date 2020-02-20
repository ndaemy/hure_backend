import { GraphQLServer } from 'graphql-yoga';
import dotenv from 'dotenv';
import logger from 'morgan';
import cors from 'cors';

import schema from './schema';
import './passport';
import { authenticateAdmin, authenticateUser } from './passport';
import { isAdmin, isUser, isAdminOrUser } from './middlewares';
import { uploadMiddleware } from './upload';

// Set environment
dotenv.config();
const PORT = process.env.PORT || 4000;

// Create server
const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, isAdmin, isUser, isAdminOrUser })
});
server.express.use(logger('dev'));
server.express.use(authenticateAdmin);
server.express.use(authenticateUser);

// Handle file upload
const whitelist = ['http://localhost:3000', 'https://hure-admin.netlify.com'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
server.express.post(
  '/api/upload',
  cors(corsOptions),
  uploadMiddleware,
  (req, res) => {
    const {
      file: { location }
    } = req;
    res.json({ location });
  }
);

server.start({ port: PORT }, () =>
  console.log(`Server is now running on http://localhost:${PORT}`)
);
