import { GraphQLServer } from 'graphql-yoga';
import dotenv from 'dotenv';
import logger from 'morgan';

import schema from './schema';
import './passport';
import { authenticateAdmin, authenticateUser } from './passport';
import { isAdmin, isUser, isAdminOrUser } from './middlewares';

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
server.start({ port: PORT }, () =>
  console.log(`Server is now running on http://localhost:${PORT}`)
);