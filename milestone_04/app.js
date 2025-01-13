var form = document.getElementById('resumeform');
var outputdisplay = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var fname = document.getElementById('fname').value;
    var DOB = document.getElementById('DOB').value;
    var marriedstatus = document.getElementById('marriedstatus').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var Completionyear = document.getElementById('completionyear').value;
    var companyname = document.getElementById('companyname').value;
    var designation = document.getElementById('designation').value;
    var Tenure = document.getElementById('Tenure').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n     <h2><b>Resume</b></h2>\n     <h3>Personal Information</h3>\n     <p><b>Name: </b> ".concat(name, "</p>\n     <p><b>Father Name:</b> ").concat(fname, "</p>\n     <p><b>DOB:</b> ").concat(DOB, "</p>\n     <p><b>Marital Status:</b> ").concat(marriedstatus, "</p>\n     <p><b>Email:</b> ").concat(email, "</p>\n     <p><b>Phone:</b> ").concat(phone, "</p>\n     <h3>Education</h3>\n     <p><b>Degree Title:</b> ").concat(degree, "</p>\n     <p><b>Institution:</b> ").concat(institution, "</p>\n     <p><b>Completion Year:</b>").concat(Completionyear, "</p>\n     <p><b>Job Place:</b> ").concat(companyname, "</p>\n     <p><b>Designation:</b> ").concat(designation, "</p>\n     <p><b>Tenure:</b> ").concat(Tenure, "</p>\n     <h3>Skills:</h3> ").concat(skills, "</p>\n     ");
    if (outputdisplay) {
        outputdisplay.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display is missing");
    }
});
