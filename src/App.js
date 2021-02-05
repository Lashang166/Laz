
import { createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline, ThemeProvider } from '@material-ui/core/'
import Routes from './routes';

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
