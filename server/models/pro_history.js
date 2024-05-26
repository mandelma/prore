const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proHistorySchema = new Schema({
  header: {
      type: String
  },
  address: {
      type: String
  },
  date: {
      type: String
  }

})

proHistorySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

const ProHistory = mongoose.model('pro_history', proHistorySchema)
module.exports = ProHistory;