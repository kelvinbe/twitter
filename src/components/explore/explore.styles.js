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
                paddingLeft: '347px',
                [theme.breakpoints.down('sm')]: {
                    paddingLeft: 0,
                    maxWidth: '100%',
                     }
                },
            '& .MuiTypography-h5': {
                fontSize: '12px',
                color: 'rgb(83, 100, 113)'
            }
    },
    title: {
        textAlign: 'center'
    },
    bottom: {
        fontSize: '12px',
        color: 'rgb(83, 100, 113)'
    }
})

export default styles