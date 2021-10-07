import React, { useEffect, useState } from 'react'
import {useQuery,gql} from '@apollo/client'
import {useMutation} from '@apollo/client'
import {Delete_Post} from '../Graphql/Mutations'
import {FetchAllUser} from '../Graphql/Query'
import * as ReactBootstrap from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import cellEditFactory from 'react-bootstrap-table2-editor';
const  User = ()=> {
    const {error,loading,data} = useQuery(FetchAllUser)
    const [deletePost,{err}] = useMutation(Delete_Post)
    const [post,setPost] = useState([])
    useEffect(()=>{
        if (data) {
            setPost(data.getAllPost)
        }
        console.log(data)
    },[data])
    const removePost = (id) =>{
        deletePost({
            variables:{
                id:id
            }
        }).then((res)=>{
            // console.log(res)
            if(res.data.deletePost.success){
                alert( `${res.data.deletePost.message}`,
                // window.location.reload()
                )
            }else{
                alert('error')
            }
        })
        // if(err){
        //     console.log(err)
        // }
    }
    const formatterButton = (id) =>{
        return(
            <>
                <button onClick={()=>{
                    console.log()
                    removePost(id)
                }}>Delete</button>
            </>
        )
    }
    const columns = [
        {
            dataField: "id",
            text: "Id",
            hidden: true,
            csvExport: false,
        },
        {
            dataField:"name",
            text:"Name",
            headerStyle: { minWidth: "200px" },
        },
        {
            dataField:"email",
            text:"Email"
        },
        {
            dataField: "operation",
            text: "Action",
            formatter:(id)=>formatterButton(id)
        },
    ]
    return (
        <div>
            <BootstrapTable
              keyField="id"
              data={post}
              columns={columns}
              pagination={paginationFactory()}
              noDataIndication="Table is Empty"
              cellEdit={ cellEditFactory({ mode: 'dbclick',blurToSave: true }) }
            />
        </div>
    )
}

export default User
