import { makeStyles } from '@material-ui/core';

export default makeStyles({
  rightbox_holder: {
    display: 'flex',
    flexDirection: 'column',
    alignIitems: 'flex-start',
    height: '100%',
  },
  rightbox_container: {
    position: 'relative',
    display: 'flex',
    width: '70%',
    margin: 0,
    overflowY: 'auto',
    fontFamily: `'PT Sans', sans-serif`,
  },
  rightbox: {
    display: 'inline-block',
    margin: '2.5em 0 0',
  },
  rightbox_item: {
    'position': 'relative',
    'minHeight': '50px',
    'marginInlineStart': '5em',
    'padding': '0 0 50px 30px',
    'borderLeft': '1px dashed #fff',
    'listStyle': 'none',
    '&:last-child': {
      borderLeft: 0,
    },
    '&::before': {
      position: 'absolute',
      top: '-5px',
      left: '-11px',
      width: '20px',
      height: '20px',
      border: '8px solid rgba(255, 255, 255, 1)',
      borderRadius: '500%',
      background: '#50d890',
      transition: `all 500ms ease-in-out`,
      content: `' '`,
    },
    '&:hover::before, &:focus::before': {
      borderColor: '#232931',
      transition: 'all 1000ms ease-in-out',
    },
  },
  timestamp: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100px',
    color: '#50d890',
    fontSize: '12px',
  },

  item_title: {
    color: '#fff',
  },
});
