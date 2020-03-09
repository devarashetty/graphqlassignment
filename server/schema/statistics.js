import {
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
  } from 'graphql';
  
  const StatisticsType = new GraphQLObjectType({
    name: 'statistics',
    description: 'player Statics',
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      address: { type: GraphQLString },
      phone: { type: GraphQLString },
      room: { type: GraphQLString },
      bar: { type: GraphQLBoolean },
      park: { type: GraphQLBoolean },
      wifi: { type: GraphQLBoolean },
      recording: { type: GraphQLBoolean },
      email: { type: GraphQLString },
      latitude: { type: GraphQLFloat },
      longitude: { type: GraphQLFloat },
    }),
  });
  
  export default StatisticsType;
  