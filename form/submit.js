function submitForm() {
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');

    const sfn = document.querySelector('.sfn');
    const sfnMissing = document.querySelector('.sfnMissing');
    const studentNameValue = document.getElementById('sfn').value;
    
    const sln = document.querySelector('.sln');
    const slnMissing = document.querySelector('.sfnMissing');
    const studentLastNameValue = document.getElementById('sln').value;

    const formValues = {};
    const requiredFormValues = {};

    const requiredInputClass = document.querySelectorAll('.inputRequired');
    const inputs = document.querySelectorAll('input');

    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
    });

    requiredInputClass.forEach(input => {
        requiredFormValues[input.name] = input.value;
    });
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
