function submitForm() {
    const formValues = {};
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        if (input.name) {
            formValues[input.name] = input.value;
        }
    });
    console.log(formValues);
};
