import mongoose from 'mongoose'

const petSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    unique: true,
    required: true,
  },
  birthday: {
    type: Date,
  },
  gender: {
    type: String,
  },
  species: {
    type: String,
  },
  nickname: {
    type: String,
  },
  deathDate: {
    type: Date,
  },
  favoriteFood: {
    type: String,
  },
  favoriteActivity: {
    type: String,
  },
  description: {
    type: String,
  },
  photo: {
    type: String,
  },
})

export default mongoose.model('Pet', petSchema)
