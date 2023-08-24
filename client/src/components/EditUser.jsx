// EditUser.jsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
} from '@mui/material';

const EditUser = ({ selectedContact, onClose, onUpdate }) => {
    const [updatedName, setUpdatedName] = useState(selectedContact.nombre);
    const [updatedApellido, setUpdatedApellido] = useState(selectedContact.apellido);
    const [updatedTelefono, setUpdatedTelefono] = useState(selectedContact.telefono);

    const handleUpdate = () => {
    const updatedContact = {
        ...selectedContact,
        nombre: updatedName,
        apellido: updatedApellido,
        telefono: updatedTelefono,
    };
    onUpdate(updatedContact);
    };

    return (
    <Dialog open={true} onClose={onClose}>
        <DialogTitle>Editar Contacto</DialogTitle>
        <DialogContent>
        <DialogContentText>
            Edite los datos del contacto:
        </DialogContentText>
        <TextField
            label="Nombre"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            fullWidth
            margin="normal"
        />
        <TextField
            label="Apellido"
            value={updatedApellido}
            onChange={(e) => setUpdatedApellido(e.target.value)}
            fullWidth
            margin="normal"
        />
        <TextField
            label="Teléfono"
            value={updatedTelefono}
            onChange={(e) => setUpdatedTelefono(e.target.value)}
            fullWidth
            margin="normal"
        />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleUpdate} color="primary">
            Actualizar
        </Button>
        <Button onClick={onClose} color="primary">
            Cancelar
        </Button>
        </DialogActions>
    </Dialog>
    );
};

export default EditUser;
