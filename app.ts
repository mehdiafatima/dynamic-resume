const form = document.getElementById("resume-form") as HTMLFormElement;

const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLInputElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;
const workInput = document.getElementById("work") as HTMLTextAreaElement;
const displayName = document.getElementById("display-name") as HTMLElement;
const displayEmail = document.getElementById("display-email") as HTMLElement;
const displayPhone = document.getElementById("display-phone") as HTMLElement;
const displayEducation = document.getElementById("display-education") as HTMLElement;
const displaySkills = document.getElementById("display-skills") as HTMLElement;
const displayWork = document.getElementById("display-work") as HTMLElement;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Update the live preview with the input values
  displayName.textContent = nameInput.value || "[Your Name]";
  displayEmail.textContent = emailInput.value || "[Your Email]";
  displayPhone.textContent = phoneInput.value || "[Your Phone]";
  displayEducation.textContent = educationInput.value || "[Your Education]";
  
  // For skills, split by comma and display them as a list
  displaySkills.innerHTML = "";
  const skillsArray = skillsInput.value.split(",");
  skillsArray.forEach(skill => {
      if (skill.trim()) {
          const li = document.createElement("li");
          li.textContent = skill.trim();
          displaySkills.appendChild(li);
      }
  });
  displayWork.textContent = workInput.value || "[Your Work Experience]";
});
