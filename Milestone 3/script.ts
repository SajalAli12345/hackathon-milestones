// Get reference to displat area and form
const form = document.getElementById("Resume-Form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

// Handle form submission

form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // prevant page reload 

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // generate the resume content dynamically

    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}
    <p><b>Email:</b>${email}
    <p><b>Phone:</b>${phone}

    <h3>Eduation<h3>
    <p>${education}</p>

    <h3>Experience<h3>
    <p>${experience}</p>

    <h3>Skills<h3>
    <p>${skills}</p>

    `;

    // Display the resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error('The resume display element is missing.');
    }
} )