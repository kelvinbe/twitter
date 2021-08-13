const styles = theme => ({
    root:{
            '& .MuiListItem-root': {
                width: '0%',
                paddingTop: '0px',
                paddingBottom: '0px'

            },
            '& .MuiList-padding': {
                paddingTop: '0px',
                paddingBottom: '0px'
            },
            '& .MuiSvgIcon-root': {
                color: '#979b9d',
                width: '17px',
                "&:hover": {
                    color: 'rgb(11 176 255)'
                  }
            },
            '& .MuiCard-root': {
                maxWidth: '50%',
                maxHeight: 232,
                paddingLeft: '347px',
                [theme.breakpoints.down('sm')]: {
                    paddingLeft: 0,
                    maxWidth: '100%',
                     }
                }
    },
    fav: {
        "&:hover": {
            color: 'rgb(255 24 0) !important'
          }

    },
    send: {
        "&:hover": {
            color: 'lightgreen !important'
          }

    },
    filledFav: {
        color: 'red !important',
        "&:hover": {
            color: 'red !important'
          }
    }
})

export default styles