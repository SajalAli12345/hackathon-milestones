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
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "\n    <p><b>Email:</b>").concat(email, "\n    <p><b>Phone:</b>").concat(phone, "\n\n    <h3>Eduation<h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience<h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills<h3>\n    <p>").concat(skills, "</p>\n\n    ");
    // Display the resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
