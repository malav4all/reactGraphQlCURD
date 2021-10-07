import {gql} from '@apollo/client'

export const FetchAllUser = gql `
query{
    getAllPost {
      id
      name
      email
      phone
    }
  }
`