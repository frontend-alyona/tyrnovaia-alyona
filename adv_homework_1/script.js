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

  const createProductCard = (arr) => {
    const productContainer = document.createElement('div')
    const titleProduct = document.createElement('h1')
    const subtitleProduct = document.createElement('h3')
    const listContainer = document.createElement('div')
    const list = document.createElement('ul');

    titleProduct.innerText = 
    subtitleProduct.innerText = 

    

    arr.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.innerText = item;
      
      list.append(listItem);

      listContainer.append(list)

      productContainer.append(titleProduct, subtitleProduct, listContainer);
  console.log(productContainer);

  return productContainer;
    })

    

    document.body.append(productContainer);

  }

  createProductCard(products);