// Slide bar

const slideBar = () => {
  const menubtn = document.querySelector("#menu-btn");
  const sidebar = document.querySelector("#sidebar");
  const container = document.querySelector(".my-container");

  menubtn.addEventListener("click", () => {
    sidebar.classList.toggle("active-nav");
    container.classList.toggle("active-container");
  });
};

slideBar();

// Overlay listener

const overlay = document.querySelector("#overlay");
document.querySelectorAll(".box img").forEach((image) => {
  image.addEventListener("click", () => {
    const path = image.getAttribute("src");
    const sidebar = document.querySelector("#sidebar");
    const container = document.querySelector(".my-container");
    overlay.classList.toggle("overlay-active");
    document.querySelector("#overlay img").src = path;
    sidebar.classList.remove("active-nav");
    container.classList.remove("active-container");
  });
});

// Close button listener

document.querySelector("#btn-close-popup").addEventListener("click", () => {
  overlay.classList.remove("overlay-active");
});

// Overlay close listener

overlay.addEventListener("click", (event) => {
  event.target.id === "overlay"
    ? overlay.classList.remove("overlay-active")
    : "";
});
