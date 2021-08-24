import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    postContainer: {
        justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
        postContainer: {
            justifyContent: 'center',
        },
    }
}));
export default useStyles;