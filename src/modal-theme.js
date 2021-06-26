import { makeStyles } from '@material-ui/core';

export default makeStyles({
  modal_container: {
    position: 'fixed',
    zIndex: '1001',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(1, 17, 11, 0.741)',
  },
  modal: {
    position: 'relative',
    display: 'block',
    width: '90%',
    maxWidth: '600px',
    height: '400px',
    maxHeight: '600px',
    borderRadius: '5px',
    backgroundColor: '#232931',
    boxShadow: '2px 5px 20px rgba(119, 119, 119, 0.5)',
  },
  close_btn_container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '5px',
    borderRadius: '5px 5px 0 0',
    backgroundColor: 'rgb(20, 51, 61)',
  },
  close_btn: {
    'display': 'flex',
    'alignIitems': 'center',
    'border': 'none',
    'color': 'rgb(32, 161, 170)',
    'fontSize': '1.3em',
    'backgroundColor': 'inherit',
    'cursor': 'pointer',

    '&:hover, &:focus': {
      color: 'rgb(247, 39, 78)',
    },
  },
  modal_title: {
    padding: '10px 0 0 20px',
  },

  hidden: {
    display: 'none',
  },
});
