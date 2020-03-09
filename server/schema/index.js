import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';
import mongoose from 'mongoose';
import PlayerType from './player';
import StatisticsType from './statistics';

const Player = mongoose.model('player');
const Statistics = mongoose.model('statistics');

const rootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  description: 'root query',
  fields: () => ({
    players: {
      type: new GraphQLList(PlayerType),
      resolve() {
        return Player.find({});
      },
    },
    statistics: {
      type: new GraphQLList(StatisticsType),
      resolve() {
        return Statistics.find({});
      },
    }
  }),
});

const Schema = new GraphQLSchema({
  query: rootQuery,
});

export default Schema;
