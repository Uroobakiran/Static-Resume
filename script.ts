
// Get the toggle button and skills section
const toggleSkillsBtn = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillsList = document.getElementById("skills") as HTMLElement;

// Set initial state for skills visibility
let skillsVisible = true;

// Toggle function to hide/show skills
toggleSkillsBtn.addEventListener("click", () => {
    skillsVisible = !skillsVisible;
    skillsList.style.display = skillsVisible ? "block" : "none";
    toggleSkillsBtn.textContent = skillsVisible ? "Hide Skills" : "Show Skills";
});
