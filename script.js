// Liste des identifiants et leurs pages associées
const users = {
  "user1": "page1.html",
  "user2": "page2.html",
  "admin": "admin.html",
};

// Gestionnaire d'événement pour le formulaire
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche le rechargement de la page
  
  const username = document.getElementById("username").value.trim(); // Récupérer l'identifiant saisi

  if (users[username]) {
    // Redirection vers la page associée
    window.location.href = users[username];
  } else {
    // Message d'erreur si l'identifiant est invalide
    alert("Identifiant invalide !");
  }
});