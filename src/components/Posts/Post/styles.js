import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    media: {
        height: '100px',
        width: '300px',
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
        margin: '20px 0',
        width: '300px',
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    title: {
        padding: '0 16px',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    deleteBtn: {
        color: 'red',
    },
    tag:{
        backgroundColor: 'green',
        color: 'white',
        padding: '7px',
        borderRadius: '5px',
        margin: '0 5px 0 0'
    },
    [theme.breakpoints.down('sm')]: {
        card: {
            justifyContent: 'center',
        },
        media: {
            width: '100%',
        }
      }
}));
export default useStyles;
