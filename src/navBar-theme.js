import { makeStyles } from '@material-ui/core';

export default function useNavBarStyle() {
  return makeStyles((theme) => ({
    site_main_header: {
      position: 'fixed',
      right: 0,
      left: 0,
      zIndex: 101,
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      padding: 0,
    },
    nav_ul: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100vw',
      margin: 0,
      padding: 0,
      fontSize: '1.08em',
      fontWeight: 'bold',
      listStyle: 'none',
      backgroundColor: theme.palette.primary.main,
    },

    nav_links: {
      'display': 'flex',
      'height': 'fit-content',
      'padding': '14px 10px 5px',
      'borderBottom': '5px solid transparent',
      'color': 'antiquewhite',
      'backgroundColor': theme.palette.primary.light,
      '&:hover, &:focus': {
        textTecoration: 'none',
        borderBottom: '5px solid goldenrod',
        backgroundColor: theme.palette.primary.dark,
      },

      '&:active': {
        backgroundImage: `linear-gradient(
        to right,
        rgb(6, 102, 110),
        rgb(5, 78, 84),
        rgb(5, 64, 70)
        )`,
      },
    },
    links_text: {
      position: 'relative',
      top: '2px',
      paddingLeft: '2px',
    },

    nav_list_item: {
      display: 'block',
      minWidth: '90px',
    },
  }));
}

export function useHeaderMsgStyle() {
  return makeStyles({
    'under_construction': {
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      'width': '100vw',
      'color': 'rgb(0, 32, 41)',
      'backgroundImage': `linear-gradient(
    to left,
    rgb(248, 91, 91) 10%,
    rgb(238, 219, 71) 50%,
    rgb(253, 100, 100) 90%
  )`,
      '&::before': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px 5px',
        color: 'rgb(28, 28, 18)',
        fontFamily: "'Font Awesome 5 Pro', sans-serif",
        animation: '$slidein 2s ease-in-out alternate both infinite',
        content: "'\\e037'",
      },
    },
    '@keyframes slidein': {
      from: {
        transform: 'scaleX(1.2)',
      },
      to: {
        transform: 'scaleX(-1.3)',
      },
    },
  });
}

export function useButtonProgress() {
  return makeStyles((theme) => ({
    label: { textTransform: 'capitalize' },
    root: {
      'padding': '1px 5px',
      'border': '1px solid gray',
      'color': 'rgb(248, 250, 248)',
      'fontWeight': 'normal',
      'backgroundImage': `linear-gradient(
      to bottom,
      ${theme.palette.primary.main} 0%,
      ${theme.palette.important.main} 50%,
      ${theme.palette.primary.main} 90%
      )`,

      '&:hover': {
        backgroundImage: `linear-gradient(
      to bottom,
      ${theme.palette.important.light} 0%,
      ${theme.palette.important.main} 50%,
      ${theme.palette.important.light} 90%
      )`,
      },
    },
  }));
}
