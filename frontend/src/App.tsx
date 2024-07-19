// src/App.tsx
import React from 'react';
import Form from './cases/Form';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        background: {
            default: '#2f3495',
        },
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Form />
        </ThemeProvider>
    );
};

export default App;
