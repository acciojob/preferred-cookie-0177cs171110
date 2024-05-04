//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const preferenceForm = document.querySelector("form");
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");

  // Function to set user preferences as cookies
  function setPreferences() {
    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;
    document.body.style.fontSize = `${fontSize}px`;
    document.body.style.color = fontColor;
    document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
    document.documentElement.style.setProperty("--fontcolor", fontColor);
    document.cookie = `fontsize=${fontSize}; max-age=31536000`; // Expires in 1 year
    document.cookie = `fontcolor=${fontColor}; max-age=31536000`; // Expires in 1 year
  }

  // Load saved preferences from cookies
  function loadPreferences() {
    const cookies = document.cookie.split("; ");
    cookies.forEach((cookie) => {
      const [name, value] = cookie.split("=");
      if (name === "fontsize") {
        fontSizeInput.value = value;
      } else if (name === "fontcolor") {
        fontColorInput.value = value;
      }
    });
    setPreferences(); // Apply saved preferences
  }

  // Event listener for form submission
  preferenceForm.addEventListener("submit", (event) => {
    event.preventDefault();
    setPreferences();
  });

  // Load saved preferences on page load
  loadPreferences();
});
