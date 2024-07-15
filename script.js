document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer les valeurs des champs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Afficher les valeurs dans la console (pour tester)
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Message:', message);


    // Réinitialiser le formulaire après soumission
    document.getElementById('contact-form').reset();
    alert('Votre message a été envoyé avec succès !');
});