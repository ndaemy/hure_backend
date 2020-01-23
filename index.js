import { GraphQLServer } from 'graphql-yoga';
import dotenv from 'dotenv';
import logger from 'morgan';

import schema from './src/schema';

// Set environment
dotenv.config();
const PORT = process.env.PORT || 4000;

// Create server
const server = new GraphQLServer({ schema });
server.express.use(logger('dev'));
server.start({ port: PORT }, () =>
  console.log(`Server is now running on http://localhost:${PORT}`)
);
