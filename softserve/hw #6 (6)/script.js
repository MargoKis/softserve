const priceElement = document.getElementById("outprice");

const colorElements = document.querySelectorAll(".color");

colorElements.forEach((color) => {
  color.addEventListener("click", () => {
    const price = color.getAttribute("data-price");

    priceElement.textContent = price;

    colorElements.forEach((c) => c.classList.remove("active"));

    color.classList.add("active");
  });
});


const sizeElements = document.querySelectorAll(".size");

sizeElements.forEach((size) => {
  size.addEventListener("click", () => {
    const price = size.getAttribute("data-price");

    priceElement.textContent = price;

    sizeElements.forEach((s) => s.classList.remove("active"));

    size.classList.add("active");
  });
});

const materialElements = document.querySelectorAll(".material");

sizeElements.forEach((material) => {
  size.addEventListener("click", () => {
    const price = material.getAttribute("data-price");

    priceElement.textContent = price;

    materialElements.forEach((m) => m.classList.remove("active"));

    material.classList.add("active");
  });
});