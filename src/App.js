import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { ThemeProvider } from '@emotion/react';
import { createTheme, Paper } from '@mui/material';
import {Home} from './Pages/Home';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <Paper >
     
      <Home/>
      </Paper>
  
      </ThemeProvider>
    
    </div>
  );
}

export default App;
