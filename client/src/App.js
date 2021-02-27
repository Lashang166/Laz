
import Routes from './routes';
import {BrowserRouter as Router } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@material-ui/core/'
import { createMuiTheme, StylesProvider  } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f58b5e',
      main: '#f36e36',
      dark: '#aa4d25',
      contrastText: '#fff',
    },
    secondary: {
      light: '#3f428a',
      main: '#0f136d',
      dark: '#0a0d4c',
      contrastText: '#fff',
    },
    background: {
      default: "#eff0f5"
    }
  },
});





function App() {
  return (
    <Router>
      <StylesProvider injectFirst >
        <ThemeProvider theme={theme}>
          <div className="App">
              <Routes />
          </div>
          <CssBaseline />
        </ThemeProvider>
      </StylesProvider>
    </Router>
  );
}

export default App;
