// Slide bar

function activateSlideBar() {
  const sidebar = document.querySelector("#sidebar");
  const container = document.querySelector(".my-container");
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-container");
  document.body.classList.toggle("body-active");
}

const slideBar = () => {
  const menubtn = document.querySelector("#menu-btn");
  menubtn.addEventListener("click", activateSlideBar);
};

slideBar();

// Overlay listener

const overlay = document.querySelector("#overlay");
document.querySelectorAll(".box img").forEach((image) => {
  image.addEventListener("click", () => {
    const path = image.getAttribute("src");
    const sidebar = document.querySelector("#sidebar");
    const container = document.querySelector(".my-container");
    const menubtn = document.querySelector("#menu-btn");
    const homebtn = document.querySelector("#home-btn");
    menubtn.classList.toggle("games-and-home-buttons-active");
    homebtn.classList.toggle("games-and-home-buttons-active");
    overlay.classList.toggle("overlay-active");
    document.querySelector("#overlay img").src = path;
    sidebar.classList.remove("active-nav");
    container.classList.remove("active-container");
    menubtn.removeEventListener("click", activateSlideBar);
    document.body.classList.toggle("body-active");

    // Close button listener
    document.querySelector("#btn-close-popup").addEventListener("click", () => {
      overlay.classList.remove("overlay-active");
      menubtn.addEventListener("click", activateSlideBar);
      document.body.classList.remove("body-active");
      menubtn.classList.remove("games-and-home-buttons-active");
      homebtn.classList.remove("games-and-home-buttons-active");
    });

    // Overlay close listener
    overlay.addEventListener("click", (event) => {
      if (event.target.id === "overlay") {
        overlay.classList.remove("overlay-active");
        menubtn.addEventListener("click", activateSlideBar);
        document.body.classList.remove("body-active");
        menubtn.classList.remove("games-and-home-buttons-active");
        homebtn.classList.remove("games-and-home-buttons-active");
      }
    });
  });
});
