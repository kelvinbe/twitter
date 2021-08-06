// eslint-disable-next-line import/no-anonymous-default-export
export default styles => ((theme)=>  ({
    root: {
            '& .MuiBackdrop-root':{
                backgroundColor: 'white !important'
            },
            '& .MuiCard-root': {
                width: '50%',
                paddingLeft: '25%',
            }
    },
    errorStyles: {
        width: 18,
        paddingLeft: 245
    }
}))









