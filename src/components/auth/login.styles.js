export default styles => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': {
          width: '35ch',
        },
        marginTop: '100px'

      },
      login: {
        background: '#1b88c7',
        border: 0,
        borderRadius: 48,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '15px 133px',
        marginBottom: '30px',
        width: '42ch',
        marginTop: '24px'
      },
      form: {
          display: 'flex',
          justifyContent: 'center'
      },
      link: {
        color: '#1b88c7',
      },
      align: {
        textAlign: 'center'

      }


})