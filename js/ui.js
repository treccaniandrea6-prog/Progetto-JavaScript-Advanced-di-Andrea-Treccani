function setStatus(el, message, type = "") {
  el.textContent = message;
  el.className = "status";
  if (type === "loading") el.classList.add("status--loading");
  if (type === "error") el.classList.add("status--error");
}

function clearStatus(el) {
  el.textContent = "";
  el.className = "status";
}

function renderStories(container, stories) {
  stories.forEach(story => {
    const card = document.createElement("div");
    card.className = "news-card";

    const title = story.title || "Titolo non disponibile";
    const url = story.url || `https://news.ycombinator.com/item?id=${story.id}`;
    const date = new Date(story.time * 1000).toLocaleString("it-IT");

    card.innerHTML = `
      <h3 class="news-title"><a href="${url}" target="_blank">${title}</a></h3>
      <p class="news-meta">🕒 ${date}</p>
    `;

    container.appendChild(card);
  });
}