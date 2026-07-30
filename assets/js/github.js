const username = "ridowan01";

async function loadGitHub() {

    const profile = await fetch(
        `https://api.github.com/users/${username}`
    );

    const user = await profile.json();

    document.getElementById("github-avatar").src = user.avatar_url;
    document.getElementById("github-name").textContent = user.name;
    document.getElementById("github-bio").textContent = user.bio || "GitHub Developer";

    document.getElementById("repo-count").textContent = user.public_repos;
    document.getElementById("followers").textContent = user.followers;
    document.getElementById("following").textContent = user.following;

    const repoRequest = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
    );

    const repos = await repoRequest.json();

    // Choose specific featured repositories if they exist.
    const featuredNames = [
        "event-management",
        "Mythic-Odyssey",
        "HardwardProjects"
    ];

    const featured = repos.filter(repo =>
        featuredNames.includes(repo.name)
    );

    const displayRepos = featured.length ? featured : repos.slice(0, 4);

    const grid = document.getElementById("repo-grid");

    displayRepos.forEach(repo => {

        grid.innerHTML += `
        <div class="repo-card">

            <h4>${repo.name}</h4>

            <p>${repo.description || "No description provided."}</p>

            <div class="repo-footer">

                <span>⭐ ${repo.stargazers_count}</span>

                <span>${repo.language || "N/A"}</span>

            </div>

            <a
                href="${repo.html_url}"
                target="_blank"
                class="project-btn mt-5 inline-flex">

                Repository →

            </a>

        </div>
        `;

    });

}

loadGitHub();