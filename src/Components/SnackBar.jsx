import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const MyComponent = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color='secondary' onClick={handleSnackbarOpen}>
        Snackbar
      </Button>
      <Snackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <MuiAlert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Class edited 
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default MyComponent;
