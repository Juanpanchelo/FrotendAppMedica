import React from 'react';
import { Toolbar, Typography, CssBaseline,  Paper, Container } from '@mui/material';



function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
    

      {/* Contenido del dashboard */}
      <main style={{ flexGrow: 1, padding: '24px' }}>
        <Toolbar />
        <Container maxWidth="lg">
         
            {/* Tarjeta: Número de pacientes */}
           
              <Paper style={{ padding: '16px', display: 'flex', flexDirection: 'column', height: 140 }}>
                <Typography variant="h6">Pacientes</Typography>
                <Typography variant="h4">120</Typography>
              </Paper>
              <br></br>

            

            {/* Tarjeta: Citas programadas */}
            
              <Paper style={{ padding: '16px', display: 'flex', flexDirection: 'column', height: 140 }}>
                <Typography variant="h6">Citas Programadas</Typography>
                <Typography variant="h4">120</Typography>
              </Paper>
              <br></br>

           

            {/* Tarjeta: Médicos */}
           
              <Paper style={{ padding: '16px', display: 'flex', flexDirection: 'column', height: 140 }}>
                <Typography variant="h6">Médicos</Typography>
                <Typography variant="h4">25</Typography>
              </Paper>
              <br></br>
            

            {/* Tarjeta: Reportes */}
           
              <Paper style={{ padding: '16px', display: 'flex', flexDirection: 'column', height: 140 }}>
                <Typography variant="h6">Reportes</Typography>
                <Typography variant="h4">45</Typography>
              </Paper>
              <br></br>


              <Paper style={{ padding: '16px', display: 'flex', flexDirection: 'column', height: 140 }}>
                <Typography variant="h6">Asociados</Typography>
                <Typography variant="h4">20</Typography>
              </Paper>
        
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;

