function submitForm() {
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const sfn = document.querySelector('.sfn');
    const sfnMissing = document.querySelector('.sfnMissing');
    const studentNameValue = document.getElementById('sfn').value;
    const studentLastNameValue = document.getElementById('sln').value;
    
    const sln = document.querySelector('.sln');
    const slnMissing = document.querySelector('.sfnMissing');

    const formValues = {};
    const requiredInputs = document.querySelectorAll('.required');
    const inputs = document.querySelectorAll('input');

    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
    });

    if (!studentNameValue) {
        alert("Fill out student's name");
        if (sfnMissing) {
            section1.scrollIntoView({ behavior: 'smooth' });
            return;
        }
        sfn.className = sfn.className.replace('sfn', 'sfnMissing');
        section1.scrollIntoView({ behavior: 'smooth' });
        return;
    }
    else if (studentNameValue) {
        if (sfnMissing) {
            sfnMissing.className = sfnMissing.className.replace('sfnMissing', 'sfn');
            return;
        }
    }
        
    if (!studentLastNameValue) {
        alert("Fill out student's last name");
        if (slnMissing) {
            section1.scrollIntoView({ behavior: 'smooth' });
            return;
        }
        section1.scrollIntoView({ behavior: 'smooth' });
        sln.className = sln.className.replace('sln', 'slnMissing');
        return;
    }
    else if (studentLastNameValue) {
        if (slnMissing) {
            slnMissing.className = sfnMissing.className.replace('slnMissing', 'sln');
            return;
        }
    }
    
    inputs.forEach(input => {
        if (input.type === "radio" && input.checked) {
            formValues[input.name] = input.value;  // Only adds the selected radio button
        } 
        else if (input.name && input.type !== "radio") {
            formValues[input.name] = input.value;
        }
    });
    console.log(formValues);
};
