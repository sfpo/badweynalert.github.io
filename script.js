// Language Toggle (Basic)
document.getElementById('language').addEventListener('change', function () {
    const lang = this.value;
    if (lang === 'so') {
        alert('Somali translation coming soon!');
    } else if (lang === 'ar') {
        alert('Arabic translation coming soon!');
    } else {
        alert('English selected.');
    }
});

// Initialize Leaflet Map (Centered on Mogadishu Coast)
const map = L.map('map').setView([2.0469, 45.3182], 8); // Mogadishu coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Sample Fishing Zone Marker
L.marker([2.0469, 45.3182]).addTo(map)
    .bindPopup('Mogadishu Coast: High fish density (Upwelling Zone)')
    .openPopup();

// Form Submission
document.getElementById('subscribe-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (name && phone) {
        alert(`Thank you, ${name}! You’ll receive alerts at ${phone}.`);
        // Future: Send data to backend or Twilio for SMS
        this.reset();
    } else {
        alert('Please fill in required fields.');
    }
});
