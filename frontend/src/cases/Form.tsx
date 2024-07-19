import React, { useState } from 'react';
import { Container, TextField, Button, MenuItem, Box, Typography } from '@mui/material';
import axios from 'axios';

const Form: React.FC = () => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState(''); // Nueva variable de estado para compañía
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Open');
  const [riskLevel, setRiskLevel] = useState('Low'); // Nueva variable de estado para nivel de riesgo

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
  };

  return (
    <Container maxWidth="sm">
      <Box 
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginTop: '40px',
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          backgroundColor: '#fff',
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{
            margin: 0,
            fontFamily: 'Epilogue, sans-serif',
            fontWeight: 700,
            lineHeight: '140%',
            fontSize: '1.125rem',
            marginBottom: '32px',
            color: '#0A0F48',
          }}
        >
          Crea tu caso de soporte
        </Typography>
        <TextField
          label="Nombre del caso"
          variant="outlined"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Compañía"
          variant="outlined"
          required
          value={company} // Usar la variable de estado company
          onChange={(e) => setCompany(e.target.value)} // Actualizar la variable de estado company
        />
        <TextField
          label="Descripción del caso"
          variant="outlined"
          required
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          select
          label="Estado"
          value={status}
          variant="outlined"
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value="Open">Abierto</MenuItem>
          <MenuItem value="Closed">Cerrado</MenuItem>
          <MenuItem value="In Progress">En Progreso</MenuItem>
        </TextField>
        <TextField
          select
          label="Nivel de Riesgo"
          value={riskLevel}
          variant="outlined"
          onChange={(e) => setRiskLevel(e.target.value)}
        >
          <MenuItem value="Low">Bajo</MenuItem>
          <MenuItem value="Medium">Medio</MenuItem>
          <MenuItem value="High">Alto</MenuItem>
        </TextField>
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          onClick={() => createCase({ title, company, description, status, riskLevel, creation_date: new Date()  })} // Pasar los datos del formulario a la función createCase
          sx={{
            backgroundColor: '#0C147B',
            '&:hover': { backgroundColor: '#080F5B' },
            borderRadius: '50px',
            textTransform: 'capitalize',
            color: '#fff'
          }}
        >
          Crear caso
        </Button>
            </Box>
          </Container>
        );
      };

      const createCase = async (data: any) => {
        try {
          const response = await axios.post('http://0.0.0.0:5000/cases', data);
          if (response.status === 200) {
            // El caso se creó exitosamente
          } else {
            // Hubo un error al crear el caso
          }
        } catch (error) {
          // Manejo de errores
        }
      };

export default Form;
