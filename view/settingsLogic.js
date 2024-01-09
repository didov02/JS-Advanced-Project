var currentSectionId;

function showSection(sectionId) {
    var sections = document.querySelectorAll('.container section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    var selectedSection = document.querySelector('.' + sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        currentSectionId = sectionId;
    }
}

function setVariables(v1, s1) {
    v1 = document.getElementById(s1).value;
    return v1;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('confirmButton').addEventListener('click', function(event) {
        event.preventDefault();

        var firstInput;
        var secondInput;

        //more logic to be added
        if (currentSectionId === "change-username-section") {
            firstInput = setVariables(firstInput, 'username');
            secondInput = setVariables(secondInput, 'confirm-username');
        } else if (currentSectionId === "change-password-section") {
            firstInput = setVariables(firstInput, 'password');
            secondInput = setVariables(secondInput, 'confirm-password');
        } else if (currentSectionId === "change-email-section") {
            firstInput = setVariables(firstInput, 'email');
            secondInput = setVariables(secondInput, 'confirm-email');
        }

        if (firstInput.trim() === '' || secondInput.trim() === '') {
            alert('Please enter all parameters.');
        } else {
            showSection('ending');
            setTimeout(function() {
                window.location.href = '../html/main.html';
            }, 3000);
           
        }
    });
});