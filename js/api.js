const BASE_URL = "https://hacker-news.firebaseio.com/v0";

async function fetchNewStoriesIds() {
  const res = await fetch(`${BASE_URL}/newstories.json`);
  return res.json();
}

async function fetchStoryById(id) {
  const res = await fetch(`${BASE_URL}/item/${id}.json`);
  return res.json();
}
