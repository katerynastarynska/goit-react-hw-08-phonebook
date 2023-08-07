import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate() {
  return (
    <Stack sx={{ width: '100%', color: 'grey.500', margin: '20px 0' }}>
      <LinearProgress color="inherit" />
    </Stack>
  );
}
