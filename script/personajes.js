(async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const personajes = (await response.json()).results;

  const list = document.getElementById("list");

  for (let personaje of personajes) {
    const card = document.createElement("div");
    card.classList.add("card");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("imageContainer");

    const image = document.createElement("img");
    image.classList.add("image");
    image.setAttribute("src", personaje.image);

    imageContainer.appendChild(image);
    card.appendChild(imageContainer);

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("nameContainer");

    const name = document.createElement("span");
    name.classList.add("name");
    name.textContent = personaje.name;

    nameContainer.appendChild(name);
    card.appendChild(nameContainer);

    card.addEventListener("click", () => handleOpenModal(personaje));

    list.appendChild(card);
  }
})();

const handleOpenModal = (personaje) => {
  const backdrop = document.getElementById("backdrop");

  const image = document.getElementById("image");
  const name = document.getElementById("name");
  const type = document.getElementById("type");
  const gender = document.getElementById("gender");
  const species = document.getElementById("species");

  image.setAttribute("src", personaje.image);
  name.textContent = personaje.name;
  type.textContent = personaje.type;
  gender.textContent = personaje.gender;
  species.textContent = personaje.species;

  for (let property of ["gender", "species", "type"]) {
    if (!personaje[property]) {
      document.getElementById(property).parentNode.style.display = 'none';
    } else {
      document.getElementById(property).parentNode.style.display = 'flex';
    }
  }

  backdrop.style.display = "flex";
};

const handleCloseModal = () => {
  const backdrop = document.getElementById("backdrop");

  backdrop.style.display = "none";
};

(async () => {
  const backdrop = document.getElementById("backdrop");
  backdrop.addEventListener("click", handleCloseModal);
})();
