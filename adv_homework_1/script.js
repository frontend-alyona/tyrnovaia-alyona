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

  const productCard = (title, subtitle, list) => {
    const productContainer = document.createElement("div");    /*container*/
    const titleElement = document.createElement("h1");
    const subtitleElement = document.createElement("h3");
    const listContainer = document.createElement("div");
    const unmarkedList = document.createElement('ul');
   

    titleElement.innerText = title;
    subtitleElement.innerText = subtitle;
    unmarkedList.innerText = list;

    unmarkedList.forEach((list) => {
            const listItem = document.createElement('li');
            listItem.innerText = list;
        
            list.append(listItem);
          })

    productContainer.append(titleElement, subtitleElement, listContainer);
    console.dir(productContainer);

        return productContainer;

  }

  const productItemElement = productCard(
    {
    name: "Iphone 12",
    brand: "Apple",
    price: 3200000,
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
  });
  document.body.append(productItemElement);



// const productCard = (title, subtitle, list) => {
//     const productContainer = document.createElement("div");
  
//     productContainer.innerHTML = `
//       <h1>${title}</h1>
//       <h3>${subtitle}</h3>

//       <div>
//         ${list.map((listItem) => `<ul>${listItem}</ul>`).join("")}
//       <div>
//       `;
  
//     return productContainer;
//   };
  
//   const productItemElement = productCard(
//       {
//         name: "Iphone 12",
//         brand: "Apple",
//         price: 3200000,
//         properties: ["Best camera", "Fast memory", "Apple A12 Processor"]
//      }
//    );
  
//   document.body.append(productItemElement);