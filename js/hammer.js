// Menangani swipe menggunakan Hammer.js
const agendaContainer = document.querySelector('.card-deck');
const hammer = new Hammer(agendaContainer);

hammer.on('swipeleft', function() {
    // Fungsi yang dijalankan saat swipe ke kiri
    agendaContainer.scrollLeft += 220; // Sesuaikan dengan lebar satu kartu plus margin-right
});

hammer.on('swiperight', function() {
    // Fungsi yang dijalankan saat swipe ke kanan
    agendaContainer.scrollLeft -= 220; // Sesuaikan dengan lebar satu kartu plus margin-right
});
