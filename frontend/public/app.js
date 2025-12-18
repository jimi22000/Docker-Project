const form = document.getElementById("noteForm");
const notesList = document.getElementById("notesList");

// Lomakkeen lähetys
form.addEventListener("submit", e => {
  e.preventDefault();
  const user = document.getElementById("user").value;
  const message = document.getElementById("message").value;

  fetch("/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user, message })
  })
    .then(() => {
      form.reset();
      loadNotes();
    });
});

// Hae ja näytä kaikki muistiinpanot
function loadNotes() {
  fetch("/api/notes")
    .then(res => res.json())
    .then(data => {
      if (!Array.isArray(data)) return;
      notesList.innerHTML = "";

      data.forEach(note => {
        const li = document.createElement("li");
        li.textContent = `${note.user}: ${note.message} `;

        // Delete-nappi
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.addEventListener("click", () => {
          fetch(`/api/notes/${note.id}`, { method: "DELETE" })
            .then(() => loadNotes());
        });

        li.appendChild(deleteBtn);
        notesList.appendChild(li);
      });
    });
}

// Lataa muistiinpanot heti sivun latauksessa
loadNotes();

// Lataa ja renderöi GitHub README.md
function loadGitHubReadme() {
  const githubUrl = "https://raw.githubusercontent.com/jimi22000/Docker-Project/main/README.md";

  fetch(githubUrl)
    .then(res => {
      if (!res.ok) throw new Error("GitHub README ei löytynyt");
      return res.text();
    })
    .then(markdownText => {
      const githubDiv = document.getElementById("githubNotes");
      githubDiv.innerHTML = marked.parse(markdownText); // Renderöi Markdown HTML:ksi

      // Korjaa kuvat, jos haluat käyttää frontendin images-kansiota
      githubDiv.querySelectorAll("img").forEach(img => {
        // Oletetaan, että kuvat on local images-kansiossa
        if (!img.src.startsWith("http")) {
          img.src = `images/${img.getAttribute("src")}`;
        }
      });
    })
    .catch(err => {
      const githubDiv = document.getElementById("githubNotes");
      githubDiv.textContent = "README:tä ei saatu ladattua.";
      console.error(err);
    });
}

loadGitHubReadme();
