document.addEventListener("DOMContentLoaded", function () {
    // Sample product data in JSON format
    const products = [
        {
            name: "Thanks giving",
            price: 78990,
            description: "Gratitude Gathered is a heartwarming Thanksgiving tale that weaves together diverse characters, rich traditions, and the power of gratitude to create a tapestry of appreciation and connection.",
            image: "image/f1.jpg"
        },
        {
            name: "NEW LOOK",
            price: 44890,
            description: "Step into a world of bold transformations with our NEW LOOK book, where style meets innovation in every page.",
            image: "image/f2.jpg"
        },
        {
            name: "Music Festival",
            price: 311989.98,
            description: "Immerse yourself in the pulsating rhythm of a vibrant music festival, where beats and melodies become the chapters of an unforgettable story.",
            image: "image/f3.jpg"
        },
        {
            name: "EMBRACE THE WILD",
            price: 89990.02,
            description: "Embark on a riveting journey through untamed realms where nature's secrets and the human spirit intertwine in 'Embrace the Wild.",
            image: "image/f9.jpg"
        },
        {
            name: "ACHIEVE NEW GOALS",
            price: 89990,
            description:"Unlock your potential and conquer uncharted heights with 'Achieve New Goals'  your roadmap to success." ,
            image: "image/f4.jpg"
        },
        {
            name: "SPRING",
            price:83990 ,
            description:"Capturing the vibrant tapestry of renewal and blossoming hope, 'SPRING' unfolds a poetic dance of nature's awakening.",
            image: "image/f5.jpg"
        },
        {
            name: "TECNOLOGY DESIGN",
            price:52999 ,
            description: "An insightful exploration of the seamless intersection between creativity and functionality in technology design.",
            image: "image/38.jpg"
        },
        {
            name: "An adventure everyone deserves",
            price:134999 ,
            description: "Embark on a thrilling journey through uncharted realms in 'An adventure everyone deserves,' a tale that unfolds the extraordinary within the ordinary.",
            image: "image/f7.jpg"
        },
        
        // Add more products as needed
    ];

    const productContainer = document.querySelector(".product-container");

    // Function to create product details
    function createProductDetails(product) {
        const productDetails = document.createElement("div");
        productDetails.classList.add("product-details");
        
        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.classList.add("product-image");

        const productName = document.createElement("p");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = `Price: ₹${product.price.toFixed(2)}`;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        productDetails.appendChild(productImage);
        productDetails.appendChild(productName);
        productDetails.appendChild(productPrice);
        productDetails.appendChild(productDescription);

        return productDetails;
    }

    // Function to handle clicking on a product
    function handleProductClick(product) {
        // Create a query string from the product data
        const queryParams = `?name=${encodeURIComponent(product.name)}&price=${product.price}&description=${encodeURIComponent(product.description)}&image=${encodeURIComponent(product.image)}`;
        // Redirect to the product details page with query parameters
        window.location.href = `product-details.html${queryParams}`;
    }

    // Loop through the products and generate HTML for each product
    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.classList.add("product-image");

        const productName = document.createElement("p");
        productName.textContent = product.name;

        const viewDetailsButton = document.createElement("button");
        viewDetailsButton.textContent = "View Details";
        
        viewDetailsButton.addEventListener("click", () => {
            handleProductClick(product);
        });

        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(viewDetailsButton);

        productContainer.appendChild(productDiv);
    });
});
