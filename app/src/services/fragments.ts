import { gql } from 'graphql-tag'

export const petFragment = gql`
  fragment PetFragment on Pet {
    _id
    name
    birthday
    gender
    species
    nickname
    deathDate
    favoriteFood
    favoriteActivity
    description
    photo
  }
  `
