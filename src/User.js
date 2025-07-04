import React from 'react'

const User=(props)=>{
    const{data}=props
    return(
        <>
        <h1>User Component</h1>
        <h4>{data.name}</h4>
        <h4>{data.age}</h4>
        </>
    )
}
export default User;