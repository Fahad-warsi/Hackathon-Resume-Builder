var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// Get form and preview elements
var form = document.getElementById("resumeForm");
var resumePage = document.getElementById("resumePage");
var resumePhoto = document.getElementById("resumePhoto");
var resumeName = document.getElementById("resumeName");
var resumeFname = document.getElementById("resumeFname");
var resumeDOB = document.getElementById("resumeDOB");
var resumemaritalstatus = document.getElementById("resumemaritalstatus");
var resumeEmail = document.getElementById("resumeEmail");
var resumePhone = document.getElementById("resumePhone");
var resumeEducation = document.getElementById("resumeEducation");
var resumeEducationCompletionyear = document.getElementById("resumeEducationCompletionyear");
var resumeDesignation = document.getElementById("resumeDesignation");
var resumeTenure = document.getElementById("resumeTenure");
var resumeWorkExperience = document.getElementById("resumeWorkExperience");
var resumeSkills = document.getElementById("resumeSkills");
var downloadPdfButton = document.getElementById('download-pdf');
var backButton = document.getElementById("backButton");
var editButton = document.getElementById("editButton");
var resumeContent = document.getElementById("resumeContent");
var shareLinkButton = document.getElementById("shareLinkButton");
// Handle form submission
form.addEventListener("submit", function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name, fname, DOB, maritalstatus, email, phone, degree, education, completionyear, workExperience, designation, tenure, skills, photoInput, photoFile, photoBase64, queryParams, uniqueUrl;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                event.preventDefault();
                name = document.getElementById("name").value;
                fname = document.getElementById("fname").value;
                DOB = document.getElementById("DOB").value;
                maritalstatus = document.getElementById("marriedstatus").value;
                email = document.getElementById("email").value;
                phone = document.getElementById("phone").value;
                degree = document.getElementById("degree").value;
                education = document.getElementById("education").value;
                completionyear = document.getElementById("completionyear").value;
                workExperience = document.getElementById("workExperience").value;
                designation = document.getElementById("designation").value;
                tenure = document.getElementById("tenure").value;
                skills = document.getElementById("skills").value;
                photoInput = document.getElementById("photo");
                photoFile = photoInput.files ? photoInput.files[0] : null;
                photoBase64 = '';
                if (!photoFile) return [3 /*break*/, 2];
                return [4 /*yield*/, fileToBase64(photoFile)];
            case 1:
                photoBase64 = _b.sent();
                // Store the photo in localStorage instead of passing it in the URL
                localStorage.setItem("resumePhoto", photoBase64);
                resumePhoto.src = photoBase64;
                _b.label = 2;
            case 2:
                // Populate the resume preview
                resumeName.textContent = name;
                resumeFname.textContent = "Father Name: ".concat(fname);
                resumeDOB.textContent = "Date of Birth: ".concat(DOB);
                resumemaritalstatus.textContent = "Marital Status: ".concat(maritalstatus);
                resumeEmail.textContent = "Email: ".concat(email);
                resumePhone.textContent = "Phone: ".concat(phone);
                resumeEducation.textContent = "".concat(degree, " from ").concat(education);
                resumeEducationCompletionyear.textContent = "Completion Year: ".concat(completionyear);
                resumeWorkExperience.textContent = "Job Place: ".concat(workExperience);
                resumeDesignation.textContent = "Designation: ".concat(designation);
                resumeTenure.textContent = "Tenure: ".concat(tenure);
                resumeSkills.textContent = skills;
                // Hide form and show resume page
                (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
                resumePage.classList.remove("hidden");
                queryParams = new URLSearchParams({
                    name: name,
                    fname: fname,
                    DOB: DOB,
                    maritalstatus: maritalstatus,
                    email: email,
                    phone: phone,
                    degree: degree,
                    education: education,
                    completionyear: completionyear,
                    workExperience: workExperience,
                    designation: designation,
                    tenure: tenure,
                    skills: skills,
                });
                uniqueUrl = "".concat(window.location.origin, "?").concat(queryParams.toString());
                shareLinkButton.addEventListener("click", function () {
                    navigator.clipboard.writeText(uniqueUrl);
                    alert('Shareable link copied to clipboard!');
                });
                window.history.replaceState(null, '', "?".concat(queryParams.toString()));
                return [2 /*return*/];
        }
    });
}); });
// Convert photo to Base64
function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function () { return resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
// Add back button functionality to go back to the form
backButton.addEventListener("click", function () {
    var _a;
    // Show the form again and hide the resume preview
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    resumePage.classList.add("hidden");
    // Optionally clear query parameters
    window.history.replaceState(null, '', '/');
});
// Add edit button functionality
editButton.addEventListener("click", function () {
    var _a;
    // Populate the form with current resume data for editing
    updateFormFromResume();
    // Show the form again for editing
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    resumePage.classList.add("hidden");
});
// Function to update the form fields with current resume data
function updateFormFromResume() {
    var _a, _b, _c, _d, _e, _f;
    var _g = ((_a = resumeEducation.textContent) === null || _a === void 0 ? void 0 : _a.split(" from ")) || [], degree = _g[0], education = _g[1];
    document.getElementById("name").value = resumeName.textContent || '';
    document.getElementById("fname").value = ((_b = resumeFname.textContent) === null || _b === void 0 ? void 0 : _b.replace('Father Name: ', '')) || '';
    document.getElementById("DOB").value = ((_c = resumeDOB.textContent) === null || _c === void 0 ? void 0 : _c.replace('Date of Birth: ', '')) || '';
    document.getElementById("email").value = ((_d = resumeEmail.textContent) === null || _d === void 0 ? void 0 : _d.replace('Email: ', '')) || '';
    document.getElementById("phone").value = ((_e = resumePhone.textContent) === null || _e === void 0 ? void 0 : _e.replace('Phone: ', '')) || '';
    document.getElementById("degree").value = degree || '';
    document.getElementById("education").value = education || '';
    document.getElementById("workExperience").value = ((_f = resumeWorkExperience.textContent) === null || _f === void 0 ? void 0 : _f.replace('Job Place: ', '')) || '';
    // (document.getElementById("workExperience") as HTMLInputElement).value = resumeWorkExperience.textContent || '';
    document.getElementById("skills").value = resumeSkills.textContent || '';
}
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    if (typeof html2pdf === 'undefined') {
        alert('Error: html2pdf library is not loaded.');
        return;
    }
    var resumeOptions = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    // Generate and download PDF
    html2pdf()
        .from(resumeContent)
        .set(resumeOptions)
        .save()
        .catch(function (error) {
        console.error('PDF generation error:', error);
    });
});
// Handle query parameters on page load
window.addEventListener('DOMContentLoaded', function () {
    var _a;
    var params = new URLSearchParams(window.location.search);
    var name = params.get('name') || '';
    var fname = params.get('fname') || '';
    var DOB = params.get('DOB') || '';
    var maritalstatus = params.get('maritalstatus') || '';
    var email = params.get('email') || '';
    var phone = params.get('phone') || '';
    var degree = params.get('degree') || '';
    var education = params.get('education') || '';
    var completionyear = params.get('completionyear') || '';
    var designation = params.get('designation') || '';
    var tenure = params.get('tenure') || '';
    var workExperience = params.get('workExperience') || '';
    var skills = params.get('skills') || '';
    if (name || email || fname || DOB || maritalstatus || phone || degree || education || completionyear || designation || tenure || workExperience || skills) {
        // Populate the resume preview if query params are present
        resumeName.textContent = name;
        resumeFname.textContent = "Father Name: ".concat(fname);
        resumeDOB.textContent = "Date of Birth: ".concat(DOB);
        resumemaritalstatus.textContent = "Marital Status: ".concat(maritalstatus);
        resumeEmail.textContent = "Email: ".concat(email);
        resumePhone.textContent = "Phone: ".concat(phone);
        resumeEducation.textContent = "".concat(degree, " from ").concat(education);
        resumeEducationCompletionyear.textContent = "Completion Year: ".concat(completionyear);
        resumeWorkExperience.textContent = "Job place: ".concat(workExperience);
        resumeDesignation.textContent = "Designation: ".concat(designation);
        resumeTenure.textContent = "Tenure: ".concat(tenure);
        resumeSkills.textContent = skills;
        // Retrieve photo from localStorage (if available)
        var savedPhoto = localStorage.getItem("resumePhoto");
        if (savedPhoto) {
            resumePhoto.src = savedPhoto;
        }
        // Hide form and show resume page
        (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
        resumePage.classList.remove("hidden");
    }
});
// CSS for ensuring the image is styled properly
resumePhoto.style.width = "150px"; // Adjust width as per your requirement
resumePhoto.style.height = "150px";
resumePhoto.style.objectFit = "cover";
resumePhoto.style.borderRadius = "50%"; // Circular image
resumePhoto.style.display = "block";
resumePhoto.style.margin = "0 auto";
