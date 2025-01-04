const daysContainer = document.querySelector(".days-container");

source.forEach((item, index) => {
  // create a div for each day
  const dayDiv = document.createElement("div");
  dayDiv.classList.add("day");

  // add the icon to the div
  const iconImg = document.createElement("img");
  iconImg.src = `./images/icons/${item.icon}.png`;
  iconImg.alt = item.icon;
  iconImg.classList.add("icon");

  // add the day number to the div
  const dayNumber = document.createElement("span");
  dayNumber.textContent = index + 1;
  dayNumber.classList.add("fw-bold");

  dayDiv.appendChild(iconImg);
  dayDiv.appendChild(dayNumber);
  daysContainer.appendChild(dayDiv);
});
