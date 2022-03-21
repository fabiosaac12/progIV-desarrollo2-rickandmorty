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

    list.appendChild(card);
  }
})();
