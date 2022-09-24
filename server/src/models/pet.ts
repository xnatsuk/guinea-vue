import type { Types } from 'mongoose'
import { Schema, model } from 'mongoose'

interface IPetModel {
  id: Types.ObjectId
  birthday?: Date
  deathDate?: Date
  description?: string
  favoriteActivity?: string
  favoriteFood?: string
  gender?: string
  name: string
  nickname?: string
  photo?: string
  species?: string

}

const petSchema = new Schema<IPetModel>({
  id: {
    type: Schema.Types.ObjectId,
  },
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
}, {
  timestamps: true,
  collection: 'pets',
  versionKey: false,
})

export default model<IPetModel>('Pet', petSchema)
