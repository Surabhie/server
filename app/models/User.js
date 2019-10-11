'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let userSchema = new Schema({
  userId: {
    type: String,
    default: '',
    index: true, //by using index mongodb helps to search that particular record faster
    unique: true   //This field should have a unique property
  },
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  mobileNumber: {
    type: String,
    default: ''
  },
  /*  isAdmin: {
     type: String,
     default: 'false'
   }, */
  status: {
    type: String,
    default: 'offline'
  },
  password: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: '',
    unique: true
  },
  validationToken: { //will generate automatically while resetting password
    type: String,
    default: ''
  },
  emailVerified: {
    type: String,
    default: 'No'
  },
  createdOn: {
    type: Date,
    default: ""
  }


})


mongoose.model('User', userSchema);