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
  }).then(() => {
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
