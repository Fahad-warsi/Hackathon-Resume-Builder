const form = document.getElementById('resumeform') as HTMLFormElement
const outputdisplay = document.getElementById('resume-display') as HTMLDivElement

form.addEventListener('submit',(event: Event)=>{
    event.preventDefault();

     const name = (document.getElementById('name') as HTMLInputElement).value
     const fname = (document.getElementById('fname') as HTMLInputElement).value
     const DOB = (document.getElementById('DOB') as HTMLInputElement).value
     const marriedstatus = (document.getElementById('marriedstatus') as HTMLSelectElement).value
     const email = (document.getElementById('email') as HTMLInputElement).value
     const phone = (document.getElementById('phone') as HTMLInputElement).value
     const degree = (document.getElementById('degree') as HTMLInputElement).value
     const institution = (document.getElementById('institution') as HTMLInputElement).value
     const Completionyear = (document.getElementById('completionyear') as HTMLInputElement).value
     const companyname = (document.getElementById('companyname') as HTMLInputElement).value
     const designation = (document.getElementById('designation') as HTMLInputElement).value
     const Tenure = (document.getElementById('Tenure') as HTMLInputElement).value
     const skills = (document.getElementById('skills') as HTMLInputElement).value

     const resumeHTML = `
     <h2><b>Resume</b></h2>
     <h3>Personal Information</h3>
     <p><b>Name: </b> ${ name}</p>
     <p><b>Father Name:</b> ${fname}</p>
     <p><b>DOB:</b> ${DOB}</p>
     <p><b>Marital Status:</b> ${marriedstatus}</p>
     <p><b>Email:</b> ${email}</p>
     <p><b>Phone:</b> ${phone}</p>
     <h3>Education</h3>
     <p><b>Degree Title:</b> ${degree}</p>
     <p><b>Institution:</b> ${institution}</p>
     <p><b>Completion Year:</b>${Completionyear}</p>
     <p><b>Job Place:</b> ${companyname}</p>
     <p><b>Designation:</b> ${designation}</p>
     <p><b>Tenure:</b> ${Tenure}</p>
     <h3>Skills:</h3> ${skills}</p>
     `;

     if(outputdisplay){
        outputdisplay.innerHTML = resumeHTML;
     } else {
        console.error("The resume display is missing")
     }

    })