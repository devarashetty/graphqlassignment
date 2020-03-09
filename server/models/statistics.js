import mongoose from 'mongoose';

const { Schema } = mongoose;

const BowlingLevelSchema = new Schema({
    10: { type: Number, trim: true },
    "5w" : {type: String, trim: true},
    "4w" : {type: String, trim: true},
    "SR" : {type: String, trim: true},
    "Econ" : {type: String, trim: true},
    "Ave" : {type: String, trim: true},
    "BBM" : {type: String, trim: true},
    "BBI" : {type: String, trim: true},
    "Wkts" : {type: String, trim: true},
    "Runs" : {type: String, trim: true},
    "Balls" : {type: String, trim: true},
    "Inns" : {type: String, trim: true},
    "Mat" : {type: String, trim: true}
});

const BattingLevelSchema = new Schema({
    "50": { type: Number, trim: true },
    "100" : {type: String, trim: true},
    "St" : {type: String, trim: true},
    "Ct" : {type: String, trim: true},
    "6s" : {type: String, trim: true},
    "4s" : {type: String, trim: true},
    "SR" : {type: String, trim: true},
    "BF" : {type: String, trim: true},
    "Ave" : {type: String, trim: true},
    "HS" : {type: String, trim: true},
    "Runs" : {type: String, trim: true},
    "NO" : {type: String, trim: true},
    "Inns" : {type: String, trim: true},
    "Mat" : {type: String, trim: true}
});

const BowlingSchema = new Schema({
    listA: {type:BowlingLevelSchema},
    firstClass: {type:BowlingLevelSchema},
    T20Is: {type:BowlingLevelSchema},
    ODIs: {type:BowlingLevelSchema},
    tests: {type:BowlingLevelSchema},
});

const BattingSchema = new Schema({
    listA: {type:BattingLevelSchema},
    firstClass: {type:BattingLevelSchema},
    T20Is: {type:BattingLevelSchema},
    ODIs: {type:BattingLevelSchema},
    tests: {type:BattingLevelSchema}
});

const DataSchema = new Schema({
    bowling: BowlingSchema,
    batting: BattingSchema
})

const StatisticsSchema = new Schema({
  pid: { type: Number, trim: true },
  profile: { type: String, trim: true },
  imageURL: { type: String, trim: true },
  battingStyle: { type: String, trim: true },
  bowlingStyle: { type: String, trim: true },
  majorTeams: { type: String, trim: true },
  born: { type: String, trim: true },
  fullName: { type: String, trim: true },
  name: { type: String, trim: true },
  country: { type: String, trim: true },
  playingRole: { type: String, trim: true },
  v: { type: String, trim: true },
  currentAge: { type: String, trim: true },
  data: {type: DataSchema, trim: true}
});

mongoose.model('statistics', StatisticsSchema);
