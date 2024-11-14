async function submitForm() {
    const section1 = document.getElementById('section1');

    const formValues = {};
    const requiredFormValues = {};

    const requiredInputClass = document.querySelectorAll('.inputRequired');
    const inputs = document.querySelectorAll('input');

    // window.addEventListener('beforeunload', function (e) {
    //     e.preventDefault();
    // });

    let emptyFields = false;
    
    requiredInputClass.forEach(input => {
        const label = document.querySelector(`label[for="${input.id}"]`);
        
        if (input.value.trim() === '') {
            label.classList.add('missing')
            emptyFields = true;
            section1.scrollIntoView({ behavior: 'smooth' });
        }
        else { 
            label.classList.remove('missing')
        };
    });
    if (emptyFields) {
        alert("Please fill in all required fields.");
        return;
    };
        
    console.log("Required Form Values:", requiredFormValues);

    inputs.forEach(input => {
        if (input.type === "radio" && input.checked) {
            formValues[input.name] = input.value;  
        } 
        else if (input.name && input.type !== "radio") {
            formValues[input.name] = input.value;
        }
    });
    console.log("All Form Values:", formValues);

    try {
        const response = await fetch('https://bna-backend-d057bbf0cede.herokuapp.com/submit-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formValues)
            });
        if (response.ok) {
            window.location.href = '../success/';
        }
        else {
            alert('An error occurred while sending the email.');
        } 
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending the email');
    }
};
