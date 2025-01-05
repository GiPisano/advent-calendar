const daysContainer = document.querySelector(".days-container");
const modal = document.getElementById("dayModal");
const modalContentDisplay = document.getElementById("modal-content-display");
const closeButton = document.querySelector(".close-button");
const resetButton = document.getElementById("reset-button"); // Reset button reference

// Retrieve clicked days from LocalStorage
let clickedDays = JSON.parse(localStorage.getItem("clickedDays")) || [];

// Dynamically generate days
source.forEach((item, index) => {
  const dayDiv = document.createElement("div");
  dayDiv.classList.add("day");

  // Apply special style if the day is already clicked
  if (clickedDays.includes(index)) {
    dayDiv.classList.add("clicked");
  }

  // Add icon and day number
  const iconImg = document.createElement("img");
  iconImg.src = `./images/icons/${item.icon}.png`;
  iconImg.alt = item.icon;
  iconImg.classList.add("icon");

  const dayNumber = document.createElement("span");
  dayNumber.textContent = index + 1;

  dayDiv.appendChild(iconImg);
  dayDiv.appendChild(dayNumber);
  daysContainer.appendChild(dayDiv);

  // Handle day click
  dayDiv.addEventListener("click", () => {
    dayDiv.classList.add("clicked");

    // Save clicked state in LocalStorage
    if (!clickedDays.includes(index)) {
      clickedDays.push(index);
      localStorage.setItem("clickedDays", JSON.stringify(clickedDays));
    }

    // Show modal content
    modalContentDisplay.innerHTML = `
      <p><strong>Day ${index + 1}</strong></p>
      ${item.url ? `<img src="${item.url}" alt="${item.icon}" />` : ""}
      <p>${item.text || ""}</p>
    `;

    modal.style.display = "flex";
  });
});

// Close modal
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Reset button functionality
resetButton.addEventListener("click", () => {
  // Clear LocalStorage
  localStorage.removeItem("clickedDays");
  clickedDays = [];

  // Reset all day elements
  document.querySelectorAll(".day").forEach((day) => {
    day.classList.remove("clicked");
  });
});
