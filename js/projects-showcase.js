document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("projectsContainer");

    if (!container || typeof projects === "undefined") return;

    container.innerHTML = projects.map((project, index) => {

        const thumb = project.slides.find(s => s.type === "image")?.src || "";

        const youtubeBtn = project.youtube
            ? `<a href="${project.youtube}" target="_blank" class="project-btn project-btn-primary">
                    ▶ Watch Gameplay
               </a>`
            : "";

        const itchBtn = project.itch
            ? `<a href="${project.itch}" target="_blank" class="project-btn project-btn-secondary">
                    🎮 Play on itch.io
               </a>`
            : "";

        const categories = (project.category || [])
            .map(tag => `<span class="project-tag">${tag}</span>`)
            .join("");

        const tech = (project.cardTags || [])
            .map(tag => `<span class="project-tag">${tag}</span>`)
            .join("");

        return `

<div id="${project.slug}" class="project-card">

    <div class="project-media project-open-btn"
     data-project="${project.id}">

    <img src="${thumb}" alt="${project.title}">

    </div>

    <div class="project-content">

        <div class="project-number">
            ${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}
        </div>

        <div class="project-tags">
            ${categories}
        </div>

        <h2 class="project-title">
            ${project.title}
        </h2>

        <p class="project-description">
            ${project.shortDescription}
        </p>

        <div class="project-role">
            Role
        </div>

        <div class="project-role-value">
            ${project.role}
        </div>

        <div class="project-tech">
            ${tech}
        </div>

        <div class="project-meta">

            <div class="project-meta-item">
                <div class="project-meta-label">Engine</div>
                <div class="project-meta-value">${project.engine || "-"}</div>
            </div>

            <div class="project-meta-item">
                <div class="project-meta-label">Platform</div>
                <div class="project-meta-value">${project.platform || "-"}</div>
            </div>

            <div class="project-meta-item">
                <div class="project-meta-label">Status</div>
                <div class="project-meta-value">${project.status || "-"}</div>
            </div>

            <div class="project-meta-item">
                <div class="project-meta-label">Role</div>
                <div class="project-meta-value">${project.role}</div>
            </div>

        </div>

        <div class="project-buttons">

            ${youtubeBtn}

            <button class="project-btn project-btn-outline project-open-btn"
                    data-project="${project.id}">
                View Project
            </button>

            ${itchBtn}

        </div>

    </div>

</div>

`;

    }).join("");

    document.querySelectorAll(".project-open-btn").forEach(btn => {

        btn.addEventListener("click", () => {

            projectViewer.open(parseInt(btn.dataset.project));

        });

    });

});