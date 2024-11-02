// const sfnID = document.getElementById('sfn');
// const sfnMissing = document.querySelector('.sfnMissing');
//
// // window.addEventListener("click", () => {
// //     console.log(sfnID);
// // })
//
// if (sfnMissing) {
// window.addEventListener("click", () => {
//     console.log(sfnID);
// })
//     sfnID.addEventListener('keydown', function() {
//         console.log('yo');
//         sfnMissing.className = sfnMissing.className.replace('sfnMissing', 'sfn');
//     });
// }
    check1();
    function check1() {
        if (!studentNameValue) {
            sendAlert();
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
            }
        }
        check2();
    };
        
    function check2() {
        if (!studentLastNameValue) {
            sendAlert();
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
            }
        }
    }

   function sendAlert() {
        alert("Empty spaces");
    }    
