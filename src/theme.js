import { createMuiTheme } from '@material-ui/core';

export { default as useBoxStyle } from './box-theme';
export {
  useHomeStyle,
  useIconStyle,
  default as useLayoutStyle,
} from './layout-theme';
export { default as useModalStyle } from './modal-theme';
export {
  useButtonProgress,
  useHeaderMsgStyle,
  default as useNavBarStyle,
} from './navBar-theme';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#004d40',
      light: '#025f50',
      dark: '#00251a',
    },
    secondary: {
      main: '#870d4e',
      light: '#bb467a',
      dark: '#550026',
    },
    important: {
      main: '#0d5055',
      light: '#007b70',
    },
    error: {
      main: '#880e4f',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Oxygen',
      'Roboto',
      '"Segoe UI"',
      'Ubuntu',
      'Cantarell',
      '"Fira Sans"',
    ].join(','),
  },
});
