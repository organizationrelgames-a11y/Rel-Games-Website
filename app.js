async function loadGames() {
  const grid = document.getElementById("games-grid");
  if (!grid) return;

  try {
    const res = await fetch("games.json");
    const data = await res.json();

    grid.innerHTML = data.games
      .map((game) => {
        const playLink = game.links?.play || "#";
        const storeLink = game.links?.appStore || "#";
        const icon = game.icon || "assets/placeholder-1.svg";

        return `
          <article class="game-card">
            <img src="${icon}" alt="${game.name} icon" />
            <h3>${game.name}</h3>
            <p>${game.description}</p>
            <div class="game-links">
              <a class="primary" href="${playLink}" target="_blank" rel="noopener">Google Play</a>
              <a href="${storeLink}" target="_blank" rel="noopener">App Store</a>
            </div>
          </article>
        `;
      })
      .join("");
  } catch (err) {
    grid.innerHTML = `<p style="color:#a3b0d4">Add games in games.json to populate this section.</p>`;
  }
}

function initTheme() {
  const key = "rel-games-theme";
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const stored = localStorage.getItem(key);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(key, next);
  });
}

initTheme();
loadGames();
