// Get reference to displat area and form
var form = document.getElementById("Resume-Form");
var resumeDisplayElement = document.getElementById("resume-display");
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevant page reload 
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contentsditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contentsditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contentsditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Eduation<h3>\n    <p contentsditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience<h3>\n    <p contentsditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills<h3>\n    <p contentsditable=\"true\">").concat(skills, "</p>\n\n    ");
    // Display the resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
