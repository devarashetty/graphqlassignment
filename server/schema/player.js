import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt
} from 'graphql';

const PlayerType = new GraphQLObjectType({
  name: 'player',
  description: 'players list',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    fullName: { type: GraphQLString },
    pid: {type: GraphQLInt}
  }),
});

export default PlayerType;
