import { makeStyles } from '@material-ui/core';

export default function useLayoutStyle() {
  return makeStyles(() => ({
    app: {
      position: 'absolute',
      width: '100vw',
      height: '100%',
      color: 'wheat',
    },
    title: {
      padding: '95px 0 0 0',
      color: 'rgb(23, 185, 185)',
      fontSize: '4.5em',
      textAlign: 'center',
    },
    title_sub0: {
      color: 'rgb(21, 179, 131)',
    },
    main: {
      position: 'relative',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      paddingBlockStart: '70px',
    },
  }));
}

export function useHomeStyle() {
  return makeStyles((theme) => ({
    main_section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      overflowY: 'auto',
      padding: '20px',
      backgroundColor: 'blue',
      backgroundImage: `linear-gradient(
      180deg,
      rgb(243, 250, 248) 50%,
      rgb(233, 255, 250) 60%
      )`,
    },
    justifyCenter: { justifyContent: 'center' },
    translation: {
      display: 'flex',
      flexFlow: 'row wrap',
      gap: '5px',
      width: '100%',
      height: '100%',
      padding: '0 10px',
      alignItems: 'center',
      justifyContent: 'center',
    },

    translation_bloc: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      flex: '1 1 400px',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'center',
      minWidth: '250px',
      boxShadow: `1px 1px 5px #010504`,
    },

    root_formControl: {
      'position': 'relative',
      'display': 'flex',
      'flexDirection': 'row',
      'alignItems': 'center',
      'padding': '0 0 0 10px',
      'color': 'rgb(249, 255, 227)',
      'fontSize': '1.2em',
      'backgroundColor': theme.palette.important.main,
      '& > label + .MuiInput-formControl ': {
        margin: 0,
      },
      '& > *': { color: 'white' },
    },

    root_formLabel: {
      color: 'inherit !important',
      paddingRight: 5,
      fontSize: '1em',
    },

    textAreaField: {
      'display': 'block',
      'width': '100%',
      'height': '200px',
      'padding': 5,
      'border': '1px solid gray',
      'borderTop': `1px solid ${theme.palette.important.main}`,
      'color': 'black',
      'fontSize': '2em',
      'fontFamily': 'ubuntu',
      'backgroundColor': 'white',
      'resize': 'none',
      'outline': 'none',

      '&:not($tr_output):focus': {
        border: `1px solid ${theme.palette.important.main}`,
        boxShadow: `1px 1px 9px #02011a`,
        borderTop: `1px solid ${theme.palette.important.main}`,
      },
    },

    tr_output: {
      outline: 'none',
      cursor: 'default',
      backgroundColor: '#fffefe',
      boxShadow: 'inset 1px 1px 9px #d5d5d5',
    },
  }));
}

export function useIconStyle() {
  return makeStyles({
    expandMore: {
      color: 'white',
      right: 0,
      fontWeight: 'bold',
      position: 'absolute',
      userSelect: 'none',
      pointerEvents: 'none',
    },
  });
}
