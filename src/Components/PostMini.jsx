import React from 'react'

function PostMini({ content, title }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            backgroundColor: "yellow", 
            width: "250px", 
            justifyContent: "space-between", 
            alignItems: "flex-start",
            padding: "10px"
        }}>
            <div style={{}}>{content}</div>
            <div style={{}}>{title}</div>
        </div>
    )
}

export default PostMini