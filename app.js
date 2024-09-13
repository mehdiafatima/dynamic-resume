var form = document.getElementById("resume-form");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var educationInput = document.getElementById("education");
var skillsInput = document.getElementById("skills");
var workInput = document.getElementById("work");
var displayName = document.getElementById("display-name");
var displayEmail = document.getElementById("display-email");
var displayPhone = document.getElementById("display-phone");
var displayEducation = document.getElementById("display-education");
var displaySkills = document.getElementById("display-skills");
var displayWork = document.getElementById("display-work");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Update the live preview with the input values
    displayName.textContent = nameInput.value || "[Your Name]";
    displayEmail.textContent = emailInput.value || "[Your Email]";
    displayPhone.textContent = phoneInput.value || "[Your Phone]";
    displayEducation.textContent = educationInput.value || "[Your Education]";
    // For skills, split by comma and display them as a list
    displaySkills.innerHTML = "";
    var skillsArray = skillsInput.value.split(",");
    skillsArray.forEach(function (skill) {
        if (skill.trim()) {
            var li = document.createElement("li");
            li.textContent = skill.trim();
            displaySkills.appendChild(li);
        }
    });
    displayWork.textContent = workInput.value || "[Your Work Experience]";
});
