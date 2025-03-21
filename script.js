const photos = [
    { src: "images/16.jpg", caption: "Family Movie Night" },
    { src: "images/17.jpg", caption: "Beach Vacation" },
    { src: "images/18.jpg", caption: "Birthday Celebration" },
    { src: "images/19.jpg", caption: "Road Trip" }
];

const gallery = document.getElementById("photo-gallery");

photos.forEach(photo => {
    const card = document.createElement("div");
    card.classList.add("photo-card");

    card.innerHTML = `
        <img src="${photo.src}" alt="${photo.caption}">
        <p class="photo-caption">${photo.caption}</p>
    `;

    gallery.appendChild(card);
});
