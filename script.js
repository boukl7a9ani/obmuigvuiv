document.getElementById('identityForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get values from the form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const interests = document.getElementById('interests').value;

    // Create a new profile element
    const profile = document.createElement('div');
    profile.classList.add('profile');
    profile.innerHTML = `<strong>Name:</strong> ${name} <br>
                         <strong>Age:</strong> ${age} <br>
                         <strong>Interests:</strong> ${interests}`;
    
    // Append the new profile to the profiles section
    document.getElementById('profiles').appendChild(profile);

    // Clear the form fields
    document.getElementById('identityForm').reset();
});
