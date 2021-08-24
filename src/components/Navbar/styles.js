import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    app: {
      flexGrow: 1,
      fontFamily: 'Poppins'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appbar: {
      backgroundColor: 'transparent'
    },
    addBtn: {
      backgroundColor: 'green',
      '& hover': {
        backgroundColor: 'red'
      }
    }
  }));

export default useStyles;