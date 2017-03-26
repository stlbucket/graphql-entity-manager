const gql = require('graphql');

const graphql = gql.graphql;
const GraphQLSchema = gql.GraphQLSchema;
const GraphQLObjectType = gql.GraphQLObjectType;
const GraphQLString = gql.GraphQLString;
const GraphqlJSTransport = require('lokka-transport-graphql-js').Transport;


const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
});

const transport = new GraphqlJSTransport(schema);

module.exports = transport;