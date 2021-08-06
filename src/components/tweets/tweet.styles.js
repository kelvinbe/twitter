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
                width: '17px'
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
    }
})

export default styles