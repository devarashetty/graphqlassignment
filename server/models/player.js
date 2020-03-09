import mongoose from 'mongoose';

const { Schema } = mongoose;

const PlayerSchema = new Schema({
  name: { type: String, trim: true },
  fullName: { type: String, trim: true },
  pid: { type: Number, trim: true }
},{
  collection: 'player'
});

mongoose.model('player', PlayerSchema);
