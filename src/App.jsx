import CssBaseline from "@mui/material/CssBaseline";
import './App.css';
import TodoList from './TodoList';

import { useMemo } from "react";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>Todos</h1>
      <TodoList />
    </ThemeProvider>
  );
}

export default App;




