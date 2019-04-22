const mobileRegister = dispatch => ({
    onFormSubmit: (event) => {
        console.log(event);
    },
    nameOnChangeHandler: (event) => {
        console.log(event.log);
    }
});

export default mobileRegister;