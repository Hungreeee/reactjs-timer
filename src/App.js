import React from 'react';
import './App.css';
import MainClock from './components/mainClock';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <MainClock />
      </ThemeProvider>
    </div>
  );
}

export default App;
