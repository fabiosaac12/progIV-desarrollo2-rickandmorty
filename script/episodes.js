(async () => {
  const response = await fetch("https://rickandmortyapi.com/api/episode");
  const episodes = (await response.json()).results;

  const list = document.getElementById("list");

  for (let episode of episodes) {
    const card = document.createElement("div");
    card.classList.add("card");

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("nameContainer");

    const name = document.createElement("span");
    name.classList.add("name");
    name.textContent = episode.name;

    nameContainer.appendChild(name);
    card.appendChild(nameContainer);

    const episodeNumberContainer = document.createElement("div");
    episodeNumberContainer.classList.add("episodeContainer");

    const episodeNumber = document.createElement("span");
    episodeNumber.classList.add("episode");
    episodeNumber.textContent = episode.episode;

    episodeNumberContainer.appendChild(episodeNumber);
    card.appendChild(episodeNumberContainer);

    list.appendChild(card);
  }
})();
