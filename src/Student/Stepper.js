import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const steps = [
  'Submit',
  'CP Verification',
  'Admin',
  'DataCenter'
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#0BFF23', // Adjust your desired green color here
    },
  },
});

function TrackingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="tracking-section rounded-lg px-4 py-4 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Tracking</h2>

        <div className="tracking-details flex justify-between items-center py-2 px-4 border-b border-gray-200">
          <span className="text-gray-600">Tracking ID : </span>
          <span className='font-bold'>84</span>
        </div>

        <div className="tracking-details flex justify-between items-center py-2 px-4">
          <span className="text-gray-600">Problem :</span>
          <span className='font-bold'>Name Correction</span>
        </div>

        <div className="tracking-details flex justify-between items-center py-2 px-4">
          <span className="text-gray-600">Status : </span>
          <span className='font-bold'> Form Submit</span>
        </div>

        </div>
        <ThemeProvider theme={theme}> 
          <div style={{  
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center',
            height: '40vh',  
            width: '900'
          }}> 
            <Box sx={{ width: '100%', maxWidth: 900 }}>  
              <Stepper activeStep={0} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </div>
        </ThemeProvider>
    </div>
  );
}

export default TrackingPage;
