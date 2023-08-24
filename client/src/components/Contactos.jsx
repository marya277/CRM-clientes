import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import UserList from './UserList';
import FilterUser from './FilterUser';
import FormularioAgregar from './FormularioAgregar';
import axios from 'axios';

const Contactos = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    axios.get('http://localhost:3000/contactos')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener usuarios:', error);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width:600px)': {
          flexDirection: 'row',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          '@media (min-width:600px)': {
            width: '50%',
          },
        }}
      >
        {/* Componente de búsqueda */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 16,
            borderRadius: 8,
            padding: 8,
          }}
        >
          <TextField
            id="search-bar"
            className="text"
            value={searchQuery}
            onChange={handleSearch}
            variant="outlined"
            size="small"
            placeholder="Buscar"
            InputProps={{ startAdornment: <SearchIcon /> }}
            sx={{ flex: 1, marginRight: 2 }}
          />
          <Button onClick={handleShowForm}>Agregar</Button>
        </Box>
        {/* Componente de filtro */}
        {searchQuery && <FilterUser filteredUsers={filteredUsers} />}
      </Box>

      <Box
        sx={{
          width: '100%',
          paddingLeft: '16px',
          '@media (min-width:600px)': {
            width: '50%',
          },
        }}
      >
        {/* Componente de lista de usuarios */}
        <UserList users={filteredUsers} />
      </Box>

      {/* Formulario Agregar */}
      {showForm && (
        <FormularioAgregar onClose={handleCloseForm} />
      )}
    </Box>
  );
};

export default Contactos;
