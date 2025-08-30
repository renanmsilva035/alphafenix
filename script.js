// Exemplo de manipulação de pacotes utilizando Firebase
const db = firebase.firestore();

// Carregar pacotes na página principal
const loadProducts = () => {
    db.collection("products").get().then((querySnapshot) => {
        const productsContainer = document.getElementById("products-container");
        querySnapshot.forEach((doc) => {
            const product = doc.data();
            const productCard = document.createElement("div");
            productCard.classList.add("card");
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p><strong>R$${product.price}</strong></p>
                <a href="https://wa.me/5511999999999?text=Gostaria%20de%20comprar%20o%20pacote%20${product.title}">Comprar Agora</a>
            `;
            productsContainer.appendChild(productCard);
        });
    });
};

loadProducts();
