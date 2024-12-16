// Fonction pour passer une commande
function order(menuType) {
    let selectedItems = []; // Tableau pour stocker les plats sélectionnés
    let formId = menuType.toLowerCase() + '-form'; // ID du formulaire en fonction du type de menu (Petit Déjeuner, Déjeuner, Dîner)
    let form = document.getElementById(formId); // Récupère le formulaire correspondant
    let checkboxes = form.querySelectorAll('input[type="checkbox"]:checked'); // Récupère toutes les cases à cocher sélectionnées

    checkboxes.forEach(function (checkbox) {
        selectedItems.push(checkbox.value); // Ajoute chaque plat sélectionné au tableau
    });

    if (selectedItems.length > 0) {
        // Si des plats sont sélectionnés, affiche la commande dans une alerte
        alert('Commande pour ' + menuType + ' :\n' + selectedItems.join('\n'));
    } else {
        // Si aucun plat n'est sélectionné, avertit l'utilisateur
        alert('Veuillez sélectionner des plats pour passer une commande.');
    }
}
