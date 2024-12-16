// Fonction pour charger l'historique des commandes depuis localStorage
function loadOrderHistory() {
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const orderHistoryTable = document.getElementById('orderHistory').getElementsByTagName('tbody')[0];
    orderHistoryTable.innerHTML = '';  // Réinitialiser l'historique affiché

    orderHistory.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.customerName}</td>
            <td>${order.orderDetails}</td>
            <td>${order.date}</td>
        `;
        orderHistoryTable.appendChild(row);
    });
}

// Fonction pour enregistrer une nouvelle commande
function saveOrder(event) {
    event.preventDefault();  // Empêcher l'envoi du formulaire

    const customerName = document.getElementById('customerName').value;
    const orderDetails = document.getElementById('orderDetails').value;

    if (!customerName || !orderDetails) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Création de l'objet de commande
    const order = {
        customerName: customerName,
        orderDetails: orderDetails,
        date: new Date().toLocaleString()  // Date actuelle au format lisible
    };

    // Récupérer l'historique des commandes existant
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

    // Ajouter la nouvelle commande à l'historique
    orderHistory.push(order);

    // Sauvegarder l'historique mis à jour dans localStorage
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

    // Recharger l'historique des commandes pour afficher la nouvelle
    loadOrderHistory();

    // Réinitialiser le formulaire
    document.getElementById('orderForm').reset();
}

// Ajouter l'événement de soumission du formulaire
document.getElementById('orderForm').addEventListener('submit', saveOrder);

// Charger l'historique au chargement de la page
document.addEventListener('DOMContentLoaded', loadOrderHistory);
