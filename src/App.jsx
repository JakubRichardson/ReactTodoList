import './App.css';
import TodoList from './TodoList';
import { useMemo } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
      <TodoList />
    </ThemeProvider>
  );
}

export default App;




