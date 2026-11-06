// PROPERTY SEARCH

const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", function () {
    const location = document.getElementById("searchLocation")
        .value.toLowerCase().trim();

    const type = document.getElementById("searchType").value;

    const cards = document.querySelectorAll(".property-card");

    let found = 0;

    cards.forEach(function (card) {
        const cardLocation = card.dataset.location;
        const cardType = card.dataset.type;

        const locationMatch = cardLocation.includes(location);
        const typeMatch = type === "all" || cardType === type;

        if (locationMatch && typeMatch) {
            card.style.display = "block";
            found++;
        } else {
            card.style.display = "none";
        }
    });

    document.getElementById("noResults").hidden = found !== 0;
});


// PROPERTY IMAGE PREVIEW

const imageInput = document.getElementById("propertyImage");
const imagePreview = document.getElementById("imagePreview");

imageInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        imagePreview.src = URL.createObjectURL(file);
        imagePreview.hidden = false;
    } else {
        imagePreview.hidden = true;
    }
});


// PROPERTY SUBMISSION DEMO

const propertyForm = document.getElementById("propertyForm");

propertyForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("propertyTitle").value;
    const location = document.getElementById("propertyLocation").value;
    const type = document.getElementById("propertyType").value;
    const price = document.getElementById("propertyPrice").value;

    const message = document.getElementById("formMessage");

    message.textContent =
        "Thank you! Your property details have been entered. " +
        "Our team will contact you.";

    console.log({
        title: title,
        location: location,
        type: type,
        price: price
    });

    propertyForm.reset();
    imagePreview.hidden = true;
});