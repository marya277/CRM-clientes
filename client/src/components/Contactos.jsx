import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import UserList from './UserList';
import FilterUser from './FilterUser';
import FormularioAgregar from './FormularioAgregar';
import EditUser from './EditUser'; 
import axios from 'axios';
import Swal from 'sweetalert2';

const Contactos = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleEdit = (contact) => {
    setSelectedContact(contact);
  };

  const handleUpdate = (updatedContact) => {
    axios.put(`http://localhost:3000/contactos/${updatedContact.id_contacto}`, updatedContact)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Contacto actualizado',
          showConfirmButton: false,
          timer: 1500,
        });
        setSelectedContact(null); 
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al actualizar el contacto',
          text: 'No se pudo actualizar el contacto. Inténtalo de nuevo más tarde.',
        });
        console.error('Error al actualizar el contacto:', error);
      });
  };

  const updateUserListAfterDelete = (deletedUserId) => {
    const updatedUsers = users.filter(user => user.id_contacto !== deletedUserId);
    setUsers(updatedUsers);
  };

  const handleDelete = (contactId) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el contacto permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/contactos/${contactId}`)
          .then((response) => {
            Swal.fire('¡Borrado!', 'El contacto ha sido eliminado.', 'success');
        
            updateUserListAfterDelete(contactId);
          })
          .catch((error) => {
            Swal.fire('¡Error!', 'Ocurrió un error al borrar el contacto.', 'error');
          });
      }
    });
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

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: '50%' }}>
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
            InputProps={{ startAdornment: <SearchIcon /> }}
            sx={{ flex: 1, marginRight: 2 }}
          />
          <Button onClick={handleShowForm}>Agregar</Button>
        </Box>
        {/* Componente de filtro */}
        <FilterUser />
      </Box>
      <Box sx={{ width: '50%', paddingLeft: '16px' }}>
        {/* Componente de lista de usuarios */}
        <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
        {selectedContact && (
          <EditUser
            selectedContact={selectedContact}
            onClose={() => setSelectedContact(null)}
            onUpdate={handleUpdate}
          />
        )}
      </Box>
      {showForm && (
        <FormularioAgregar onClose={handleCloseForm} />
      )}

      {/* Formulario de Edición */}
      {selectedContact && (
        <EditUser
          selectedContact={selectedContact}
          onClose={() => setSelectedContact(null)}
          onUpdate={handleUpdate}
        />
      )}
    </Box>
  );
};

export default Contactos;
