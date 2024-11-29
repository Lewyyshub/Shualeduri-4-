const searchButton = document.getElementById("search_button");
const searchInput = document.getElementById("search_input");
const userCard = document.getElementById("user_info");
const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const bio = document.getElementById("bio");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const joinDate = document.getElementById("join_date");
const toggleMode = document.getElementById("dark_mode");
const nickname = document.getElementById("nickname");

toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");

  toggleMode.textContent = document.body.classList.contains("dark_mode")
    ? "LIGHT"
    : "DARK";
});

searchButton.addEventListener("click", async () => {
  const username = searchInput.value.trim();
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    updateUserCard(data);
  } catch (error) {}
});

function updateUserCard(data) {
  avatar.src = data.avatar_url;
  name.textContent = data.name || data.login;
  bio.textContent = data.bio || "This profile has no bio";
  repos.textContent = data.public_repos;
  followers.textContent = data.followers;
  following.textContent = data.following;
  nickname.textContent = data.login;
  joinDate.textContent = `Joined ${new Date(
    data.created_at
  ).toLocaleDateString()}`;
}
