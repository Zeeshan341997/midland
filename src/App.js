import './App.css';
import './styles/styles.css';
import './styles/animation.css';
import { AppHeader } from './components/AppHeader';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import { AppFooter, AppFooterBase } from './components/AppFooter';
import AppRoutes from './AppRoutes';

const theme = createTheme({
  typography: {
    fontFamily: '',
    fontWeightBold: '',
    fontWeightLight: '',
    fontWeightMedium: '',
    fontWeightRegular: ''
  },
  button: {
    fontFamily: '',
    fontWeightBold: '',
    fontWeightLight: '',
    fontWeightMedium: '',
    fontWeightRegular: ''
  }
});

function App(props) {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppHeader />

        <Box component="main" sx={{ mt: 11 }}>
          <AppRoutes />
        </Box>

        <AppFooterBase />
        <AppFooter />

      </div>
    </ThemeProvider>
  );
}

export default App;


