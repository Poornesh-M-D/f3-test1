console.log("hello");
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log("DATA", data.products);
    let myArr = data.products;
    let myDiv = document.getElementById("results");
    myArr.map((item) => {
      myDiv.innerHTML += `<p><td>${item.id}</td> <td>${item.title}<td> <td>${item.description}</td></p>`;
    });
  });
