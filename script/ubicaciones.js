(async () => {
  const response = await fetch("https://rickandmortyapi.com/api/location");
  const locations = (await response.json()).results;

  const list = document.getElementById("list");

  for (let location of locations) {
    const card = document.createElement("div");
    card.classList.add("card");

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("nameContainer");

    const name = document.createElement("span");
    name.classList.add("name");
    name.textContent = location.name;

    nameContainer.appendChild(name);
    card.appendChild(nameContainer);

    const dimensionContainer = document.createElement("div");
    dimensionContainer.classList.add("dimensionContainer");

    const dimension = document.createElement("span");
    dimension.classList.add("dimension");
    dimension.textContent = location.dimension;

    dimensionContainer.appendChild(dimension);
    card.appendChild(dimensionContainer);

    list.appendChild(card);
  }
})();
