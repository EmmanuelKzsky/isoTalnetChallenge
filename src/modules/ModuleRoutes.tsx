import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './common';
import ContactDetail from './contacts/ContactDetail';
import { ContactList } from './contacts/ContactList';
import { Layout } from './Layout';

export const ModuleRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />} path='/'>
        <Route element={<ContactList />} index ></Route>
        <Route element={<ContactDetail />} path='/contacts/:contact' />
        <Route element={<NotFound />} path='**' />
      </Route>
    </Routes>
  );
};
