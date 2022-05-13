import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom';


const RecordData = styled.div`
    font-size: 14px;
`

const Contact = ({ user, id }) => {
    const { nickname, lastName, firstName } = user;
    console.log(id);
    return (
        <RecordData>
            <h1>{nickname}</h1>
            <p>{lastName}, {firstName}</p>
            <Link to={`/contacts/${id}`} >Modify</Link>
        </RecordData>
    )
}

export default Contact
