export default {
  Query: {
    hello: () => 'Hello GraphQL!',
    helloUser: (_, { name }) => `Hello ${name}!`
  }
};
