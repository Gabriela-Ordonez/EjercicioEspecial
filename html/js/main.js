document.addEventListener("DOMContentLoaded", () => {
    const loadBtn = document.getElementById("btnLoadProducts");
    const container = document.getElementById("productsContainer");
  
    loadBtn.addEventListener("click", () => {
      fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(data => {
          // Tomamos solo los primeros 9 productos
          const products = data.slice(0, 9);
  
          // Limpiamos el contenedor
          container.innerHTML = "";
  
          products.forEach(product => {
            const card = document.createElement("div");
            card.className = "col-md-4 mb-4";
  
            card.innerHTML = `
              <div class="card h-100">
                <img src="${product.images[1] || product.images[0]}" class="card-img-top" alt="${product.title}" referrerpolicy="no-referrer">
                <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text">${product.description}</p>
                  <p class="card-text fw-bold">$${product.price}</p>
                </div>
              </div>
            `;
  
            container.appendChild(card);
          });
        })
        .catch(error => {
          console.error("Error cargando productos:", error);
          container.innerHTML = "<p class='text-danger'>No se pudieron cargar los productos.</p>";
        });
    });
  });
  