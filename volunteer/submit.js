async function submitForm(event) {
    event.preventDefault(); // prevent page refresh

    // set formValues as an empty object
    const formValues = {};

    // get all required inputs
    const requiredInputs = document.querySelectorAll('input[required], textarea[required]');

    // get all inputs and textareas
    const inputs = document.querySelectorAll('input');
    const textareas = document.querySelectorAll('textarea');

    // set initial state of required emptyFields as false
    let emptyFields = false;

    // validate required inputs
    requiredInputs.forEach(input => {
        const label = document.querySelector(`label[for="${input.id}"]`);

        if (input.value.trim() === '') {
            if (label) label.classList.add('missing');
            emptyFields = true;
        } else {
            if (label) label.classList.remove('missing');
        }
    });

    // if emptyFields is true, send alert and stop here
    if (emptyFields) {
        alert("Please fill in all required fields.");
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    // collect input values
    inputs.forEach(input => {
        if (input.type === "radio") {
            if (input.checked) {
                formValues[input.name] = input.value;
            }
        } else if (input.type === "checkbox") {
            if (!formValues[input.name]) formValues[input.name] = [];
            if (input.checked) {
                formValues[input.name].push(input.value);
            }
        } else {
            formValues[input.name] = input.value;
        }
    });

    // collect textarea values
    textareas.forEach(textarea => {
        formValues[textarea.name] = textarea.value;
    });

    try {
        const response = await fetch('https://bna-backend-d057bbf0cede.herokuapp.com/submit-volunteer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formValues)
        });

        if (response.ok) {
            window.location.href = '../success/';
        } else {
            alert('An error occurred while sending the email.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending the email.');
    }
}

// Attach event listener to the form
document.querySelector('form').addEventListener('submit', submitForm);
