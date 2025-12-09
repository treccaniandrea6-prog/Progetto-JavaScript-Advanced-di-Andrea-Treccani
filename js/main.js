const newsListEl = document.getElementById("news-list");
const statusEl = document.getElementById("status");
const loadMoreBtn = document.getElementById("load-more-btn");

let allIds = [];
let currentIndex = 0;
const PAGE_SIZE = 10;

async function loadNextStories() {
  const slice = allIds.slice(currentIndex, currentIndex + PAGE_SIZE);

  if (slice.length === 0) {
    setStatus(statusEl, "Non ci sono altre news da mostrare.");
    loadMoreBtn.disabled = true;
    return;
  }

  setStatus(statusEl, "Caricamento news...", "loading");
  loadMoreBtn.disabled = true;

  const stories = [];

  for (let id of slice) {
    const detail = await fetchStoryById(id);
    stories.push(detail);
  }

  renderStories(newsListEl, stories);

  currentIndex += PAGE_SIZE;
  clearStatus(statusEl);
  loadMoreBtn.disabled = false;
}

async function initApp() {
  setStatus(statusEl, "Caricamento ultime news...", "loading");
  loadMoreBtn.disabled = true;

  allIds = await fetchNewStoriesIds();
  await loadNextStories();
}

loadMoreBtn.addEventListener("click", loadNextStories);
document.addEventListener("DOMContentLoaded", initApp);