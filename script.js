AOS.init();
document.addEventListener("DOMContentLoaded", function() {
    // Fetch users from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
        const userList = document.getElementById('user-list');
        data.forEach(user => {
            // Create user card
            const userCard = document.createElement('div');
            userCard.classList.add('col-md-4', 'mb-4');
            userCard.setAttribute('data-aos', 'fade-up');
            userCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <p class="card-text"><strong><i class="fas fa-envelope"></i> Email:</strong> ${user.email}</p>
                <p class="card-text"><strong><i class="fas fa-phone"></i> Phone:</strong> ${user.phone}</p>
                <p class="card-text"><strong><i class="fas fa-globe"></i> Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                </div>
                <div class="card-footer text-muted">
                <a href="http://${user.website}" target="_blank" class="btn btn-primary">Visit Website</a>
                </div>
            </div>
            `;
            userList.appendChild(userCard);
        });
        })
        .catch(error => console.error('Error fetching users:', error));
});