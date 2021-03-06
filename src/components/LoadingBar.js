import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

export default function LoadingBar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <LinearProgress />
    </Box>
  );
}