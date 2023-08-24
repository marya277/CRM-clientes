import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const backgroundImageStyle = {
  backgroundImage: 'url("https://img.freepik.com/vector-gratis/ilustracion-concepto-lealtad-marca_114360-12422.jpg?w=740&t=st=1692886400~exp=1692887000~hmac=3b7c11d437f368fda707945d0f6b7e90bb356ef8edfa6f4808c36c2de48fddae")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '80vh', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  textAlign: 'center',
};

const textStyle = {
  fontWeight: 'bold',
};

const HomeContent = () => {
  return (
    <Box sx={backgroundImageStyle}>
      <Typography variant="h4" component="h1" color="primary" sx={textStyle}>
        Bienvenido a CRM Clientes
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </Typography>
    </Box>
  );
};

export default HomeContent;
