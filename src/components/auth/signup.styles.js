import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  export default useStyles



  const Title = withStyles(theme => ({
    root: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '23px',
      letterSpacing: '0em',
      color: theme.palette.primary.main,
      textAlign: 'center',
    },
  }))(Typography)


  const ExclusionPaper = withStyles({
    root: {
      boxShadow: '0px 4px 4px -3px rgba(0, 0, 0, 0.12)',
      width: 500,
      padding: '19px 15px',
    },
  })(Paper)