import React, { useEffect, useState } from 'react'
import {useQuery,gql} from '@apollo/client'
import {useMutation} from '@apollo/client'
import {Delete_Post} from '../Graphql/Mutations'
import {FetchAllUser} from '../Graphql/Query'
const  User = ()=> {
    const {error,loading,data} = useQuery(FetchAllUser)
    const [deletePost,{err}] = useMutation(Delete_Post)
    const [post,setPost] = useState([])
    useEffect(()=>{
        if (data) {
            setPost(data.getAllPost)
        }
        // console.log(data)
    },[data])
    const removePost = (id) =>{
        deletePost({
            variables:{
                id:id
            }
        }).then((res)=>{
            console.log(res)
            if(res.data.deletePost.success){
                alert( `${res.data.deletePost.message}`
                )
            }else{
                alert('error')
            }
        })
        // if(err){
        //     console.log(err)
        // }
    }
    return (
        <div>
            {
                post.map((val)=>{
                    return (
                        <>
                            <h1>{val.name}</h1>
                            <button onClick={()=>{
                                removePost(val.id)
                                console.log(val.id)
                                // window.location.reload()
                            }}>Delete Post</button>
                        </>
                    )
                })
            }
        </div>
    )
}

export default User
