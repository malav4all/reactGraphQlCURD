import React, { useState } from 'react'
import {useMutation} from '@apollo/client'
import {Add_Post} from '../Graphql/Mutations'
const Form = () => {
    const [name,setName] = useState(null)
    const [email,setEmail] = useState(null)
    const [phone,setPhone] = useState(null)
    const [createPost,{error}] = useMutation(Add_Post)
    const addPost = ()=>{
        createPost({
            variables:{
               name: name,
                email: email,
                phone: phone,
            }
        })
        if(error){
            console.log(error)
        }
    }
    return (
        <div>
            <input  type='text' placeholder='Enter Name' onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <input  type='text' placeholder='Enter Email' onChange={(e)=>{
                setEmail(e.target.value)
            }} />
            <input  type='text' placeholder=' Enter Phone' onChange={(e)=>{
                setPhone(e.target.value)
            }}/>
            <button onClick={()=>{
                addPost()
                window.location.reload()
            }
                } type='submit'>Create Post</button>
        </div>
    )
}
export default Form
