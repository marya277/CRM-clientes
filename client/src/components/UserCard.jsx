
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function UserCard({ name, phoneNumber }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const closeMenu = () => {
    setAnchorEl(null);
    };

    return (
    <Card sx={{ maxWidth: 600, marginBottom:5 }}>
        <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography>{phoneNumber}</Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
            <IconButton>
            <VisibilityIcon />
            </IconButton>
            <IconButton>
            <EditIcon  style={{ color: 'green' }} />
            </IconButton>
            <IconButton>
            <DeleteIcon style={{ color: 'red' }} />
            </IconButton>
        </div>
        </CardContent>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
        <IconButton onClick={openMenu}>
            <MoreVertIcon />
        </IconButton>
        </div>
      {/* Menú desplegable */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
        <MenuItem onClick={closeMenu}>
            <IconButton>
            <PhoneIcon />
            </IconButton>
            Llamada telefónica
        </MenuItem>
        <MenuItem onClick={closeMenu}>
            <IconButton>
            <MessageIcon />
            </IconButton>
            Mensaje de texto
        </MenuItem>
        <MenuItem onClick={closeMenu}>
            <IconButton>
            <WhatsAppIcon />
            </IconButton>
            Llamada por WhatsApp
        </MenuItem>
        <MenuItem onClick={closeMenu}>
            <IconButton>
            <WhatsAppIcon />
            </IconButton>
            Mensaje por WhatsApp
        </MenuItem>
        </Menu>
    </Card>
    );
}

export default UserCard;

