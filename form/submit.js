document.getElementById('sdob').addEventListener('input', function(event) {
    let input = event.target.value;
    
    input = input.replace(/[^0-9\/]/g, '');

    if (input.length > 2 && input[2] !== '/') {
        input = input.slice(0, 2) + '/' + input.slice(2);
    }
    if (input.length > 5 && input[5] !== '/') {
        input = input.slice(0, 5) + '/' + input.slice(5);
    }

    if (input.length > 10) {
        input = input.slice(0, 10);
    }

    event.target.value = input;
});

function submitForm() {
    const section1 = document.getElementById('section1');

    const formValues = {};
    const requiredFormValues = {};

    const requiredInputClass = document.querySelectorAll('.inputRequired');
    const inputs = document.querySelectorAll('input');

    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
    });

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
    }
        
    console.log("Required Form Values:", requiredFormValues);

    inputs.forEach(input => {
        if (input.type === "radio" && input.checked) {
            formValues[input.name] = input.value;  // Only adds the selected radio button
        } 
        else if (input.name && input.type !== "radio") {
            formValues[input.name] = input.value;
        }
    });
    console.log("All Form Values:", formValues);
};
