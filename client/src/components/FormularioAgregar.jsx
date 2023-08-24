import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Swal from "sweetalert2";
import axios from "axios";

function FormularioAgregar({ onClose }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha_nacimiento, setFechaNacimiento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [tipo_contacto, setTipoContacto] = useState("cliente");
  const [origen, setOrigen] = useState("landing page");

  const handleClose = () => {
    onClose();
    resetFields();
  };

  const resetFields = () => {
    setNombre("");
    setApellido("");
    setEmail("");
    setTelefono("");
    setFechaNacimiento("");
    setDireccion("");
    setTipoContacto("cliente");
    setOrigen("landing page");
  };

  const handleAgregar = () => {
    if (
      nombre &&
      apellido &&
      email &&
      telefono &&
      fecha_nacimiento &&
      direccion &&
      tipo_contacto &&
      origen
    ) {
      axios
        .post("http://localhost:3000/contactos", {
          nombre,
          apellido,
          email,
          telefono,
          fecha_nacimiento,
          direccion,
          tipo_contacto,
          origen,
        })
        .then((response) => {
          Swal.fire("¡Éxito!", "Usuario creado con éxito", "success");
          handleClose();
        })
        .catch((error) => {
          Swal.fire("¡Error!", "Ocurrió un error al crear el usuario", "error");
        });
    } else {
      Swal.fire("¡Error!", "Por favor completa todos los campos", "error");
    }
  };
  return (
    <Dialog open onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Agregar nuevo contacto</DialogTitle>
      <DialogContent dividers>
        <TextField
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          fullWidth
        />
        <TextField
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          fullWidth
        />
        <TextField
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          fullWidth
        />
        <TextField
          placeholder="Fecha de Nacimiento"
          type="date"
          value={fecha_nacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
          fullWidth
        />
        <TextField
          placeholder="Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          fullWidth
        />
        <TextField
          select
          value={tipo_contacto}
          onChange={(e) => setTipoContacto(e.target.value)}
          fullWidth
        >
          <MenuItem value="cliente">Cliente</MenuItem>
          <MenuItem value="otro">Otro</MenuItem>
        </TextField>
        <TextField
          select
          value={origen}
          onChange={(e) => setOrigen(e.target.value)}
          fullWidth
        >
          <MenuItem value="landing page">Landing Page</MenuItem>
          <MenuItem value="email">Email</MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleAgregar} color="primary">
          Agregar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormularioAgregar;