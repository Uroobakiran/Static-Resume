// Get the toggle button and skills section
 toggleSkillsBtn = document.getElementById("toggle-skills");
 skillsList = document.getElementById("skills");
// Set initial state for skills visibility
 skillsVisible = true;
// Toggle function to hide/show skills
toggleSkillsBtn.addEventListener("click", function () {
    skillsVisible = !skillsVisible;
    skillsList.style.display = skillsVisible ? "block" : "none";
    toggleSkillsBtn.textContent = skillsVisible ? "Hide Skills" : "Show Skills";
});
