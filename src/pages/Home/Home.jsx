import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import MainFeaturedPost from './MainFeaturedPost';

const mainFeaturedPost = {
  title: 'Welcome to your phonebook!',
  description: 'Keep your contacts safe and sound with phonebook application.',
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
};

const defaultTheme = createTheme();

const Home = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="100vw">
        <MainFeaturedPost post={mainFeaturedPost} />
      </Container>
    </ThemeProvider>
  );
};
export default Home;
