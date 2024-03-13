let currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

  function renderInventory(shoeList) {
    let blackShoes = [];

    shoeList.forEach(designer => {
        designer.shoes.forEach(shoe => {
            if (shoe.name.includes('black')) {
                blackShoes.push([designer.name, shoe.name, shoe.price]);
            }
        });
    });

    return blackShoes;
}

console.log(renderInventory(currentInventory));
