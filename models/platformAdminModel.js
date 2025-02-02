// models/PlatformAdmins.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlatformAdminsSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    required: false
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  zipcode: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  token: {
    type: String,
    default: null,
    required: false
  },
  forget: {
    type: String,
    default: null,
    require: false
  }
}, {collection: "PlatformAdmins"});

// Create a model using the schema
const PlatformAdmins = mongoose.model('PlatformAdmins', PlatformAdminsSchema);

module.exports = PlatformAdmins;
