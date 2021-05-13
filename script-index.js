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
    overlay.classList.toggle("overlay-active");
    sidebar.classList.remove("active-nav");
    container.classList.remove("active-container");
    menubtn.removeEventListener("click", activateSlideBar);

    // Rendering the overlay content
    let containerImg = document.querySelector(".container-img");
    let buttonsAndImg;
    let modalContainer = document.querySelector(".modal-container");
    let modalContent;
    if (
      path ===
      "https://steamuserimages-a.akamaihd.net/ugc/1772707737364422181/E54C3934CC261A25723E1CCAB73BC9AE23859386/"
    ) {
      buttonsAndImg =
        '<button id="btn-close-popup"><i class="fas fa-times"></i></button><button id="btn-info" type="button"        data-bs-toggle="modal"          data-bs-target="#game-info-alien-isolation"><i class="fas fa-info-circle"></i></button><img src="' +
        path +
        '" alt="" id="overlay-image">';
      modalContent =
        '<div class="modal fade" id="game-info-alien-isolation" tabindex="-1"      aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Alien Isolation</h5><button              type="button" class="btn-close" data-bs-dismiss="modal"          aria-label="Close"></button></div><div class="modal-body"><img src="https://as01.epimg.net/meristation/imagenes/2019/06/11/cover/491219371560278554.jpg" alt="Alien Isolation Cover" class="game-cover"/><ul class="modal-body-list"><li lass="modal-body-list-item"><span class="span-bold">Release Date:</span> 6 OCT 2014</li><li class="modal-body-list-item"><span class="span-bold">Developer:</span> Creative Assembly, Feral Interactive (Mac), Feral Interactive (Linux).</li><li class="modal-body-list-item"><span class="span-bold">Publisher:</span> SEGA, Feral Interactive (Mac), Feral Interactive (Linux).</li><li class="modal-body-list-item"><span class="span-bold">Genre:</span> Horror, Sci-fi, Space.</li></ul></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button><a href="https://store.steampowered.com/app/214490/Alien_Isolation/" target="_blank"><button type="button" class="btn btn-primary">  Steam Store</button></a></div></div></div></div>';
    } else if (
      path ===
      "https://steamuserimages-a.akamaihd.net/ugc/2423376206386007189/693DB1773F04553BD125BA4F35A391E5C63CA782/"
    ) {
      buttonsAndImg =
        '<button id="btn-close-popup"><i class="fas fa-times"></i></button><button id="btn-info" type="button"        data-bs-toggle="modal"          data-bs-target="#game-info-conarium"><i class="fas fa-info-circle"></i></button><img src="' +
        path +
        '" alt="" id="overlay-image">';
      modalContent =
        '<div class="modal fade" id="game-info-conarium" tabindex="-1"      aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Conarium</h5><button              type="button" class="btn-close" data-bs-dismiss="modal"          aria-label="Close"></button></div><div class="modal-body"><img src="https://www.mobygames.com/images/covers/l/539713-conarium-xbox-one-front-cover.jpg" alt="Conarium Cover" class="game-cover"/><ul class="modal-body-list"><li class="modal-body-list-item"><span class="span-bold">Release Date:</span>6 Jun, 2017</li><li class="modal-body-list-item"><span class="span-bold">Developer:</span>Zoetrope Interactive.</li><li class="modal-body-list-item"> <span class="span-bold">Publisher:</span>Iceberg Interactive.</li><li class="modal-body-list-item"><span class="span-bold">Genre:</span> Adventure, Lovecraftian, Horror, Atmospheric.</li></ul></div><div class="modal-footer">            <button type="button"class="btn btn-secondary"   data-bs-dismiss="modal">Close</button><a href="https://store.steampowered.com/app/313780/Conarium/" target="_blank"><button type="button" class="btn btn-primary">Steam Store</button></a></div></div></div></div>';
    } else if (
      path ===
      "https://steamuserimages-a.akamaihd.net/ugc/941699520637203085/41F1180B262D205793EFEF8C3E94C9828747ECAC/"
    ) {
      buttonsAndImg =
        '<button id="btn-close-popup"><i class="fas fa-times"></i></button><button id="btn-info" type="button"        data-bs-toggle="modal"          data-bs-target="#game-info-firewatch"><i class="fas fa-info-circle"></i></button><img src="' +
        path +
        '" alt="" id="overlay-image">';
      modalContent =
        '<div class="modal fade" id="game-info-firewatch" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Firewatch</h5><buttontype="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></buttontype=></div><div class="modal-body"><img src="https://www.masgamers.com/wp-content/uploads/2016/03/jaquette-firewatch-ps4-cover.jpg"alt="Firewatch Cover" class="game-cover"/><ul class="modal-body-list"><li lass="modal-body-list-item"><span class="span-bold">Release Date:</span> 9 FEB 2016</li><li class="modal-body-list-item"><span class="span-bold">Developer:</span> Campo Santo.</li><li class="modal-body-list-item"><span class="span-bold">Publisher:</span> Panic, Campo Santo.</li><li class="modal-body-list-item"><span class="span-bold">Genre:</span> Adventure, Walking Simultaor, Open World, Exploration.</li></ul></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button><a href="https://store.steampowered.com/app/383870/Firewatch/" target="_blank"><button type="button" class="btn btn-primary">  Steam Store</button></a></div></div></div></div>';
    } else if (
      path ===
      "https://steamuserimages-a.akamaihd.net/ugc/1798603330192815075/DE8A6850983594217C79503D6ABE688227380546/"
    ) {
      buttonsAndImg =
        '<button id="btn-close-popup"><i class="fas fa-times"></i></button><button id="btn-info" type="button"        data-bs-toggle="modal"          data-bs-target="#game-info-little-nightmares"><i class="fas fa-info-circle"></i></button><img src="' +
        path +
        '" alt="" id="overlay-image">';
      modalContent =
        '<div class="modal fade" id="game-info-little-nightmares" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Little Nightmares</h5><buttontype="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></buttontype=></div><div class="modal-body"><img src="https://s3.gaming-cdn.com/images/products/1844/orig/little-nightmares-cover.jpg"alt="Little Nightmares Cover" class="game-cover"/><ul class="modal-body-list"><li lass="modal-body-list-item"><span class="span-bold">Release Date:</span> 27 ABR 2017</li><li class="modal-body-list-item"><span class="span-bold">Developer:</span> Tarsier Studios.</li><li class="modal-body-list-item"><span class="span-bold">Publisher:</span> BANDAI NAMCO Entertainment.</li><li class="modal-body-list-item"><span class="span-bold">Genre:</span> Terror, Atmospheric, Puzzle, Indie.</li></ul></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button><a href="https://store.steampowered.com/app/424840/Little_Nightmares/" target="_blank"><button type="button" class="btn btn-primary">  Steam Store</button></a></div></div></div></div>';
    } else if (
      path ===
      "https://steamuserimages-a.akamaihd.net/ugc/946203438852984134/63A99755DC4AEFE3B66E508C20A8836A0C2C29F4/"
    ) {
      buttonsAndImg =
        '<button id="btn-close-popup"><i class="fas fa-times"></i></button><button id="btn-info" type="button"        data-bs-toggle="modal"          data-bs-target="#game-info-the-vanishing-of-ethan-carter"><i class="fas fa-info-circle"></i></button><img src="' +
        path +
        '" alt="" id="overlay-image">';
      modalContent =
        '<div class="modal fade" id="game-info-the-vanishing-of-ethan-carter" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">The Vanishin Of Ethan Carter</h5><buttontype="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></buttontype=></div><div class="modal-body"><img src="https://store-images.s-microsoft.com/image/apps.14819.70171652448862572.1a6419ed-efaf-48a6-be79-229940250020.ddc43dff-ecfe-4168-a34e-a98dd602dd4b"alt="The Vanishing Of Ethan Carter Cover" class="game-cover"/><ul class="modal-body-list"><li lass="modal-body-list-item"><span class="span-bold">Release Date:</span> 25 Sep, 2014</li><li class="modal-body-list-item"><span class="span-bold">Developer:</span> The Astronauts.</li><li class="modal-body-list-item"><span class="span-bold">Publisher:</span> The Astronauts.</li><li class="modal-body-list-item"><span class="span-bold">Genre:</span> Mystery, Atmospheric, Detective, Exploration.</li></ul></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button><a href="https://store.steampowered.com/app/400430/The_Vanishing_of_Ethan_Carter_Redux/" target="_blank"><button type="button" class="btn btn-primary">  Steam Store</button></a></div></div></div></div>';
    } else if (
      path ===
      "https://steamuserimages-a.akamaihd.net/ugc/1752433059656863140/34FE88F83078918A4CC41443FB7D576155E26EE0/"
    ) {
      buttonsAndImg =
        '<button id="btn-close-popup"><i class="fas fa-times"></i></button><button id="btn-info" type="button"        data-bs-toggle="modal"          data-bs-target="#game-info-sea-of-solitude"><i class="fas fa-info-circle"></i></button><img src="' +
        path +
        '" alt="" id="overlay-image">';
      modalContent =
        '<div class="modal fade" id="game-info-sea-of-solitude" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Sea Of Solitude</h5><buttontype="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></buttontype=></div><div class="modal-body"><img src="https://store-images.s-microsoft.com/image/apps.65012.66899389918915343.3cdfd82d-2868-4f03-99bf-197a61c1cda4.994de704-9d81-418b-8e1e-f002b9f03853" alt="Sea Of Solitude Cover" class="game-cover"/><ul class="modal-body-list"><li lass="modal-body-list-item"><span class="span-bold">Release Date:</span> 5 Jul, 2019</li><li class="modal-body-list-item"><span class="span-bold">Developer:</span> Jo-Mei Games.</li><li class="modal-body-list-item"><span class="span-bold">Publisher:</span> Electronic Arts.</li><li class="modal-body-list-item"><span class="span-bold">Genre:</span> Adventure, Emodional, Dark, Story Rich.</li></ul></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button><a href="https://store.steampowered.com/app/1225590/Sea_of_Solitude/" target="_blank"><button type="button" class="btn btn-primary">  Steam Store</button></a></div></div></div></div>';
    } else if (
      path ===
      "https://steamuserimages-a.akamaihd.net/ugc/754842494686250005/B77C01D7F4DFD60755CF982ACE32A9A993279706/"
    ) {
      buttonsAndImg =
        '<button id="btn-close-popup"><i class="fas fa-times"></i></button><button id="btn-info" type="button"        data-bs-toggle="modal"          data-bs-target="#game-info-the-town-of-light"><i class="fas fa-info-circle"></i></button><img src="' +
        path +
        '" alt="" id="overlay-image">';
      modalContent =
        '<div class="modal fade" id="game-info-the-town-of-light" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">The Town Of Light</h5><buttontype="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></buttontype=></div><div class="modal-body"><img src="https://static.voidu.com/cdn-cgi/image/format=auto,width=1170,quality=75/images/thumbs/0016649_the-town-of-light.jpeg" alt="The Town Of Light Cover" class="game-cover"/><ul class="modal-body-list"><li lass="modal-body-list-item"><span class="span-bold">Release Date:</span> 26 Feb, 2016</li><li class="modal-body-list-item"><span class="span-bold">Developer:</span> LKA.</li><li class="modal-body-list-item"><span class="span-bold">Publisher:</span> LKA, Wired Productions.</li><li class="modal-body-list-item"><span class="span-bold">Genre:</span> Exploration, Psychological, Horror, Mystery.</li></ul></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button><a href="https://store.steampowered.com/app/433100/The_Town_of_Light/" target="_blank"><button type="button" class="btn btn-primary">  Steam Store</button></a></div></div></div></div>';
    } else if (path === "assets/images/conarium/6.jpg") {
      buttonsAndImg =
        '<button id="btn-close-popup"><i class="fas fa-times"></i></button><button id="btn-info" type="button"        data-bs-toggle="modal"          data-bs-target="#game-info-conarium"><i class="fas fa-info-circle"></i></button><img src="' +
        path +
        '" alt="" id="overlay-image">';
      modalContent =
        '<div class="modal fade" id="game-info-conarium" tabindex="-1"      aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Conarium</h5><button              type="button" class="btn-close" data-bs-dismiss="modal"          aria-label="Close"></button></div><div class="modal-body"><img src="https://www.mobygames.com/images/covers/l/539713-conarium-xbox-one-front-cover.jpg" alt="Conarium Cover" class="game-cover"/><ul class="modal-body-list"><li class="modal-body-list-item"><span class="span-bold">Release Date:</span>6 Jun, 2017</li><li class="modal-body-list-item"><span class="span-bold">Developer:</span>Zoetrope Interactive.</li><li class="modal-body-list-item"> <span class="span-bold">Publisher:</span>Iceberg Interactive.</li><li class="modal-body-list-item"><span class="span-bold">Genre:</span> Adventure, Lovecraftian, Horror, Atmospheric.</li></ul></div><div class="modal-footer">            <button type="button"class="btn btn-secondary"   data-bs-dismiss="modal">Close</button><a href="https://store.steampowered.com/app/313780/Conarium/" target="_blank"><button type="button" class="btn btn-primary">Steam Store</button></a></div></div></div></div>';
    } else if (
      path ===
      "https://steamuserimages-a.akamaihd.net/ugc/922544871727753233/67C38ECF982CE874DFFD1105151BAC4AB0B6EAC3/"
    ) {
      buttonsAndImg =
        '<button id="btn-close-popup"><i class="fas fa-times"></i></button><button id="btn-info" type="button"        data-bs-toggle="modal"          data-bs-target="#game-info-outlast"><i class="fas fa-info-circle"></i></button><img src="' +
        path +
        '" alt="" id="overlay-image">';
      modalContent =
        '<div class="modal fade" id="game-info-outlast" tabindex="-1"      aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Outlast</h5><button              type="button" class="btn-close" data-bs-dismiss="modal"          aria-label="Close"></button></div><div class="modal-body"><img src="https://upload.wikimedia.org/wikipedia/en/a/aa/Outlast_cover.jpg" alt="Outlast Cover" class="game-cover"/><ul class="modal-body-list"><li class="modal-body-list-item"><span class="span-bold">Release Date:</span>4 SEP 20136 Jun, 2017</li><li class="modal-body-list-item"><span class="span-bold">Developer:</span>Red Barrels.</li><li class="modal-body-list-item"> <span class="span-bold">Publisher:</span>Red Barrels.</li><li class="modal-body-list-item"><span class="span-bold">Genre:</span> Horror, Survival, Atmospheric, Gore. </li></ul></div><div class="modal-footer">            <button type="button"class="btn btn-secondary"   data-bs-dismiss="modal">Close</button><a href="https://store.steampowered.com/app/238320/Outlast/" target="_blank"><button type="button" class="btn btn-primary">Steam Store</button></a></div></div></div></div>';
    }
    containerImg.innerHTML = buttonsAndImg;
    modalContainer.innerHTML = modalContent;

    // Close button listener
    document.querySelector("#btn-close-popup").addEventListener("click", () => {
      overlay.classList.remove("overlay-active");
      menubtn.addEventListener("click", activateSlideBar);
    });

    // Overlay close listener
    overlay.addEventListener("click", (event) => {
      if (event.target.id === "overlay") {
        overlay.classList.remove("overlay-active");
        menubtn.addEventListener("click", activateSlideBar);
      }
    });
  });
});
