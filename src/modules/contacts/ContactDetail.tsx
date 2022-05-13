import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useContacts } from './hooks/useContacts';
import { useEffect } from 'react';

const ContactDetail = (props) => {
    const { contacts } = useContacts();
    const params = useParams();
    useEffect(() => {
        if (contacts) {

            const userToEdit = contacts.filter(contact => contact.id === params.contact)
            setUser({
                ...userToEdit
            })
        }

    }, [contacts])

    const [user, setUser] = useState({
        nickname: userToEdit.nickname,
        firstName: userToEdit.firstName,
        lastName: userToEdit.lastName
    });

    const onChange = ((ev) => {
        setUser({
            ...user,
            [ev.target.name]: ev.target.value
        })
    })

    const { nickname, lastName, firstName } = user;
    return (
        <div>
            Modify Contact
            <form action="">
                <div>
                    <label htmlFor="Nickname">Nickname</label>
                    <input name="nickname" onChange={onChange} type="text" value={nickname} />
                </div>
                <div>
                    <label htmlFor="a">FirstName</label>
                    <input name="firstName" onChange={onChange} type="text" value={lastName} />
                </div>
                <div>
                    <label htmlFor="LastName">LastName</label>
                    <input name="lastName" onChange={onChange} type="text" value={firstName} />
                </div>

            </form>
        </div>
    )
}

export default ContactDetail
