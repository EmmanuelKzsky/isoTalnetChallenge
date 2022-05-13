import React, { useEffect } from 'react';
import { Button, Stack, Toolbar, Typography } from '@mui/material';
import { useContacts } from './hooks/useContacts';
import Contact from '../contacts/Contact'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';



const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContactList = () => {
  const { contacts } = useContacts();

  console.log(contacts);

  return (
    <Stack>
      <Toolbar sx={{ justifyContent: 'space-between' }}>

        <Typography>Contacts {contacts?.length || 0}</Typography>
        <Container>
          {contacts && contacts.map((user, index) => {
            return (<Contact id={user.id} key={index} user={user.data} />)
          })}

        </Container>


      </Toolbar>
    </Stack>
  );
};
