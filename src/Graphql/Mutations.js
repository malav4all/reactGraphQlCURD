import {gql} from '@apollo/client';

export const Add_Post = gql `
  mutation createPost($name:String,$email:String,$phone:String){
    createPost(post:{name:$name,email:$email,phone:$phone}){
      id
      name
      email
      phone
    }
  }
`

export const Delete_Post = gql `
  mutation deletePost($id:String){
    deletePost(id:$id){
      success
      message
    }
  }
`