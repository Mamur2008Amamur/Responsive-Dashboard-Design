document.addEventListener('DOMContentLoaded', function () {
    // Barcha more_vert ikonkalarini tanlab olamiz
    const moreVertIcons = document.querySelectorAll('.notification .content .material-icons-sharp');

    moreVertIcons.forEach(icon => {
        // Har bir ikonka uchun menyu yaratamiz
        const menu = document.createElement('div');
        menu.classList.add('menu');
        menu.innerHTML = `
            <a href="#">Edit</a>
            <a href="#">Delete</a>
            <a href="#">Share</a>
            <a href="#">View Details</a>
        `;
        icon.parentElement.appendChild(menu); // Menyuni ikonka yoniga qo'shamiz

        // Ikonka bosilganda menyuni ochish/yopish
        icon.addEventListener('click', function (e) {
            e.stopPropagation(); // Boshqa joyga bosilganda yopilishini oldini olish
            menu.classList.toggle('active');
        });

        // Sahifaning boshqa joyiga bosilganda menyuni yopish
        document.addEventListener('click', function () {
            menu.classList.remove('active');
        });
    });
});