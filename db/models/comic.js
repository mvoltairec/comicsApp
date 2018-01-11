import { ObjectId } from '../../../../../Library/Caches/typescript/2.6/node_modules/@types/bson';

var db = require('../config');

var comicSchema = new db.schema({
  id: ObjectId,
  publisher: String,
  seriesTitle: String,
  issueTitle: String,
  volumeNumber: Number,
  issueNumber: Number,
  releaseDate: Date,
  notes: String
})