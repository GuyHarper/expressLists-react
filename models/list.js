const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  author: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

const entrySchema = new mongoose.Schema({
  text: String,
  author: { type: mongoose.Schema.ObjectId, ref: 'User' },
  active: Boolean,
  comments: [ commentSchema ]
}, {
  timestamps: true
});

const listSchema = new mongoose.Schema({
  name: String,
  entries: [ entrySchema ],
  author: { type: mongoose.Schema.ObjectId, ref: 'User' },
  contributors: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
}, {
  timestamps: true
});

module.exports = mongoose.model( 'List', listSchema );
