const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  rollno: {
    type: Number
  }
}, {
    collection: 'students'
  })

module.exports = mongoose.model('Student', studentSchema)

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// let studentSchema = new Schema({
//   _id: { 
//     type: mongoose.SchemaTypes.ObjectId
//   },
//   name: {
//     type: String
//   },
//   email: {
//     type: String
//   },
//   rollno: {
//     type: String
//   },
// },{
//   collection: 'students'
// })

// module.exports = mongoose.model('Student', studentSchema)