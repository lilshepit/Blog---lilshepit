// blog.js

// Create the main elements for the blog page
document.addEventListener("DOMContentLoaded", () => {
    // Create a container div
    const container = document.createElement("div");
    container.style.textAlign = "center";
    container.style.fontFamily = "Arial, sans-serif";
    container.style.marginTop = "20px";

    // Add the title
    const title = document.createElement("h1");
    title.textContent = "First JS Creation";
    container.appendChild(title);

    // Add the author and date
    const author = document.createElement("p");
    const today = new Date();
    const formattedDate = today.toLocaleDateString();
    author.textContent = `Author: lilshepit | Date: ${formattedDate}`;
    author.style.margin = "10px 0";
    container.appendChild(author);

    // Add the image
    const image = document.createElement("img");
    image.src = "https://via.placeholder.com/600x300"; // Replace with your image link
    image.alt = "Blog Image";
    image.style.width = "60%";
    image.style.marginTop = "20px";
    container.appendChild(image);

    // Append the container to the body
    document.body.appendChild(container);
});

