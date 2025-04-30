let loadBtn = document.getElementById("loadBtn");

loadBtn.addEventListener("click", function(event) {
    event.preventDefault();

    fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(products => {
            if (products.length > 0) {
                let cardsContainer = document.getElementById("productCardsContainer");
                cardsContainer.innerHTML = "";

                products.slice(0, 9).forEach(product => {
                    let productCard = `
                        <div class="card">
                            <img src="${product.images[1]}" class="card-img-top" alt="${product.title}">
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <p class="card-text">${product.description}</p>
                                <p class="card-text"><strong>Price: $${product.price}</strong></p>
                            </div>
                        </div>
                    `;
                    cardsContainer.insertAdjacentHTML("beforeend", productCard);
                });
            } else {
                alert("No products found.");
            }
        })
        .catch(error => {
            console.error("Error fetching products:", error);
            alert("Error fetching products.");
        });
});
