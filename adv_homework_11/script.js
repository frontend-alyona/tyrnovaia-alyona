const products = [
    {
      name: "Iphone 12",
      brand: "Apple",
      price: 3200000,
      properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
    },
    {
      name: "Galaxy S20 Ultra",
      brand: "Samsung",
      price: 2900000,
      properties: ["120 hz screen", "Water resistance"],
    },
    {
      name: "MI 9",
      brand: "Xiaomi",
      price: 1300000,
      properties: ["Best price", "Pay less - get more!"],
    },
  ];

  const createProductsCards = (arr) => {
    arr.forEach((items) => {
        let a = (items) => {
            let li = "";
            let ul;

            for (let key in items.properties) {
                li += "<li>" + items.properties[key] + "</li>"
            }

            if (li) {
                ul = '<ul>' + li + '</ul>'
            }
            return ul;
        };
        h1 = "<h1>" + items.name + "</h1>";
        h2 = "<h2>" + items.brand + "</h2>";
        uList = a(items);
        div = document.createElement("div");
        document.body.append(div);
        div.innerHTML = h1 + h2 + uList;
    })
};
createProductsCards(products);     


  
  
  
  
  
